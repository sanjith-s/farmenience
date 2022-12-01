import React, { useState } from "react";
import WheatImg from "../WheatImg.png";
import "../css/negotiationBox.css";

function NegotiationBox1(props) {
  let [counter, setcounter] = useState(1);
  let increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter >= 2 ? counter - 1 : (counter = 1));
  };

  return (
    <div className="negot_card">
      <div className="">
        <img className="product_img" src={WheatImg} alt=" "></img>
      </div>
      <div className="content">
        <div className="iname">{props.iName}</div>
        <div>{props.quantity}kg</div>
        <div className="negot_price">
          <div className="discount_price">Rs.{props.discountPrice} </div>
          <div className="actual_price">Rs.{props.actualPrice}</div>
        </div>
        <div className="discount_amount">Rs.{props.discountAmount} off</div>
      </div>

      <div className="counter">
        <button className="counter_btn" onClick={increment}>
          +
        </button>
        <label> {counter} </label>
        <button className="counter_btn" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default NegotiationBox1;
