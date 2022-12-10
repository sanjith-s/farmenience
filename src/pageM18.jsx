import React from "react";
import { useState, useRef } from "react";
import "./css/pageM18.css";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import MultipleValueTextInput from "react-multivalue-text-input";
import ItemCard from "./components/itemCard";

const PageM18 = () => {

  const handleSubmit = () => {};

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="box">
      <div className="titlebox">
        <span className="title">Publish New Request</span>
      </div>
      <div>
        <label>NAME OF PRODUCT &nbsp;&nbsp; <span id="bold">:</span> </label>
        <input type="text" placeholder='Enter value'
          onChange={(event) => { setName(event.target.value); } }></input>
           <br></br>
      </div>
      <div>
        <label>PRICE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      <center><button class="buttons" onClick={() => {Check()}}>+ Add Product</button></center>
      <center><button class="buttons" onClick={() => {Check()}}>Submit Request</button></center>
      <br></br>
      <br></br>
    </div>
  );
};

export default PageM18;
