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
    <div>
        <label>NAME OF PRODUCT &nbsp;&nbsp; <span id="bold">:</span> </label>
        <input type="text" placeholder='Enter value'
          onChange={(event) => { setName(event.target.value); } }></input>
           <br></br>
      </div>
      <div>
        <label>PRICE 
            <span id="bold">:</span></label>
        <input type="number" placeholder='Enter value'
          onChange={(event) => { setPrice(event.target.value); } }></input> &nbsp;&nbsp; <span id="bold">Rs.</span>
           <br></br>
      </div>
      <div>
        <label>QUANTITY REQUIRED <span id="bold">:</span></label>
        <input type="number" placeholder='Enter value'
          onChange={(event) => { setQty(event.target.value); } }></input> &nbsp;&nbsp; <span id="bold">(in kg)</span> 
           <br></br>
      </div>
      <div>
        <label>SPECIFIC TYPE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <span id="bold">:</span> </label>
        <input type="number" placeholder='Enter value'
          onChange={(event) => { setType(event.target.value); } }></input>
           <br></br>
      </div>
      <div>
        <label>LOCATION (ADDRESS) <span id="bold">:</span> </label>
        <input type="number" placeholder='Enter value'
          onChange={(event) => { setLocation(event.target.value); } }></input>
           <br></br>
      </div>
      <br></br><br></br>
      <center><button class="buttons" onClick={() => {Check()}}>+ Add Product</button></center>
      <br></br>
      <br></br>
      </>
  );
}

export default ProductCard;
