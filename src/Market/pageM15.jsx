import React, { useState, useEffect } from "react";
import NegotNav from "../components/negotNav";
import "../css/pageM15.css"
import UserDetails from "../components/userDetails";
import ShowUserDetails from "../components/showUserDetails";
import NegotiationBox1 from "../components/negotiationBox1";
import NegotiationBox2 from "../components/negotiationBox2";
import NegotiationBox3 from "../components/negotiationBox3";
import Container from "@mui/material/Container";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import { baseURL } from "../constants";
import Axios from "axios";
import Cookies from "js-cookie";
import { CssBaseline } from "@mui/material";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

function PageM15() {

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

  const item = JSON.parse(localStorage.getItem("reqs"));
  // const userData = {
  //   name: "Rakesh k",
  //   addressLine1:
  //     "No 7, Dr Sadaasivam road , HI Look salon , Thirumurthy street ",
  //   addressLine2: "TNagar , Chennai 600017",
  //   number: 8300677299,
  // };
  const [userData, setData] = useState([]);
  const [transit, setTransitData] = useState([]);

  const salesItems = [
    {
      index: 1,
      seller: 1,
      itemName: "Whole wheat",
      quantity: 10,
      actualPrice: 525,
      userPrice: 500,
      weight: 1,
      imgSrc: "WheatImg",
      purchaseDate: new Date(2022, 5, 13),
      acceptance: "notChanged",
    },
    {
      index: 2,
      seller: 2,
      itemName: "parboiled rice",
      quantity: 15,
      weight: 1,
      actualPrice: 950,
      userPrice: 850,
      imgSrc: "WheatImg",
      purchaseDate: new Date(2022, 4, 23),
      acceptance: "Changed",
    },
  ];

  useEffect(async() => {
    let token = Cookies.get('token');
    await Axios.get(`${baseURL}/profile`, { headers: { tokenstring: token } }).
      then((response) => {
        setData(response.data.message);
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

      await Axios.get(`${baseURL}/gettransit`, {
        headers: {tokenstring: token}
      }).then((response) => {
        setTransitData(response.data.message);
        console.log(response.data.message);
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
      });
  }, []);

  const [priceLimit1, setPriceLimit1] = useState();
  const [priceLimit2, setPriceLimit2] = useState();
  const [quantity1, setQuantity1] = useState();
  const [quantity2, setQuantity2] = useState();
  const [consumerName, setConsumerName] = useState();
  const [consumerAddress, setConsumerAddress] = useState();
  const [consumerNumber, setConsumerNumber] = useState();

  const priceLimitHandler = (limit, index) => {
    if (index == 1) {
      setPriceLimit1(limit);
    } else if (index == 2) {
      setPriceLimit2(limit);
    }
  };

  const QuantityCounterHandler = (counter, index) => {
    if (index == 1) {
      setQuantity1(counter);
    } else if (index == 2) {
      setQuantity2(counter);
    }
  };

  const userDataHandler = (userName, address, number) => {
    setConsumerName(userName);
    setConsumerAddress(address);
    setConsumerNumber(number);
    console.log(consumerName, consumerAddress, consumerNumber);
  };

  const [update, setUpdate] = useState("editCard");
  const updateHandler = () => {
    if (update === "editCard") {
      setUpdate("updatedCard");
    } else if (update === "updatedCard") {
      setUpdate("editCard");
    }
  };



  const [active, setActive] = useState("negot1");
  const [uprice, setUprice] = useState();
  const handleClick = async (opt) => {
    if (opt == 2) {
      setActive("negot2");
    } else if (opt == 3) {
      setActive("negot1");
    } else {
      await Swal.fire({
        icon: 'error',
        title: 'Alert !!!',
        text: "Illegal Event",
      })
    }
  }

  const negotHandler = () => {
    if (active === "negot1") {
      setActive("negot2");
    } else if (active === "negot2") {
      setActive("negot1");
    }
  };
  console.log(item);
  console.log(userData);

  const successHandler = async() => {
    alert('Success Chosen');
    let token = Cookies.get('token');
    await Axios.post(`${baseURL}/postreqorders`, {
        name: transit.name,
        price: transit.price,
        quantity: transit.quantity,
        specificType: transit.specificType,
        location: transit.location,
        senderEmail: transit.senderEmail,
        senderName: transit.senderName,
        senderPhoneNo: transit.senderPhoneNo,
        negPrice: transit.negPrice,
        negQuantity: transit.negQuantity,
        recieverName: transit.recieverName,
        recieverEmail: transit.recieverEmail,
    }, { headers: { tokenstring: token }}).then((res) => {
      console.log('success');  
    }).then(async (res) => {
      await Swal.fire({
        icon: 'success',
        title: "Successfully added seller's products" + res.data.message,
      })
    }).catch(async (err) => {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
      })
    })

    await Axios.post(`${baseURL}/delRequest`, {
      recieverEmail: transit.recieverEmail
    },{ headers: { tokenstring: token }}).then((res) => {
      console.log('success');  
    }).then(async (res) => {
      await Swal.fire({
        icon: 'success',
        title: "Successfully added seller's products" + res.data.message,
      })
    }).catch(async (err) => {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
      })
    })
  }


  
  return (
    <Container style={{ padding: ".625rem 0rem" }} id="google_translate_element">
      <CssBaseline />

      <Box className="gx-d-flex justify-content-center">
        <NegotNav handleClick={handleClick} />
      
        <ShowUserDetails
          userName={transit.recieverName}
          userAddressLine1={userData.addline1}
          userAddressLine2={userData.addline2}
          userNumber={transit.recieverEmail}
        />

              <div className="n-card1">
                <NegotiationBox1
                    iName={transit.name}
                    quantity={transit.quantity}
                    actualPrice={transit.price}
                    userPrice = {transit.negPrice}
                    // weight = {i.weight}
                    // index={ind}
                    userQuantity={transit.negQuantity}
                    onCounterHandler={QuantityCounterHandler}
                  />
                
                <div className="p-btn1"><Button
                  variant="contained"
                  color="success"
                  style={{
                    display: "flex",
                    columnGap: "0.625rem",
                    padding: "0.625rem",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "600",
                  }}
                  onClick={successHandler}
        > 
           <PublishedWithChangesIcon />
        </Button>
        <br></br>
        <Button
                  variant="contained"
                  color="error"
                  style={{
                    display: "flex",
                    columnGap: "0.625rem",
                    padding: "0.625rem",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "600",
                  }}
        > <UnpublishedIcon/></Button>
        </div>
        </div>
        {/* {active === "negot1" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                margin: "1.25rem 0rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
                  {transit.map((i,ind)=>{
                  return <div className="n-card1"><NegotiationBox1
                    iName={i.name}
                    quantity={i.quantity}
                    actualPrice={i.price}
                    userPrice = {i.nprice}
                    weight = {i.weight}
                    index={ind}
                    userQuantity={i.quantity}
                    onCounterHandler={QuantityCounterHandler}
                  />
                  <div className="p-btn1"><Button
                    variant="contained"
                    color="success"
                    style={{
                      display: "flex",
                      columnGap: "0.625rem",
                      padding: "0.625rem",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "600",
                    }}
                  >
                    {i.flag == 1 ? (
                      <UnpublishedIcon />
                    ) : (
                      <PublishedWithChangesIcon />
                    )}

                    {i.flag == 1
                      ? "Not yet seen"
                      : "Revised by Seller"}
                  </Button></div>
                </div>
              })}

              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }} >
                <Tooltip onClick={negotHandler} title="Negotiatation" >
                  <IconButton >
                    <ThumbsUpDownIcon style={{ color: "#74e81c", width: "38px", height: "38px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          </Box>
        )} */}

        {active === "negot2" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                margin: "1.25rem 0rem",
                borderRadius: ".5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {item.map((i, ind) => {
                return <div><NegotiationBox2
                  iName={i.name}
                  quantity={i.quantity}
                  weight={i.weight}
                  actualPrice={i.price}
                  getValue={setUprice}
                  index={ind}
                  userPrice={i.nprice}
                  onlimitHandler={priceLimitHandler}
                />
                </div>
              })}
              <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }} >
                <Tooltip onClick={negotHandler} title="Back"  >
                  <IconButton >
                    <CancelIcon style={{ color: "red", width: "38px", height: "38px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          </Box>
        )}

        {active === "negot3" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                margin: "1.25rem 0rem",
                borderRadius: ".5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <NegotiationBox3
                seller={item.seller}
                iName={item.name}
                actualPrice={item.price}
                purchaseDate={new Date()}
                userPrice={item.cprice}
                userQuantity={item.quan}
                acceptance={item.status}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }} >
                <Tooltip onClick={negotHandler} title="Cancel Deal" >
                  <IconButton >
                    <CancelIcon style={{ color: "red", width: "38px", height: "38px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default PageM15;