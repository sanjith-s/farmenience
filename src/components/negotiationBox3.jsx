import React from "react";
import WheatImg from "../WheatImg.png";
import "../css/negotiationBox.css";

function NegotiationBox3(props) {
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
    </div>
  );
}

export default NegotiationBox3;
