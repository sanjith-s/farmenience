import React, { useState } from "react";
import NegotNav from "../components/negotNav";
import UserDetails from "../components/userDetails";
import ShowUserDetails from "../components/showUserDetails";
import NegotiationBox1 from "../components/negotiationBox1";
import NegotiationBox2 from "../components/negotiationBox2";
import NegotiationBox3 from "../components/negotiationBox3";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";

function PageM15() {
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

  const userData = {
    name: "Rakesh k",
    address:
      "No 7, Dr Sadaasivam road , HI Look salon , Thirumurthy street ,TNagar , Chennai 600017",
    number: 8300677299,
  };

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
  const negotHandler = () => {
    if (active === "negot1") {
      setActive("negot2");
    } else if (active === "negot2") {
      setActive("negot3");
    } else if (active === "negot3") {
      setActive("negot1");
    }
  };

  return (
    <Container style={{ padding: "10px 0px" }}>
      <CssBaseline />

      <Box>
        <NegotNav />
        {update === "editCard" && (
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
                backgroundColor:"#74e81c",
                top: "15px",
                right: "10px",
                fontWeight: "600",
              }}
            >
              update
            </Button>
          </Box>
        )}

        {update === "updatedCard" && (
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
                backgroundColor:"#74e81c",
                bottom: "15px",
                right: "10px",
                fontWeight: "600",
              }}
            >
              Back
            </Button>
          </Box>
        )}

        {active === "negot1" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                margin: "20px 0px",
                display: "flex",
                flexDirection: "column",
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
                  backgroundColor:"#74e81c",
                  bottom: "34px",
                  right: "14px",
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
                margin: "20px 0px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
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
                  bottom: "18px",
                  backgroundColor:"#74e81c",
                  right: "14px",
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
                margin: "20px 0px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
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
                color="error"
                onClick={negotHandler}
                style={{
                  position: "absolute",
                  bottom: "18px",
                  right: "14px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Cancel Deal{" "}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default PageM15;
