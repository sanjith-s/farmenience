import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../css/itemCard.css";

const ItemCard = () => {
  return (
    <div className="cardBox">
      <div className="flexItem">
        <span className="itemName">Item Name</span>
      </div>
      <div className="flexItem">
        <img src="#" alt="Item image" />
      </div>
      <div className="flexItem">
        <span className="sellerCount">5 Sellers</span>
      </div>
      <div className="flexItem">
        <span className="sfrom">Starting from</span>
        <br />
        <span className="itemPrice">&#8377; 1000 INR</span>
      </div>
      <div className="flexItem optCont">
        <div>
          <button className="viewButton">View Item</button>
        </div>
        <div className="ocart">
          <ShoppingCartIcon className="cart-logo" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
