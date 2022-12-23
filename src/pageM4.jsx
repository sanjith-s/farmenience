import React from "react";
import "./css/pageM4.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function PageM4() {
  var saleDetails = {
    saleName:"Wheat",
    orderDate:"21/12/2022",
    deliveryDate:"27/12/2022",
    clientName:"Person Z",
    paymentMode:"Cash On Delivery",
    transactionID:"---------",
    remarks:"--------",
    itemsBought:[
      {
        itemName:"Wheat",
        quantity:30,
        price:20
      },
      {
        itemName:"Sugarcane",
        quantity:20,
        price:40
      },
      {
        itemName:"Tomato",
        quantity:60,
        price:7
      }
      ]
  }
	var tot_amount = 0;
	saleDetails.itemsBought.map((item)=>{
		tot_amount+=item.quantity * (item.price);
		return;
	})
	return (
     <div className="pagem4">
       <div className="salebox">
             <div className="s-row">
               <div className="s-key">Sale name</div>
               <div className="s-value">{saleDetails.saleName}</div>
             </div>
             <div className="s-row">
               <div className="s-key">Order Date</div>
               <div className="s-value">{saleDetails.orderDate}</div>
             </div>
             <div className="s-row">
               <div className="s-key">Delivery date</div>
               <div className="s-value">{saleDetails.deliveryDate}</div>
             </div>
             <div className="s-row">
               <div className="s-key">Client Name</div>
               <div className="s-value">{saleDetails.clientName}</div>
             </div>
             <div className="s-row">
               <div className="s-key">Payment Mode</div>
               <div className="s-value">{saleDetails.paymentMode}</div>
             </div>
             <div className="s-row">
               <div className="s-key">Transcation Id</div>
               <div className="s-value">{saleDetails.transactionID}</div>
             </div>
             <div className="s-row">
               <div className="s-key">Remarks</div>
               <div className="s-value">{saleDetails.remarks}</div>
             </div>
             <div className="s-row">
             <div className="s-contact">Contact Client</div>
             </div>
       </div>
       <div className="billbox">
           <div className="b-row1 s-box"> 
                 <div><button className="printbox" onClick={window.print}>Print Pdf</button></div>
           </div>
           <div className="b-row2 s-box"> 
                    <div className="addressbox"><span className="a-head">Billing Address : </span> Room No:30,Kurinji Hostel, CEG, Anna University</div>
           </div>
           <div className="b-row3 s-box"> 
                    <div className="bill">
                      <table border="2">
                       <tr><td>S.no</td><td>Item</td><td>Quantity</td><td>Price per KG</td><td>Price</td></tr>
                       {saleDetails.itemsBought.map((item,index)=>{
                        return <tr><td>{index+1}</td><td>{item.itemName}</td><td>{item.quantity}</td><td>{item.price}</td><td>{item.price * item.quantity}</td></tr>
                       })
                       }
                      </table>
                    </div> 
           </div>
           <div className="b-row4 s-box"> 
           <div className="totamt">Total amount to be paid : </div><div className="amt">Rs:{tot_amount}</div>
           </div>
           <div className="b-row5 s-box"> <div className="delsale">Delete Sale</div></div>
       </div>
     </div>
	)
}
export default PageM4;
