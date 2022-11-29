import React, { useState } from "react";
import "./css/pageM15.css";
import NegotNav from "./components/negotNav";
import NegotiationBox from "./components/negotiationBox";
import WheatImg from "./WheatImg.png";

function PageM15() {
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

  const salesItems = [
    {
      itemName: "Whole wheat",
      quantity: 10,
      actualPrice: 525,
      discountPrice: 500,
      imgSrc: "WheatImg",
      discountAmount: 25,
    },
    {
      itemName: "parboiled rice",
      quantity: 15,
      actualPrice: 950,
      discountPrice: 800,
      imgSrc: "WheatImg",
      discountAmount: 150,
    },
  ];

  return (
    <div>
      <div className="pg1">
        <NegotNav />
        <div>
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
            <button className="chg-btn" onClick={editHandler}>
              Change
            </button>
          ) : (
            <button className="chg-btn" onClick={updateAddress}>
              Update
            </button>
          )}
          <p>{userData.number}</p>
        </div>

        <div className="pg1_items">
          {salesItems.map((item, index) => {
            return (
              <NegotiationBox
                key={index}
                iName={item.itemName}
                quantity={item.quantity}
                actualPrice={item.actualPrice}
                discountAmount={item.discountAmount}
                discountPrice={item.discountPrice}
              />
            );
          })}
          <p>Negotiative price</p>
        </div>
      </div>

      <div className="pg2">
        <NegotNav />

        <div className="pg2_items">
          {salesItems.map((item, index) => {
            return (
              <NegotiationBox
                key={index}
                iName={item.itemName}
                quantity={item.quantity}
                actualPrice={item.actualPrice}
                discountAmount={item.discountAmount}
                discountPrice={item.discountPrice}
              />
            );
          })}
          ;<p>sumbit</p>
        </div>
      </div>
      <div className="pg3">
        <NegotNav />

        <div className="pg3_items">
          {salesItems.map((item, index) => {
            return (
              <NegotiationBox
                key={index}
                iName={item.itemName}
                quantity={item.quantity}
                actualPrice={item.actualPrice}
                discountAmount={item.discountAmount}
                discountPrice={item.discountPrice}
              />
            );
          })}
          ;<p>sumbit</p>
        </div>
      </div>
    </div>
  );
}

export default PageM15;
