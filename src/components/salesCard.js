import React from "react";
import "../css/salesCard.css";

function SalesCard(props) {
  const date = props.date.toLocaleDateString();

  return (
    <li className="salesCard">
      <div>
        <div className="card">
          <p className="key"> name :</p>
          <p className="value"> {props.name} </p>
        </div>
        <div className="card">
          <p className="key"> date :</p>
          <p className="value"> {date} </p>
        </div>
        <div className="card">
          <p className="key"> items :</p>
          <p className="value"> {props.items.toString()} </p>
        </div>
        <div className="card">
          <p className="key"> amount :</p>
          <p className="value"> Rs. {props.amount} </p>
        </div>
      </div>
      <div>
        <div className="card-button"> view sale </div>
      </div>
    </li>
  );
}

export default SalesCard;
