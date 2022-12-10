import React from "react";
import { useState, useRef } from "react";
import "./css/pageM18.css";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import MultipleValueTextInput from "react-multivalue-text-input";
import productCard from "./components/productCard";

const PageM18 = () => {

  const handleSubmit = () => {};

  return (
    <div className="box">
      <div className="titlebox">
        <span className="title">Publish New Request</span>
      </div>
      <div>
        <productCard />
      </div>
      <center><button class="buttons" onClick={() => {handleSubmit()}}>Submit Request</button></center>
    </div>
  );
};

export default PageM18;
