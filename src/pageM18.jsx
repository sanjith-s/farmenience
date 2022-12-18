import React from "react";
import "./css/pageM18.css";
import ProductCard from './components/productCard'


const PageM18 = () => {

  return (
    <div>
      <div style={{textAlign:"center",marginTop:"1%"}}>
        <span className="title">Publish New Request</span>
      </div>
      <br></br><br></br><br></br><br></br>
      <div>
        <ProductCard />
      </div>
      <center><button class="buttons">Submit Request</button></center>
      <br></br><br></br>
    </div>
  );
};

export default PageM18;
