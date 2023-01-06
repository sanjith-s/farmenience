import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./css/pageM12.css";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ItemBox from "./components/itemBox";
import ProcessBar from "./components/process_bar";
import OrderSummary from "./components/orderSummary";
import PaymentPage from "./components/payment-page";
import UserDetails from "./components/userDetails";
import PriceDetails from "./components/priceDetails";
import ShowUserDetails from "./components/showUserDetails";
import Page10Nav from "./components/page10Nav";
import BasketBox1 from "./components/basketBox1";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
function Fname() {
  var username = "Yuvaraj";
  var [Address, setAddress] = useState("Ceg-chennai");
  var [isEditOn, setEditOn] = useState(false);
  var [displays, setDisplay] = useState(["", "none", "none"]);
  var total_amount = 0;
  const GiveEdit = () => {
    setEditOn(true);
  };
  const updateAddress = () => {
    setAddress(document.querySelector(".add-in").value);
    setEditOn(false);
  };
  const handleAddress = () => {
    setAddress(document.querySelector(".add-in").value);
  };
  var [process_no, setProcess] = useState([1, "10"]);
  const placeOrder = () => {
    setDisplay(["", "", "none"]);
    setProcess([2, "55"]);
    setTimeout(() => {
      setDisplay(["none", "", "none"]);
    }, 150);
  };
  const handleContinue = () => {
    setDisplay(["none", "", ""]);
    setProcess([3, "90"]);
    setTimeout(() => {
      setDisplay(["none", "none", ""]);
    }, 150);
  };
  const goAddress = () => {
    setProcess([1, "10"]);
    setTimeout(() => {
      setDisplay(["", "none", "none"]);
    });
  };

  // const salesItems = [
  //   {
  //     iName: "Wheat",
  //     quantity: 10,
  //     price: 500,
  //     imgSrc: "",
  //     discount: 80,
  //   },
  //   {
  //     iName: "Rice",
  //     quantity: 20,
  //     price: 300,
  //     imgSrc: "",
  //     discount: 40,
  //   },
  // ];

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
    },
    // {
    //   index: 1,
    //   seller: 1,
    //   itemName: "Whole wheat",
    //   quantity: 10,
    //   actualPrice: 525,
    //   discountPrice: 500,
    //   imgSrc: "WheatImg",
    //   discountAmount: 25,
    //   purchaseDate: new Date(2022, 5, 13),
    //   acceptance: "yes",
    // },
    // {
    //   index: 2,
    //   seller: 2,
    //   itemName: "parboiled rice",
    //   quantity: 15,
    //   actualPrice: 950,
    //   discountPrice: 800,
    //   imgSrc: "WheatImg",
    //   discountAmount: 150,
    //   purchaseDate: new Date(2022, 4, 23),
    //   acceptance: "no",
    // },
    // {
    //   index: 1,
    //   seller: 1,
    //   itemName: "Whole wheat",
    //   quantity: 10,
    //   actualPrice: 525,
    //   discountPrice: 500,
    //   imgSrc: "WheatImg",
    //   discountAmount: 25,
    //   purchaseDate: new Date(2022, 5, 13),
    //   acceptance: "yes",
    // },
    // {
    //   index: 2,
    //   seller: 2,
    //   itemName: "parboiled rice",
    //   quantity: 15,
    //   actualPrice: 950,
    //   discountPrice: 800,
    //   imgSrc: "WheatImg",
    //   discountAmount: 150,
    //   purchaseDate: new Date(2022, 4, 23),
    //   acceptance: "no",
    // },
  ];

  const [quantity1, setQuantity1] = useState();
  const [quantity2, setQuantity2] = useState();
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
  const negotHandler = () => {
    if (active === "negot1") {
      setActive("negot2");
    } else if (active === "negot2") {
      setActive("negot3");
    } else if (active === "negot3") {
      setActive("negot1");
    }
  };

  const userData = {
    name: "Rakesh k",
    address:
      "No 7, Dr Sadaasivam road , HI Look salon , Thirumurthy street ,TNagar , Chennai 600017",
    number: 8300677299,
  };

  const priceData = {
    pname: "wheat",
    mrp: 400,
    discount: 100,
    delivery: 50,
    total: 350,
  };

  // itemsAdded.forEach((item) => {
  //   total_amount += item.price - item.discount + 50;
  // });
  return (
    <Container style={{ padding: "10px 0px" }}>
      <CssBaseline />

      <Box>
        <Box>
          <Page10Nav title={location.state ? location.state.from : "my cart"} />
        </Box>

        {update === "editCard" && (
          <Box style={{ position: "relative " }}>
            <ShowUserDetails
              userName={consumerName}
              userAddress={consumerAddress}
              userNumber={consumerNumber}
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
              change
            </Button>
          </Box>
        )}

        {update === "updatedCard" && (
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

        {active === "negot1" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                height: "400px",
                overflow: "auto",
                margin: "20px 0px",
                borderRadius: "8px",
              }}
            >
              {salesItems.map((item, index) => {
                return (
                  <BasketBox1
                    key={index}
                    iName={item.itemName}
                    quantity={item.quantity}
                    actualPrice={item.actualPrice}
                    discountAmount={item.discountAmount}
                    discountPrice={item.discountPrice}
                    index={item.index}
                    onCounterHandler={QuantityCounterHandler}
                  />
                );
              })}
              {/* <Button
                variant="contained"
                color="success"
                onClick={negotHandler}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Negotiation price
              </Button> */}
            </Box>
          </Box>
        )}

        <Box style={{ position: "relative ", backgroundColor: "white" }}>
          <PriceDetails
            mrp={priceData.mrp}
            discount={priceData.discount}
            productName={priceData.pname}
          />
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
              50
            </Typography>
          </Box>
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
              total amount
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "18px",
                overflow: "auto",
              }}
            >
              500
            </Typography>
            <Typography
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "24px",
                padding: "12px 0px",
                textTransform: "uppercase",
                wordSpacing: "6px",
                color: "red",
              }}
            >
              {" "}
              you will save ₹50 on this order{" "}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="success"
            onClick={negotHandler}
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              fontWeight: "600",
            }}
          >
            place order
          </Button>
        </Box>

        {/* {active === "negot1" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                height: "400px",
                overflow: "auto",
                margin: "20px 0px",
                borderRadius: "8px",
              }}
            >
              {salesItems.map((item, index) => {
                return (
                  <NegotiationBox1
                    key={index}
                    iName={item.itemName}
                    quantity={item.quantity}
                    actualPrice={item.actualPrice}
                    discountAmount={item.discountAmount}
                    discountPrice={item.discountPrice}
                    index={item.index}
                    onCounterHandler={QuantityCounterHandler}
                  />
                );
              })}
              <Button
                variant="contained"
                color="success"
                onClick={negotHandler}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Negotiation price
              </Button>
            </Box>
          </Box>
        )}

        {active === "negot2" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                height: "400px",
                overflow: "auto",
                margin: "20px 0px",
                borderRadius: "8px",
              }}
            >
              {salesItems.map((item, index) => {
                const qcounter = item.index == 1 ? quantity1 : quantity2;
                return (
                  <NegotiationBox2
                    key={index}
                    iName={item.itemName}
                    quantity={item.quantity}
                    actualPrice={item.actualPrice}
                    discountAmount={item.discountAmount}
                    discountPrice={item.discountPrice}
                    index={item.index}
                    userQuantity={qcounter}
                    onlimitHandler={priceLimitHandler}
                  />
                );
              })}
              <Button
                variant="contained"
                color="success"
                onClick={negotHandler}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Submit Deal{" "}
              </Button>
            </Box>
          </Box>
        )}

        {active === "negot3" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                height: "400px",
                overflow: "auto",
                margin: "20px 0px",
                borderRadius: "8px",
              }}
            >
              {salesItems.map((item, index) => {
                const qcounter = item.index == 1 ? quantity1 : quantity2;
                const plimit = item.index == 1 ? priceLimit1 : priceLimit2;
                return (
                  <NegotiationBox3
                    key={index}
                    seller={item.seller}
                    iName={item.itemName}
                    discountPrice={item.discountPrice}
                    purchaseDate={item.purchaseDate}
                    userPrice={plimit}
                    userQuantity={qcounter}
                    acceptance={item.acceptance}
                  />
                );
              })}
              <Button
                variant="contained"
                color="success"
                onClick={negotHandler}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Cancel Deal{" "}
              </Button>
            </Box>
          </Box>
        )}
        */}
      </Box>
    </Container>
  );
}
export default Fname;
