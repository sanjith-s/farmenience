import React from "react";
import WheatImg from "../WheatImg.png";

function NegotiationBox(props) {
  return (
    <div>
      <div>{props.iName}</div>
      <div>{props.quantity}</div>
      <div> {props.actualPrice} </div>
      <div> {props.discountPrice} </div>
      <div> {props.discountAmount} </div>
      <div>
        <img src={WheatImg} alt=" "></img>
      </div>
    </div>
  );
}

export default NegotiationBox;
