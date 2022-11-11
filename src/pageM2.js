import React from 'react';
import BuyerRequest from './buyerRequest';
import './css/request2.css'
function pageM2() {
	const AllRequests = [
    {
     reqId:"XXXXXXX",
     name:"YYYYYYY",
     phoneNo:9789656573,
     address:"AA,YYYYYYY,ZZZ",
     itemName : "Mango",
     itemQuantity : 10,
     itemPrice : 700  
    },{
     reqId : "JJKKKK",
     name:"KHBKJBSK",
     phoneNo:8737628723,
     itemName:"Tomato",
     itemQuantity:7,
     itemPrice:350
    }
	]
	return (
     <div className="pageM2">
     <p className="label2" style={{marginLeft:"15%"}}>You have N Request</p>
     {AllRequests.map((req,index)=>{
     	return <BuyerRequest reqNo={index+1} reqId={req.reqId} name={req.name} phoneNo={req.phoneNo} address={req.address} 
     	itemName={req.itemName} itemQuantity={req.itemQuantity} itemPrice={req.itemPrice} />
     })}
     </div>
	)
}
export default pageM2;