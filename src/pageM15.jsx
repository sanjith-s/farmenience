import React, { useState } from "react";
import "./css/pageM15.css";
import NegotNav from "./components/negotNav";
import NegotiationBox1 from "./components/negotiationBox1";
import NegotiationBox2 from "./components/negotiationBox2";
import NegotiationBox3 from "./components/negotiationBox3";
import Container from "@material-ui/core/Container";
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
      purchaseDate: new Date(2022, 4, 23),
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

  const [address, setAddress] = useState(
    "No 7, dr sadaasivam road , HI Look salon , Thirumurthy street ,TNagar , Chennai 600017"
  );

  const userData = {
    name: "Rakesh k",
    number: 8300677299,
  };

  const [isEditOn, setEditOn] = useState(false);
  const editHandler = () => {
    setEditOn(true);
  };

  const updateAddress = () => {
    setAddress(document.querySelector(".address").value);
    setEditOn(false);
  };

  const handleAddress = () => {
    setAddress(document.querySelector(".address").value);
  };

  const [priceLimit1, setPriceLimit1] = useState();
  const [priceLimit2, setPriceLimit2] = useState();
  const [quantity1, setQuantity1] = useState();
  const [quantity2, setQuantity2] = useState();

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

  return (
    <Container style={{ padding: "10px 0px" }}>
      <CssBaseline />
      <div className="pg1">
        <NegotNav />
        <div className="negot_address">
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
        </div>

        <div className="pg1_items">
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
        </div>
      </div>

      <div className="pg2">
        <NegotNav />

        <div className="pg2_items">
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
        </div>
      </div>
      <div className="pg3">
        <NegotNav />

        <div className="pg3_items">
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
        </div>
      </div>
    </Container>
  );
}

export default PageM15;
