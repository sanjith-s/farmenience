import React, { useState } from "react";
import NegotNav from "./components/negotNav";
import UserDetails from "./components/userDetails";
import NegotiationBox1 from "./components/negotiationBox1";
import NegotiationBox2 from "./components/negotiationBox2";
import NegotiationBox3 from "./components/negotiationBox3";
import Container from "@material-ui/core/Container";
import { Box, Card, Divider, TextField, Typography } from "@mui/material";
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
  ];

  const userData = {
    name: "Rakesh k",
    address:
      "No 7, Dr Sadaasivam road , HI Look salon , Thirumurthy street ,TNagar , Chennai 600017",
    number: 8300677299,
  };

  // const [address, setAddress] = useState(
  //   "No 7, Dr Sadaasivam road , HI Look salon , Thirumurthy street ,TNagar , Chennai 600017"
  // );
  // const addressHandler = (event) => {
  //   let newAddress = event.target.value;
  //   setAddress(newAddress);
  // };

  // const [name, setName] = useState(userData.name);
  // const nameHandler = (event) => {
  //   let newName = event.target.value;
  //   setName(newName);
  // };

  // const [number, setNumber] = useState(userData.number);
  // const numberHandler = (event) => {
  //   let newNumber = event.target.value;
  //   setNumber(newNumber);
  // };

  // const [isEditOn, setEditOn] = useState(false);
  // const editHandler = () => {
  //   setEditOn(true);
  // };

  // const updateAddress = () => {
  //   setAddress(document.querySelector(".address").value);
  //   setEditOn(false);
  // };

  // const handleAddress = () => {
  //   setAddress(document.querySelector(".address").value);
  // };

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

  return (
    <Container style={{ padding: "10px 0px" }}>
      <CssBaseline />

      <Box>
        <NegotNav />
        <UserDetails
          userAddress={userData.address}
          userName={userData.name}
          userNumber={userData.number}
          onDataHandler={userDataHandler}
        />
        {/* <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            padding: "20px",
            margin: "8px 0px",
            borderRadius: "4px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              marginBottom: "30px",
              alignSelf: "center",
            }}
          >
            consumer details
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <TextField
              type="text"
              onChange={nameHandler}
              id="standard-basic"
              defaultValue={name}
              variant="standard"
              style={{ fontWeight: "600" }}
              label={
                <Typography
                  variant="body1"
                  style={{
                    textTransform: "uppercase",
                    color: "#2e7d32",
                  }}
                >
                  name
                </Typography>
              }
            />
            <TextField
              multiline
              fullWidth
              maxRows={2}
              onChange={addressHandler}
              id="standard-basic"
              defaultValue={address}
              variant="standard"
              style={{ fontWeight: "600" }}
              label={
                <Typography
                  variant="body1"
                  style={{
                    textTransform: "uppercase",
                    color: "#2e7d32",
                    // fontWeight: "600",
                  }}
                >
                  address
                </Typography>
              }
            />
            <TextField
              type="tel"
              onChange={addressHandler}
              id="standard-basic"
              defaultValue={number}
              variant="standard"
              style={{ fontWeight: "600" }}
              label={
                <Typography
                  variant="body1"
                  style={{
                    textTransform: "uppercase",
                    color: "#2e7d32",
                    // fontWeight: "600",
                  }}
                >
                  number
                </Typography>
              }
            />
          </Box>
        </Card> */}

        {/* <div className="negot_address">
          <p>Adress:</p>
          <h3>{userData.name}</h3>
          {!isEditOn ? (
            <span>{address}</span>
          ) : (
            <input
              type="text"
              className="address"
              onChange={handleAddress}
              value={address}
            />
          )}
          {!isEditOn ? (
            <button className="chg_btn" onClick={editHandler}>
              Change
            </button>
          ) : (
            <button className="chg_btn" onClick={updateAddress}>
              Update
            </button>
          )}
          <p>{userData.number}</p>
        </div> */}

        <Box>
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
          <button className="price_btn">Negotiate price</button>
        </Box>
      </Box>

      <Box>
        <NegotNav />

        <Box>
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
          <button className="submit_btn">sumbit</button>
        </Box>
      </Box>
      <Box>
        <NegotNav />

        <Box>
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
        </Box>
      </Box>
    </Container>
  );
}

export default PageM15;
