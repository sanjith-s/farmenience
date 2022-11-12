// import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import SalesCard from "./salesCard";

function SalesCardsList(props) {
  if (props.cards.length === 0) {
    return <h2> N0 Sales Cards </h2>;
  }
  return (
    <ul>
      {props.cards.map((item) => (
        <SalesCard
          key={item.id}
          name={item.name}
          date={item.date}
          items={item.items}
          amount={item.amount}
        />
      ))}
      ;
    </ul>
  );
}

export default SalesCardsList;
