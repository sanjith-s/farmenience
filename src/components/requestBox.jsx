import React,{useState} from 'react';
import './../css/requestBox.css';
function BuyerRequest(props) {
	return (
     <div className="requestbox">
             <div className="r-row">
               <div className="r-key">Request ID</div>
               <div className="r-value">{props.reqId}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Name</div>
               <div className="r-value">{props.name}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Phone Number</div>
               <div className="r-value">{props.phoneNo}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Item Name</div>
               <div className="r-value">{props.itemName}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Quantity</div>
               <div className="r-value">{props.itemQuantity}</div>
             </div>
             <div className="r-row">
             <div className="r-view">View Request</div>
             </div>
       </div>
	)
}
export default BuyerRequest;