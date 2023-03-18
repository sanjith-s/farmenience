import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../css/pageM12.css";
import DeleteIcon from "@mui/icons-material/Delete";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import UserDetails from "../components/userDetails";
import PriceDetails from "../components/priceDetails";
import ShowUserDetails from "../components/showUserDetails";
import Page10Nav from "../components/page10Nav";
import BasketBox1 from "../components/basketBox1";
import BasketBox2 from "../components/basketBox2";
import BasketBox3 from "../components/basketBox3";
import ShareIcon from "@mui/icons-material/Share";

import {baseURL} from "../constants";

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




function PageM12() {
  const userDataHandler = (userName, address, number) => {
    setConsumerName(userName);
    setConsumerAddress(address);
    setConsumerNumber(number);
  };

  const [update, setUpdate] = useState("editCard");
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
  const [consumerName, setConsumerName] = useState();
  const [consumerAddress, setConsumerAddress] = useState();
  const [consumerNumber, setConsumerNumber] = useState();

  const QuantityCounterHandler = (counter, index) => {
    if (index == 1) {
      setQuantity1(counter);
    } else if (index == 2) {
      setQuantity2(counter);
    }
  };

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

  const makePayment =() => {
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
    <Container style={{ padding: "20px 0px" }}>
      <CssBaseline />

      <Box sx={{ marginBottom: "20px" }}>
        <Stepper activeStep={value} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: "darkgreen",
                    fontSize: "20px",
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
                  userAddress={userData.address}
                  userName={userData.name}
                  userNumber={userData.number}
                  onDataHandler={userDataHandler}
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={updateHandler}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontWeight: "600",
                  }}
                >
                  update
                </Button>
              </Box>
            )}

            {(update === "updatedCard" || active === "negot2") && (
              <Box style={{ position: "relative " }}>
                <ShowUserDetails
                  userName={consumerName}
                  userAddress={consumerAddress}
                  userNumber={consumerNumber}
                />
                {active === "negot1" && (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={updateHandler}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontWeight: "600",
                    }}
                  >
                    change
                  </Button>
                )}
              </Box>
            )}
          </Box>
        )}

        {active === "negot1" && (
          <Box sx={{ marginTop: "10px" }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: "5px",
                display: "flex",
                columnGap: "40px",
                justifyContent: "center",
              }}
            >
              <Button color="success" variant="contained">
                add <ShoppingCartIcon style={{ marginLeft: "8px" }} />
              </Button>
              <Button color="success" variant="contained">
                share
                <ShareIcon style={{ marginLeft: "8px" }} />
              </Button>
              <Button color="success" variant="contained">
                delete <DeleteIcon style={{ marginLeft: "8px" }} />
              </Button>
            </Box>
            <Box
              style={{
                height: "400px",
                overflow: "auto",
                borderRadius: "8px",
              }}
            >
              {salesItems.map((item, index) => {
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
              })}
            </Box>
          </Box>
        )}

        {active === "negot2" && (
          <Box>
            <Box
              style={{
                height: "450px",
                overflow: "auto",
                marginBottom: "20px",
                borderRadius: "8px",
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
              marginBottom: "20px",
              borderRadius: "8px",
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
            padding: "20px 0px",
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
                        border: "1px solid",
                        width: "70%",
                        margin: "0px auto",
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
              padding: "10px 0px",
            }}
          >
            <Box style={{ width: "70%" }}>
              <Box
                sx={{
                  display: "flex",
                  margin: "8px 0px",
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
                    fontSize: "18px",
                    overflow: "auto",
                  }}
                >
                  {delivery}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  margin: "8px 0px",
                  justifyContent: "space-between",
                  backgroundColor: "lightskyblue",
                  padding: "8px ",
                  borderRadius: "5px",
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
                    fontSize: "18px",
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
                    fontSize: "24px",
                    textTransform: "uppercase",
                    wordSpacing: "6px",
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
                bottom: "12px",
                right: "12px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              place order
            </Button>
          )}
          {active === "negot2" && (
            <Button
              variant="contained"
              color="success"
              onClick={negotHandler}
              style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              continue
            </Button>
          )}

          {active === "negot3" && (
            <Box style={{ padding: "15px" }}>
              <Button
                variant="contained"
                color="success"
                onClick={negotHandler}
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                cancel deal
              </Button>
              <Button
                variant="contained"
                color="success"
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  fontSize: "16px",
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
                      fontSize: "16px",
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
    </Container>
  );
}

export default PageM12;
