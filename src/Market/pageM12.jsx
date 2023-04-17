import React, { useState, useEffect, createContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "../css/pageM12.css";
import DeleteIcon from "@mui/icons-material/Delete";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from '@mui/icons-material/Edit';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import UserDetails from "../components/userDetails";
import PriceDetails from "../components/priceDetails";
import ShowUserDetails from "../components/showUserDetails";
import Page10Nav from "../components/page10Nav";
import BasketBox1 from "../components/basketBox1";
import BasketBox2 from "../components/basketBox2";
import BasketBox3 from "../components/basketBox3";
import ShareIcon from "@mui/icons-material/Share";
import Axios from "axios";
import { baseURL } from "../constants";

import {
  Card,
  Typography,
  Button,
  Box,
  Container,
  CssBaseline,
  Divider,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Cookies from "js-cookie";

const salesItems = [
  {
    index: 1,
    seller: 1,
    itemName: "Whole wheat",
    quantity: 10,
    actualPrice: 525,
    discountPrice: 500,
    imgSrc: "WheatImg",
    discountAmount: 25,
    purchaseDate: new Date(2022, 5, 13),
    acceptance: "yes",
    mrp: 400,
    discount: 100,
    delStatus: 0,
  },
  {
    index: 2,
    seller: 2,
    itemName: "parboiled rice",
    quantity: 15,
    actualPrice: 950,
    discountPrice: 800,
    imgSrc: "WheatImg",
    discountAmount: 150,
    purchaseDate: new Date(2022, 4, 23),
    acceptance: "no",
    mrp: 300,
    discount: 150,
    delStatus: 0,
  },
];

const steps = ["address", "order summary", "payment"];

const ConsumerName = createContext();
const ConsumerAddress = createContext();
const ConsumerNumber = createContext();
const Quantities = createContext();
const PaymentMethod = createContext();

function PageM12() {
  const [cartDeatils, setcartDeatils] = useState([]);

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  // }

  // const fullAnotherSpeak = (text) => {
  //   responsiveVoice.speak(text, "Tamil Male");
  // }

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
  //   document.body.appendChild(addScript);
  // }, []);

  const discount = 0.23;
  const [profile, setProfile] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {

    const fun = async () => {
      let token = Cookies.get('token');
    await Axios.get(`${baseURL}/profile`, {
      headers: {tokenstring: token}
    }).then((res)=> {
      console.log(res);
        setProfile(res.data.message);
    })
    .catch(async (res) => {
      if (res.response.data.message === 'Error in connection') {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Check Network Connection!',
        })
      }
      else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login Error',
        })
        navigate('../login')
      }
    })

    await Axios.get(`${baseURL}/buyer/getcart`, {
      headers: {tokenstring: token}
    }).then((res) => {
        setCart(res.data.message);
        // console.log(res.data.message.items);
        console.log(cart.items);
        setcartDeatils(res.data.message.items);
    }).catch(async (res) => {
      if (res.response.data.message === 'Error in connection') {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Check Network Connection!',
        })
      }
      else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login Error',
        })
        navigate('../login')
      }
    })
    }
    fun();
  }, []);

  const userDataHandler = (userName, address, number) => {
    setConsumerName(userName);
    setConsumerAddress(address);
    setConsumerNumber(number);
  };

  const [update, setUpdate] = useState("updatedCard");
  const updateHandler = () => {
    if (update === "editCard") {
      setUpdate("updatedCard");
    } else if (update === "updatedCard") {
      setUpdate("editCard");
    }
  };

  const [value, setValue] = useState(0);
  const [active, setActive] = useState("negot1");
  const negotHandler = () => {
    if (active === "negot1") {
      setActive("negot2");
      setValue(1);
    } else if (active === "negot2") {
      setActive("negot3");
      setValue(2);
    } else if (active === "negot3") {
      setActive("negot1");
      setValue(0);
    }
  };

  const userData = {
    name: "Rakesh k",
    address:
      "No 7, Dr Sadaasivam road , HI Look salon , Thirumurthy street ,TNagar , Chennai 600017",
    number: 8300677299,
  };

  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [consumerName, setConsumerName] = useState(userData.name);
  const [consumerAddress, setConsumerAddress] = useState(userData.address);
  const [consumerNumber, setConsumerNumber] = useState(userData.number);

  const QuantityCounterHandler = (counter, index) => {
    if (index == 1) {
      setQuantity1(counter);
    } else if (index == 2) {
      setQuantity2(counter);
    }
  };

  const [quantities, setQuantities] = useState([]);
  useEffect(() => {
    setQuantities(quantities => [...quantities, quantity1]);
    setQuantities(quantities => [...quantities, quantity2]);
  })


  let total = 0;

  salesItems.map((item) => {
    total += item.actualPrice;
    total = total * quantity1;
    total = total * quantity2;
    return;
  });

  let delivery = total * (5 / 100);
  let save = 0;

  salesItems.map((item) => {
    save += item.discountAmount;
    return;
  });

  let totalAmount = delivery + total;

  const [paymentMethod, setPaymentMethod] = useState("payment method");

  const paymentHandler = (method) => {
    console.log(method);
    setPaymentMethod(method);
  };

  const items = [
    { pid: 1, quantity: 3 },
    { pid: 2, quantity: 1 },
  ]

  const makePayment = () => {
    localStorage.setItem('ConsumerName', consumerName);
    localStorage.setItem('ConsumerAddress', consumerAddress);
    localStorage.setItem('ConsumerNumber', consumerNumber);
    localStorage.setItem('Quantities', JSON.stringify(quantities));
    localStorage.setItem('PaymentMethod', paymentMethod);

    fetch(`${baseURL}/createPayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@farm.com",
        cart: items,
      }),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })
  }

  return (
    <Container style={{ padding: "1.25rem 0rem" }} id="google_translate_element" >
    {/*onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}*/}
    
      <CssBaseline />
      <ul id="mylist">

      </ul>
      <Box sx={{ marginBottom: "1.25rem" }} className="gx-d-flex justify-content-center">
        <Stepper activeStep={value} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: "darkgreen",
                    fontSize: "1.25rem",
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box>
        {active === "negot1" && (
          <Box>
            <Page10Nav
              title={location.state ? location.state.from : "my cart"}
            />
          </Box>
        )}
        {active === "negot2" && (
          <Box>
            <Page10Nav
              title={location.state ? location.state.from : "order summary"}
            />
          </Box>
        )}
        {active === "negot3" && (
          <Box>
            <Page10Nav
              title={location.state ? location.state.from : "payment"}
            />
          </Box>
        )}

        {(active === "negot1" || active === "negot2") && (
          <Box>
            {update === "editCard" && active === "negot1" && (
              <Box style={{ position: "relative " }}>
                <UserDetails
                  userAddress= {profile.address}
                  userName= {profile.name}
                  userNumber= {userData.number}
                  onDataHandler= {userDataHandler}
                />
                <Button
                  variant="contained"
                  onClick={updateHandler}
                  style={{
                    position: "absolute",
                    backgroundColor:"#74e81c",
                    top: ".625rem",
                    right: ".625rem",
                    // fontWeight: "600",
                    borderRadius: "50%",
                    height: "3.75rem",
                    width: ".625rem",
                  }}
                >
                  <ThumbUpAltIcon style={{ width: "1.875rem", height: "1.875rem" }} />
                </Button>
              </Box>
            )}

            {(update === "updatedCard" || active === "negot2") && (
              <Box style={{ position: "relative " }}>
                <ShowUserDetails
                  userName={profile.name}
                  userAddressLine1={profile.addline1}
                  userAddressLine2={profile.addline2}
                  userNumber={profile.phoneno}
                />
                {active === "negot1" && (
                  <Button
                    onClick={updateHandler}
                    variant="contained"
                    style={{
                      position: "absolute",
                      backgroundColor:"#74e81c",
                      top: ".625rem",
                      right: ".625rem",
                      // fontWeight: "600", 
                      borderRadius: "50%",
                      height: "3.75rem",
                      width: ".625rem",
                    }}
                  >
                    <EditIcon style={{ width: "1.875rem", height: "1.875rem" }} />
                  </Button>
                )}
              </Box>
            )}
          </Box>
        )}

        {active === "negot1" && (

          <Box sx={{ marginTop: ".625rem" }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: ".9375rem",
                borderRadius: ".3125rem",
                display: "flex",
                columnGap: "2.5rem",
                justifyContent: "center",
              }}
            >
              <Button 
              style={{
                backgroundColor:"#74e81c",
              }}
              variant="contained">
                add <ShoppingCartIcon style={{ marginLeft: ".5rem" }} />
              </Button>
              <Button
              style={{
                backgroundColor:"#74e81c",
              }}
       variant="contained">
                share
                <ShareIcon style={{ marginLeft: ".5rem" }} />
              </Button>
              <Button 
              style={{
                backgroundColor:"#74e81c",
              }} variant="contained">
                delete <DeleteIcon style={{ marginLeft: ".5rem" }} />
              </Button>
            </Box>

            <Box
              style={{
                height: "25rem",
                overflow: "auto",
                borderRadius: ".5rem",
              }}
            >
              {cartDeatils.map((item, index) => {
                // const qcounter = item.index == 1 ? quantity1 : quantity2;
                return (
                  <Box key={index++}>
                    <BasketBox1
                      iName={item.productName}
                      quantity={item.quantity}
                      actualPrice={item.price}
                      discountAmount={(item.price * discount).toPrecision(2)}
                      discountPrice={item.price - (item.price * discount).toPrecision(2)}
                      index={item.index}
                      // userQuantity={qcounter}
                      onCounterHandler={QuantityCounterHandler}
                    />
                  </Box>
                );
              })}
              {/* {salesItems.map((item, index) => {
                const qcounter = item.index == 1 ? quantity1 : quantity2;
                return (
                  <Box key={index}>
                    <BasketBox1
                      iName={item.itemName}
                      quantity={item.quantity}
                      actualPrice={item.actualPrice}
                      discountAmount={item.discountAmount}
                      discountPrice={item.discountPrice}
                      index={item.index}
                      userQuantity={qcounter}
                      onCounterHandler={QuantityCounterHandler}
                    />
                  </Box>
                );
              })} */}
            </Box>
          </Box>
        )}

        {active === "negot2" && (
          <Box>
            <Box
              style={{
                height: "28.125rem",
                overflow: "auto",
                marginBottom: "1.25rem",
                borderRadius: ".5rem",
              }}
            >
              {salesItems.map((item, index) => {
                return (
                  <Box>
                    <BasketBox2
                      key={index}
                      iName={item.itemName}
                      quantity={item.quantity}
                      actualPrice={item.actualPrice}
                      discountAmount={item.discountAmount}
                      discountPrice={item.discountPrice}
                      index={item.index}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}

        {active === "negot3" && (
          <Box
            style={{
              marginBottom: "1.25rem",
              borderRadius: ".5rem",
            }}
          >
            <BasketBox3 onPaymentHandler={paymentHandler} />
          </Box>
        )}

        <Card
          style={{
            position: "relative ",
            backgroundColor: "white",
            width: "100%",
            padding: "1.25rem 0rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            price details
          </Typography>

          {(active === "negot1" || active === "negot2") && (
            <Box>
              {salesItems.map((item, index) => {
                const qcounter = item.index == 1 ? quantity1 : quantity2;
                return (
                  <Box key={index}>
                    <PriceDetails
                      userQuantity={qcounter}
                      mrp={item.actualPrice}
                      discount={item.discountAmount}
                      productName={item.itemName}
                    />

                    <Divider
                      style={{
                        border: ".0625rem solid",
                        width: "70%",
                        margin: "0rem auto",
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          )}

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              padding: ".625rem 0rem",
            }}
          >
            <Box style={{ width: "70%" }}>
              <Box
                sx={{
                  display: "flex",
                  margin: ".5rem 0rem",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  deliver fee
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1.125rem",
                    overflow: "auto",
                  }}
                >
                  {delivery}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  margin: ".5rem 0rem",
                  justifyContent: "space-between",
                  backgroundColor: "lightskyblue",
                  padding: ".5rem ",
                  borderRadius: ".3125rem",
                }}
              >
                {active === "negot1" ? (
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    total amount
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    amount payable
                  </Typography>
                )}

                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1.125rem",
                    overflow: "auto",
                  }}
                >
                  {totalAmount}
                </Typography>
              </Box>
              {active === "negot1" && (
                <Typography
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    textTransform: "uppercase",
                    wordSpacing: ".375rem",
                    color: "red",
                  }}
                >
                  you will save ₹{save} on this order
                </Typography>
              )}
            </Box>
          </Box>
          {active === "negot1" && (
            <Button
              variant="contained"
              color="success"
              onClick={makePayment}
              style={{
                position: "absolute",
                backgroundColor:"#74e81c",
                bottom: ".75rem",
                right: ".75rem",
                
              }}
            >
              place order
            </Button>
          )}
          {active === "negot2" && (
            <Button
              variant="contained"
      
              onClick={negotHandler}
              style={{
                position: "absolute",
                bottom: ".75rem",
                backgroundColor:"#74e81c",
                right: ".75rem",
                fontSize: "1.125rem",
                fontWeight: "600",
              }}
            >
              continue
            </Button>
          )}

          {active === "negot3" && (
            <Box style={{ padding: ".9375rem" }}>
              <Button
                variant="contained"
                color="error"
                onClick={negotHandler}
                style={{
                  position: "absolute",
                  bottom: ".75rem",
                  left: ".75rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                cancel deal
              </Button>
              <Button
                variant="contained"
        
                style={{
                  position: "absolute",
                  bottom: ".75rem",
                  backgroundColor:"#74e81c",
                  right: ".75rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                <Link
                  to="/M13"
                  state={{
                    from: paymentMethod,
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    style={{
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    continue payment
                  </Typography>
                </Link>
              </Button>
            </Box>
          )}
        </Card>
      </Box>

      <ConsumerName.Provider value={consumerName}>
        <ConsumerAddress.Provider value={consumerNumber}>
          <ConsumerNumber.Provider value={consumerAddress}>
            <Quantities.Provider value={quantities}>
              <PaymentMethod.Provider value={paymentMethod}>
              </PaymentMethod.Provider>
            </Quantities.Provider>
          </ConsumerNumber.Provider>
        </ConsumerAddress.Provider>
      </ConsumerName.Provider>

    </Container>
  );
}

export { ConsumerName, ConsumerAddress, ConsumerNumber, Quantities, PaymentMethod }
export default PageM12;
