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
<<<<<<< HEAD
    <div className="up-cont">
      <div className="prod-cont">
        <label>
          NAME OF PRODUCT &nbsp;&nbsp; <span id="bold">:</span>{" "}
        </label>
        <input
          type="text"
          placeholder="Enter value"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <br></br>
      </div>
      <div>
        <label>
          PRICE
          <span id="bold">:</span>
        </label>
        <input
          type="number"
          placeholder="Enter value"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>{" "}
        &nbsp;&nbsp; <span id="bold">Rs.</span>
        <br></br>
      </div>
      <div>
        <label>
          QUANTITY REQUIRED <span id="bold">:</span>
        </label>
        <input
          type="number"
          placeholder="Enter value"
          onChange={(event) => {
            setQty(event.target.value);
          }}
        ></input>{" "}
        &nbsp;&nbsp; <span id="bold">(in kg)</span>
        <br></br>
      </div>
      <div>
        <label>
          SPECIFIC TYPE
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="bold">:</span>{" "}
        </label>
        <input
          type="number"
          placeholder="Enter value"
          onChange={(event) => {
            setType(event.target.value);
          }}
        ></input>
        <br></br>
      </div>
      <div>
        <label>
          LOCATION (ADDRESS) <span id="bold">:</span>{" "}
        </label>
        <input
          type="number"
          placeholder="Enter value"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        ></input>
        <br></br>
=======
    <>
      <div className="up-cont">
    <div className="prod-cont">
      <div>
        <span>NAME OF PRODUCT</span>
        <input className="f-input" type="text" placeholder='Enter value'
          onChange={(event) => { setName(event.target.value); } }></input>
  
      </div>
      <div>
        <span>PRICE</span>
        <input className="f-input" type="number" placeholder='Enter value (in Rs.)'
          onChange={(event) => { setPrice(event.target.value); } }></input>
      </div>
      <div>
        <span>QUANTITY REQUIRED</span>
        <input className="f-input" type="number" placeholder="Enter value (in Kg's)"
          onChange={(event) => { setQty(event.target.value); } }></input>
      </div>
      <div>
        <span>SPECIFIC TYPE</span>
        <input className="f-input" type="number" placeholder='Enter value'
          onChange={(event) => { setType(event.target.value); } }></input>
      </div>
      <div>
        <span>LOCATION (ADDRESS) <span id="bold">:</span> </span>
        <input className="f-input" type="number" placeholder='Enter value'
          onChange={(event) => { setLocation(event.target.value); } }></input>
      </div>
>>>>>>> b1c32b12bb80d4ac4733a2b5f0a3344e7a7a2e28
      </div>
      <br></br>
      <br></br>
<<<<<<< HEAD
      <center>
        <button class="buttons" onClick={() => ProductCard()}>
          + Add Product
        </button>
      </center>
      <br></br>
      <br></br>
    </div>
=======
      </div>
    </>
    
>>>>>>> b1c32b12bb80d4ac4733a2b5f0a3344e7a7a2e28
  );
}

export default ProductCard;
