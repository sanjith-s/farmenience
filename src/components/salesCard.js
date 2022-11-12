import React from "react";

function SalesCard(props) {
  const date = props.date.toLocaleDateString();
  return (
    <li>
      <div>
        <p> name :</p>
        <p> {props.name} </p>
      </div>
      <div>
        <p> date :</p>
        <p> {date} </p>
      </div>
      <div>
        <p> items :</p>
        <p> {props.items} </p>
      </div>
      <div>
        <p> amount :</p>
        <p> {props.amount} </p>
      </div>
      <button> view sale </button>
    </li>
  );
}

export default SalesCard;
