import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Menubar from "./components/menubar";
import farm_land from "./farm_land.jpg";
import sunset from "./sunset.jpg";
import "./css/pageM9.css";

function PageM9() {
  const orders = [
    {
      id: 1,
      items: ["onions", "tomato"],
    },
    {
      id: 2,
      items: ["potato", "ginger"],
    },
    {
      id: 3,
      items: ["garlic", "cucumber"],
    },
  ];
  return (
    <div>
      <Navbar />
      <Menubar />
      <div className="farm_field">
        <div className="farm_field_img">
          <img className="field_img" src={farm_land} alt=" "></img>
          <img className="field_img" src={sunset} alt=" "></img>
        </div>
        <div className="farm_field_info">
          <h3>orders placed</h3>
          {orders.map((order, index) => {
            return (
              <div key={index} className="product_info">
                <p>order ID: {order.id} </p>
                <p>items: {order.items.toString().toLocaleUpperCase()} etc.</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageM9;
