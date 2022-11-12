import React from "react";
import SalesCardsList from "./components/salesCardsList";
import SalesItemsList from "./components/salesItemsList";

function PageM3(props) {
  return (
    <div className="pageM3">
      <div className="left">
        <div className="sales-filters">
          <h1> SALES DETAILS</h1>
          <h2> Filter by </h2>
          <div className="items">
            <h2> ITEMS </h2>
            <SalesItemsList cards={props.itemsList} />
          </div>
          <div className="date">
            <h2> DATE </h2>
            <label> From: </label>
            <input type="date"></input>
            <label> To: </label>
            <input type="date"></input>
          </div>
        </div>
      </div>

      <div className="right">
        <SalesCardsList cards={props.items} />
      </div>
    </div>
  );
}

export default PageM3;
