import React from "react";
import "./css/pageM18.css";
import ProductCard from './components/productCard'
import { useState } from "react";


const PageM18 = () => {
  let [prod,setProd]=useState([{ele:<ProductCard />,delStatus:0,num:0}]);
  const addProd = () =>{
    setProd([...prod,{ele:<ProductCard />,delStatus:0,num:prod[prod.length-1].num+1}]);
  }
  return (
    <div>
      <div style={{textAlign:"center",marginTop:"1%"}}>
        <span className="title">Publish New Request</span>
      </div>
      <br></br><br></br><br></br><br></br>
      <br></br>
      <div>
      {
        prod.map((val)=>{
          return(
            <div>
              {
                val.delStatus==0  ?  
                <div>
                <div>
                {val.ele}
                <br></br>
                {
                  prod.length>1 ?
                  <div>
                  <center>
                  <button class="buttons" onClick={()=>{let temp=prod.map((id)=> {
                    if(id.num==val.num)
                    {
                      return {...id,delStatus:1};
                    }
                    else
                    {
                      return id;
                    }
                  });setProd(temp);}}>
                  Delete
                  </button>
                  </center>
                  <br></br>
                  </div>
                   : <></>
                }
                  
                  </div>
                </div>
                  : <></>
              }
            </div>
          )
        })
      }
      </div>
      <br></br><br></br>
      <center><button class="buttons" onClick={addProd}>+ Add Product</button></center>
      <br></br>
      <center><button class="buttons">Submit Request</button></center>
      <br></br><br></br>
    </div>
  );
};

export default PageM18;
