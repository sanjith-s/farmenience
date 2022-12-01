import React, { useS } from "react";
import WheatImg from "../WheatImg.png";
import "../css/negotiationBox.css";

function NegotiationBox3(props) {
  const date = props.purchaseDate.toLocaleDateString();

  return (
    <div className="negot_card ">
      <div className="date_img">
        <label>{date}</label>
        <img className="product_img" src={WheatImg} alt=" "></img>
        <h4 className="product_img_caption">Sent to {props.seller} seller</h4>
      </div>
      <div className="price_content">
        <div className="end_price_content">
          <div className="iname">{props.iName}</div>
          <div className="price_list">
            <ul className="price_list_label">
              <li>list price :</li>
              <li>your price :</li>
              <li>{props.discountPrice < props.userPrice ? "more" : "less"}</li>
            </ul>
            <ul>
              <li>inr {props.discountPrice}</li>
              <li>inr {props.userPrice}</li>
              <li className="less_price">
                inr {props.userPrice - props.discountPrice}
              </li>
            </ul>
          </div>
          <div>
            <button className="accept_btn">
              {props.acceptance == "yes"
                ? "Accepted by Seller-Contact Now"
                : "Revised by Seller-Repond Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NegotiationBox3;
