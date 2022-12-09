import React from 'react';
import RequestBox from './components/requestBox';

import './css/pageM1.css'
function PageM1() {
	const AllRequests = [
    {
     reqId:"XXXXXXX",
     name:"YYYYYYY",
     phoneNo:9789656573,
     // address:"AA,YYYYYYY,ZZZ",
     itemName : "Mango",
     itemQuantity : 10,
     // itemPrice : 700  
    },{
     reqId : "JJKKKK",
     name:"KHBKJBSK",
     phoneNo:8737628723,
     itemName:"Tomato",
     itemQuantity:7,
     // itemPrice:350
    },
    {
     reqId : "JJKKKK",
     name:"KHBKJBSK",
     phoneNo:8737628723,
     itemName:"Tomato",
     itemQuantity:7
    },
    {
     reqId : "JJKKKK",
     name:"KHBKJBSK",
     phoneNo:8737628723,
     itemName:"Tomato",
     itemQuantity:7
    },
    {
     reqId : "JJKKKK",
     name:"KHBKJBSK",
     phoneNo:8737628723,
     itemName:"Tomato",
     itemQuantity:7
    },
    {
     reqId : "JJKKKK",
     name:"KHBKJBSK",
     phoneNo:8737628723,
     itemName:"Tomato",
     itemQuantity:7
    }
	]
	return (
     <div className="pageM1">
     {/* <p className="label2" style={{marginLeft:"15%"}}>(PAGE M2)You have N Request</p> */}
     <div className="allBoxes">
     {AllRequests.map((req,index)=>{
     	return <RequestBox key={index+1} reqId={req.reqId} name={req.name} phoneNo={req.phoneNo} 
     	itemName={req.itemName} itemQuantity={req.itemQuantity} />
     })}
     </div>
     </div>
	)
}
export default PageM1;