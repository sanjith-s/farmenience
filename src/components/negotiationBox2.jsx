import React, { useState } from "react";
import WheatImg from "../WheatImg.png";
import "../css/negotiationBox.css";

function NegotiationBox2(props) {
  let [counter, setcounter] = useState(1);
  let [limit, setlimit] = useState(props.discountPrice);
  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter >= 2 ? counter - 1 : (counter = 1));
  };
  const limitIncrement = () => {
    setlimit(limit + 1);
  };
  const limitDecrement = () => {
    setlimit(
      limit >= props.discountPrice / 2 ? limit - 1 : (limit = discountPrice / 2)
    );
  };
  const limitHandler = (event) => {
    newLimit = event.target.value;
    setlimit(newLimit);
  };

  props.onlimitHandler(limit, props.index);

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
      <div>
        <h3 className="price_limit_text">your price</h3>
        <div className="price_limit">
          <input
            className="limit_input"
            type="number"
            min={props.actualPrice / 2}
            max={props.actualPrice}
            value={limit}
            onChange={limitHandler}
          />
          <button className="limit_btn" onClick={limitIncrement}>
            +
          </button>
          <button className="limit_btn" onClick={limitDecrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default NegotiationBox2;
