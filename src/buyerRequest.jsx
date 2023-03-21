import React, {useState} from 'react';
import './css/request2.css';

function BuyerRequest(props) {
    const [price,setPrice] = useState(props.itemPrice);
    const [quantity,setQuantity] = useState(props.itemQuantity);
    const increasePrice = ()=> {
    	setPrice(price + 100);
    }    
    const decreasePrice = ()=> {
    	if (price - 100 > 0) {
    	setPrice(price - 100);
        }
    }
    const increaseQuantity = ()=> {
    	setQuantity(quantity+1);
    }    

    const decreaseQuantity = ()=> {
        if (quantity-1 > 0) {
    		setQuantity(quantity-1);
    	}
    }
    
	return (
     <div className="container2">
     <div className="left-part">
         <p className="label2">Buyer request {props.reqNo} :</p>
         <p className="label2">Request ID : {props.reqId}</p>
         <p className="label2">Phone : {props.phoneNo}</p>
         <p className="label2">Address : {props.address}</p>
         <p className="label2">Item Name : {props.itemName}</p>
         <p className="label2">Item Quantity : {props.itemQuantity}</p>
         <p className="label2">Item Price : {props.itemPrice} </p>
      </div>
      <div className="right-part">
       <button className="right btn-m2">Reject</button><br />
       <span className="right"><button onClick={increasePrice} className="inc-btn part1">+</button><span className="part2">Rs. {price}</span><button onClick={decreasePrice} className="dec-btn part1">-</button></span><br />
       <span className="right"><button onClick={increaseQuantity} className="inc-btn part1">+</button><span className="part2">Quantity : {quantity}</span><button onClick={decreaseQuantity} className="dec-btn part1">-</button></span><br />
       <button className="right btn-m2">Submit</button><br />          
      </div>
     </div>
	)
}
export default BuyerRequest;