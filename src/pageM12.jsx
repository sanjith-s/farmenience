import React,{useState} from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './css/pageM12.css';
import ShareIcon from '@mui/icons-material/Share';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemBox from './components/itemBox';
import ProcessBar from './components/process_bar';
function Fname() {
  var username = "Yuvaraj";
  var [Address,setAddress] = useState("Ceg-chennai");
  var [isEditOn,setEditOn] = useState(false);
  var total_amount = 0;
  const GiveEdit = () => {
    setEditOn(true);
  }
  const updateAddress = () => {
    setAddress(document.querySelector(".add-in").value);
    setEditOn(false);
  }
  const handleAddress = () => {
    setAddress(document.querySelector(".add-in").value);
  }
  var [process_no,setProcess] = useState([1,'10']);

  const placeOrder = () => {
    setProcess([2,'55']);
  }
  var dates = [];
  var curdate = new Date();
  for (var i = 0;i <= 6;i++) {
  var thatDate = new Date();
  thatDate.setDate(curdate.getDate()+i);
  dates.push(thatDate);
  }
  const itemsAdded = [
   {
    iName : "Wheat",
    quantity : 10,
    price : 500,
    imgSrc:"",
    discount:80
   },
   {
    iName : "Rice",
    quantity : 20,
    price : 300,
    imgSrc:"",
    discount:40
   }
    ]
  itemsAdded.forEach(item=>{
    total_amount += (item.price - item.discount + 50);
  })
  return (
     <div className="paymentpage">
         <div className="pay-details">
         <Element className="page1" id="page1">
             <div className="pay-nav">
                <div className="cart">
                    <div><a className="cart-ele1 back-btn"><KeyboardBackspaceIcon className="back-icon" fontSize="large" /></a></div>     
                    <div className="cart-ele2"><h1 className="cart-text">My Cart</h1></div>
                    <ShoppingCartIcon fontSize="large" className="cart-icon" />
                </div>
             </div>
             <div className="pro-bar">
                <div className="progress-title">
                   <div className="p-items"><span>Address Confirmation</span></div>
                   <div className="p-items"><span>Order Summary</span></div>
                   <div className="p-items"><span>Payment</span></div>
                </div>
                <div className="progress-bar">
                   <ProcessBar bgcolor="blue" progress={process_no[1]}  height={7} />
                </div>
             </div>
             <div className="address-box">
                <div className="del-address">
                    <div className="add1"><div className="top top1"><span>Deliver to : </span></div><div className="ans ans1"><span>{username}</span></div></div>
                    <div className="add2"><div className="top top2"><span>Delivery Address :</span></div><div className=" ans ans2">
                    {!isEditOn ? <span>{Address}</span> : <input type="text" className="add-in" onChange={handleAddress} value={Address} />}
                    {!isEditOn ? <button  className="chg-btn" onClick={GiveEdit}>Change</button> : <button  className="chg-btn"  onClick={updateAddress}>Update</button>}</div></div>
                </div>
             </div>
             <div className="mid-row">
               <div className="m-items m1"><a href="" style={{textDecoration:"none"}}>
                      <h1 className="mid-head"><span className="m-text m-btn">Add More items</span></h1></a>
               </div>
               <div className="m-items"><a href="" ><ShareIcon fontSize="large" className="m-btn" /></a></div>
               <div className="m-items"><a href="" ><DeleteIcon fontSize="large" className="m-btn" /></a></div>
               <div className="m-items"><a href="" ><ArrowForwardIosIcon fontSize="large" className="m-btn" /></a></div>
             </div>
             <div className="items-head"><h1>Items Selected</h1></div>
             <div className="all-items">
               {itemsAdded.map((item,index)=>{
                  return <ItemBox key={index} iName={item.iName} quantity={item.quantity} price={item.price}
                  imgSrc={item.imgSrc} />
                })}
             </div><br />
             <h1 className="bot-head">Price Details</h1><br />
             <div className="table1">
                 <div><table border="2">
                       <tr className="bold"><td>S.no</td><td>Item</td><td>Quantity</td><td>Price</td><td>Discount</td><td>Delivery Fee</td><td>Amount</td></tr>
                       {itemsAdded.map((item,index)=>{
                        return <tr><td>{index+1}</td><td>{item.iName}</td><td>{item.quantity}</td><td> ₹ {item.price}</td><td>₹ {item.discount}</td><td>₹ 50</td><td>₹ {item.price + 50 - item.discount}</td></tr>
                       })
                       }
                       <tr className="bold"><td colspan="6"><strong>Total Amount </strong></td><td>₹ {total_amount}</td></tr>
                      </table>
                 </div>
              <div className="order-row"><div><Link to="order-summary" smooth={true} duration={500} className="order-btn" onClick={placeOrder}>Place Order</Link></div></div>

             </div>
             </Element>
             <Element className="order-summary" id="order-summary">
              <div className="orderSummary">
                
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
                <p  className="ex-text bot-head">Choose Your Preffered Date for the Delivery</p><br />
                <div className="del-slot">
                  {dates.map(date=>{
                    return <div className="d-box">
                       <p>{date.toLocaleDateString()}</p>
                       <input type="radio" name="date-opt" className="date-option" />                      
                    </div>
                  })}
                </div>
                <div className="time-slot" style={{textAlign:"center"}}>
                <div style={{textAlign:"left",display:"inline-block"}}>
                 <p className="ex-text">Choose Your Preffered Time slot</p>
                  <input type="radio" name="time-opt" /><span>10.00 AM - 1.30 PM</span><br/>
                  <input type="radio" name="time-opt" /><span>1.30 PM - 7.00 PM</span>
                </div>
                </div>
               </div>
             </Element>
         </div>
     </div>
  )
}
export default Fname;