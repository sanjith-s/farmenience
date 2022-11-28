import React from 'react';
import WheatImg from '../WheatImg.png';
function Item(props) {
  return (
     <div className="item-short-detail">
       <div className="i-img"><img src={WheatImg} alt="" /></div>
       <div className="i-desc">
           <p className="llists iname">{props.iName}</p>
           <p className="llists quantity">{props.quantity}KG</p>
           <p className="llists price">Rs.{props.price}</p>
       </div>
     </div>
  )
}
export default Item;