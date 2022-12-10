import React from "react";
import "../css/salesItemsList.css";

function SalesItemsList(props) {
  const onClickHandler = (event) => {
    console.log(event.target.outerText);
  };
  const cardList = props.cards;
  return (
    <ul className="sales-items-list">
      {cardList.map((card) => (
        <li value={card} onClick={onClickHandler}>
          {card}
        </li>
      ))}
    </ul>
  );
}

export default SalesItemsList;
