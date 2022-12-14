import React from 'react'
import './css/pageM19.css'

const PageM19 = () => {
  return (
    <div class="ent-cont">
        <div></div>
        <div class="market-header">MARKETPLACE</div>
        <div class="confirm-header">Confirmation</div>
        <div class="det-cont">
            <div class="det-cont-elem">
                <div class="att-header">Name Of Product</div>
                <div class="att-val">Rice</div>
            </div>
            <div class="det-cont-elem">
                <div class="att-header">Price</div>
                <div class="att-val">5000 Rs</div>
            </div>
            <div class="det-cont-elem">
                <div class="att-header">Quantity</div>
                <div class="att-val">5kg</div>
            </div>
            <div class="det-cont-elem">
                <div class="att-header">Specific Type</div>
                <div class="att-val">Agro crop</div>
            </div>
            <div class="det-cont-elem">
                <div class="att-header">Location</div>
                <div class="att-val">Chennai</div>
            </div>
        </div>
        <div class="btn-gen">
            <div ><button class="btn-gen-btnE">Edit</button></div>
            <div ><button class="btn-gen-btnP">Publish</button></div>
        </div>
        <div></div>
    </div>
  )
}

export default PageM19