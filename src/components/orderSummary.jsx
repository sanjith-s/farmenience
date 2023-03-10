import React from "react";
import "../css/pageM12.css";
function Fname(props) {
    const itemsAdded=props.itemDetails;
    const [username,Address] = props.userDetails;
    var dates = [];
    var curdate = new Date();
    for (var i = 0;i <= 6;i++) {
    var thatDate = new Date();
    thatDate.setDate(curdate.getDate()+i);
    dates.push(thatDate);
    }
    const handleContinue = props.handleContinue;
    var total_amount = 0;
    itemsAdded.forEach(item=>{
    total_amount += (item.price - item.discount + 50);
    })
  return (
       <div className="orderSummary" id="orderSummary">
                
                      <div className="address-box">
                             <div className="del-address">
                                   <div className="add1">
                                       <div className="top top1"><span>Deliver to : </span></div>
                                       <div className="ans ans1"><span>{username}</span></div>
                                   </div>
                                   <div className="add2">
                                       <div className="top top2"><span>Delivery Address :</span></div>
                                       <div className=" ans ans2"><span>{Address}</span></div>
                                   </div>
                            </div>
                     </div>
                     <div style={{textAlign:"center",marginTop:"1%"}}><p  className="ex-text">Choose Your Preffered Date for the Delivery</p><br />
                     </div>
                     <div className="del-slot">
                         {dates.map(date=>{
                         return <div className="d-box">
                               <input type="radio" name="date-opt" className="date-option" />
                               <p>{date.toLocaleDateString()}</p>                      
                               </div>
                        })}
                     </div>
                     <div className="time-slot" style={{textAlign:"center"}}>
                                 <p className="ex-text">Choose Your Preffered Time slot</p>
                           <div className="time-sl" style={{textAlign:"left",display:"inline-block"}}>
                                 <div><input type="radio" name="time-opt" className="time-opt"/><span>10.00 AM - 01.30 PM</span><br/>
                                 </div>
                                <div><input type="radio" name="time-opt" className="time-opt"/><span>01.30 PM - 07.00 PM</span>
                                </div>
                           </div>
                     </div>
                     
                     <h1 className="bot-head another">Price Details</h1><br />
                     <div className="table1 another-table">
                            <div><table border="2">
                                 <tr className="bold"><td>S.no</td><td>Item</td><td>Quantity</td><td>Price</td><td>Discount</td><td>Delivery Fee</td><td>Amount</td></tr>
                                 {itemsAdded.map((item,index)=>{
                                  return <tr><td>{index+1}</td><td>{item.iName}</td><td>{item.quantity}</td><td> ₹ {item.price}</td><td>₹ {item.discount}</td><td>₹ 50</td><td>₹ {item.price + 50 - item.discount}</td></tr>
                                  })
                                  }
                                 <tr className="bold"><td colSpan="6">Total Amount</td><td>₹ {total_amount}</td></tr>
                                 </table>
                            </div>
                           <div className="order-row"><div><button onClick={handleContinue} className="order-btn">Continue</button></div></div>
                     </div>
                </div>
            )
}
export default Fname;