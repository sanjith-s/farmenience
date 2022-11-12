import React from "react";
import SalesCardsList from "./components/salesCardsList";
import SalesItemsList from "./components/salesItemsList";
import Navbar from "./components/navbar";
import "./css/pageM3.css";

function PageM3(props) {
  return (
    <div>
      <Navbar />
      <div className="pageM3">
        <div className="left-half">
          <div className="sales-filters">
            <h1> SALES DETAILS</h1>
            <h2> Filter by </h2>
            <div className="items">
              <h2> ITEMS </h2>
              <SalesItemsList
                className="sales-items-list"
                cards={props.itemsList}
                items={props.items}
              />
            </div>
          </div>

          <div className="date">
            <h2> DATE </h2>
            <label>
              <span>From</span>
              <span>:</span>
            </label>
            <input type="date"></input>
            <label>
              <span>To</span>
              <span>:</span>
            </label>
            <input type="date"></input>
          </div>
        </div>

        <div className="right-half">
          <SalesCardsList cards={props.items} />
        </div>
      </div>
    </div>
  );
}

export default PageM3;
