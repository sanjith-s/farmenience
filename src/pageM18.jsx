import React from "react";
import { useState, useRef } from "react";
import "./css/pageM18.css";
import ProductCard from './components/productCard'


const PageM18 = () => {

  return (
    <div className="box">
      <div className="titlebox">
        <span className="title">Publish New Request</span>
      </div>
      <div>
      <ProductCard />
      </div>
      <center><button class="buttons" onClick={() => {}}>Submit Request</button></center>
    </div>
  );
};

export default PageM18;
