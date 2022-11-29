import React, { useState } from "react";
import "./css/pageM15.css";
import NegotNav from "./components/negotNav";

function PageM15() {
  const salesItems = [
    {
      itemName: "Whole wheat",
      quantity: 10,
      actualPrice: 525,
      discountPrice: 500,
      imgSrc: "",
      discountAmount: 25,
    },
    {
      itemName: "parboiled rice",
      quantity: 15,
      actualPrice: 950,
      discountPrice: 800,
      imgSrc: "",
      discountAmount: 150,
    },
  ];
  return (
    <div>
      <div className="pg1">
        <NegotNav title="My Negotiations" />
        <div>
          <p>Adress</p>
          <h3>Ramesh K</h3>
          <p>
            No 7, dr sadaasivam road , HI Look salon , Thirumurthy street ,T
            Nagar , Chennai 600017
          </p>
          <p>8300677299</p>
          <p>change</p>
        </div>
      </div>
      <div className="pg1_items">
        {salesItems.map((item, index) => {
          return (
            <negotiationBox
              key={index}
              iName={item.itemName}
              quantity={item.quantity}
              actualPrice={item.actualPrice}
              imgSrc={item.imgSrc}
              discountAmount={item.discountAmount}
              discountPrice={item.discountPrice}
            />
          );
        })}
      </div>
    </div>
  );
}
export default PageM15;
