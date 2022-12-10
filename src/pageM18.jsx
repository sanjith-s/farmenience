import React from "react";
import "./css/pageM18.css";
import ProductCard from './components/productCard'


const PageM18 = () => {

  return (
    <div>
      <div>
        <span className="title">Publish New Request</span>
      </div>
      <div>
        <ProductCard />
      </div>
      <center><button class="buttons">Submit Request</button></center>
    </div>
  );
};

export default PageM18;
