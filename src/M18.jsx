import React from 'react'
import './css/pageM18.css' 

const M18 = () => {
  return (
    <div class="container">
        <div class="header">MARKET PLACE</div>
        <div class="transac-header">Confirmation</div>
        <div class = "transaction-container">
            <div class="transac-elem">
                <div class="transac-elem-defn">Name of the Product :</div>
                <div>RICE</div>
            </div>
            <div class="transac-elem">
                <div class="transac-elem-defn">Transaction ID:</div>
                <div>VADE0B248932</div>
            </div>
            <div class="transac-elem">
                <div class="transac-elem-defn">Price:</div>
                <div>400 Rs</div>
            </div>
            <div class="transac-elem">
                <div class="transac-elem-defn">Quantity :</div>
                <div>5 kg</div>
            </div>
            <div class="transac-elem">
                <div class="transac-elem-defn">Specific Type:</div>
                <div>Agriculture</div>
            </div>
            <div class="transac-elem">
                <div class="transac-elem-defn">Location:</div>
                <div>Chennai</div>
            </div>
        </div>
        <div class="btn-class">
            <button class="btn-class-a"><p class="a1">Edit</p></button>
            <button class="btn-class-b"><p class="a1">Publish</p></button>
        </div>
    </div>
  )
}

export default M18