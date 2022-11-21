import React,{useState,useEffect} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from "./components/navbar";
import Signup from "./signup";
import AllRequest from "./showAllRequest";
import PageM1 from "./pageM1";
import PageM3 from "./pageM3";
import PageM4 from "./pageM4";
import Footer from "./components/footer.js";
<<<<<<< HEAD
function App() {
  const itemsBought = [
=======
import PageM5 from "./pageM5";

function App() {
  return (
    <div>{/*---hr tag here is just to split two pages----*/}
      <Navbar />
      <PageM5/>
      {/* <Signup /><hr /> */}
      {/* <AllRequest /><hr /> */}
     {/* <PageM2 /><hr /> */}
      {/* <PageM3 /><hr />
     (PAGE M4)
      <PageM4 saleName="XXXXXX" orderDate="10/11/2022" deliveryDate="13/11/2022"  
      clientName="YYYYYY" paymentMode="By cash" transactionId="34232211" remarks="hhsckbhsbhsbj" 
      itemsBought={[
>>>>>>> 8512936ed72448772524c9e0730942e4ff4c1fd7
        {
          itemName:"Apple",
          quantity:4,
          price:50
         },
        {
          itemName:"Wheat",
          quantity:10,
          price:30
        },
        {
          itemName:"Onion",
          quantity:20,
          price:25
        }
<<<<<<< HEAD
        ];
  return (
    <div>{/*---hr tag here is just to split two pages----*/}
      <Navbar />
      <Signup /><hr />
      <AllRequest /><hr />
      <PageM1 /><hr />
      <PageM3 /><hr />
     (PAGE M4)
      <PageM4 saleName="XXXXXX" orderDate="10/11/2022" deliveryDate="13/11/2022"  
      clientName="YYYYYY" paymentMode="By cash" transactionId="34232211" remarks="hhsckbhsbhsbj" 
      itemsBought={itemsBought} /><hr />
      <Footer />
=======
        ]} /><hr />
      <Footer /> */}
>>>>>>> 8512936ed72448772524c9e0730942e4ff4c1fd7
    </div>
  );
}

export default App;
