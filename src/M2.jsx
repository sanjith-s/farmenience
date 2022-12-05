import React from 'react'
import './css/pageM2.css'
const M2 = () => {
  return (
    <div class="container">
      <div></div>
        <div class="elem-back">
          <div class="req-id">
          Request ID : 123.67.665
          </div>
          <div class="gen-cont"> 
          <div class="">
          <div class="details">
            <div class="sep-det">
              <div class="item-defn">Name:</div>
              <div  class="item-disp">XXXX</div>
            </div>
            <div class="sep-det" >
              <div class="item-defn">Phone_No: </div>
              <div class="item-disp">2564548897</div>
            </div>
            <div class="sep-det" >
              <div class="item-defn">Address: </div>
              <div class="item-disp">No. 123, XYZ Street, Chennai 600 025</div>
            </div>
            <div class="sep-det" >
              <div class="item-defn">Item_Name: </div>
              <div class="item-disp">Rice</div>
            </div>
            <div class="sep-det" >
              <div class="item-defn">Item_Quantity: </div>
              <div class="item-disp">1 kg</div>
            </div>
            <div class="sep-det" >
              <div class="item-defn">Item_Price: </div>
              <div class="item-disp">Rs. 890</div>
            </div>
          </div>
          </div>
          <div class="img-btns">
          <div class="image">
          <img src={process.env.PUBLIC_URL + '/Rectangle 11.png'} alt="Hi"></img>
          </div>
          <div class="buttons">
            <div><button class="btn">Reject</button></div>
            <div class="btn-back"><button class="btn i">+</button>Price(in_Rs)<button class="btn i">-</button></div>
            <div class="btn-back"><button class="btn i">+</button>Quantity(in_kg)<button class="btn i">-</button></div>
            <div><button class="btn">Accept</button></div>
          </div>
          </div>
          </div>
          </div>
          <div></div>
    </div>
  )
}
export default M2
