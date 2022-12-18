import React from "react";
import "../css/pageM18.css";
import { useState } from "react";

function ProductCard() {
  
      const [name, setName] = useState("");
      const [price, setPrice] = useState(0);
      const [qty, setQty] = useState(0);
      const [type, setType] = useState("");
      const [location, setLocation] = useState("");

  return (
    <>
      <div className="up-cont">
    <div className="prod-cont">
      <div>
        <span id="bold">NAME OF PRODUCT:</span>
        <input className="f-input" type="text" placeholder='Enter value'
          onChange={(event) => { setName(event.target.value); } }></input>
  
      </div>
      <div>
        <span id="bold">PRICE:</span>
        <input className="f-input" type="number" placeholder='Enter value (in Rs.)'
          onChange={(event) => { setPrice(event.target.value); } }></input>
      </div>
      <div>
        <span id="bold">QUANTITY REQUIRED:</span>
        <input className="f-input" type="number" placeholder="Enter value (in kg)"
          onChange={(event) => { setQty(event.target.value); } }></input>
      </div>
      <div>
        <span id="bold">SPECIFIC TYPE:</span>
        <input className="f-input" type="number" placeholder='Enter value'
          onChange={(event) => { setType(event.target.value); } }></input>
      </div>
      <div>
        <span id="bold">LOCATION (ADDRESS):</span>
        <input className="f-input" type="number" placeholder='Enter value'
          onChange={(event) => { setLocation(event.target.value); } }></input>
      </div>
      </div>
      <br></br>
      </div>
    </>
    
  );
}

export default ProductCard;
