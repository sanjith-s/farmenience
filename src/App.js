import React,{useState,useEffect} from 'react'
<<<<<<< HEAD
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from "./components/navbar";
import Signup from "./signup";
import AllRequest from "./showAllRequest";
import PageM1 from "./pageM1";
import PageM3 from "./pageM3";
import PageM4 from "./pageM4";
import Footer from "./components/footer.js";
import PageM5 from "./pageM5";

function App() {
    const itemsBought=[
=======
// import {BrowserRouter,Route,Routes} from 'react-router-dom';

// import Signup from "./signup";
// import AllRequest from "./showAllRequest";
// import PageM2 from "./pageM2";
// import PageM3 from "./pageM3";
// import PageM4 from "./pageM4";
// import Footer from "./components/footer.js";
// import PageM5 from "./pageM5";
import PageN5 from "./pageN5";

function App() {
  return (
    <div>
      {/* <PageM4 /> */}
      {/* <Signup /><hr /> */}
      {/* <AllRequest /><hr /> */}
     {/* <PageM2 /><hr /> */}
      {/* <PageM3 /><hr >*/}
      {/* <PageM4 saleName="XXXXXX" orderDate="10/11/2022" deliveryDate="13/11/2022"  
      clientName="YYYYYY" paymentMode="By cash" transactionId="34232211" remarks="hhsckbhsbhsbj" 
      itemsBought={[
>>>>>>> c308f14e9e22a8cb1e89bd4827939e29cf158130
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
        ];
  return (
    <div>{/*---hr tag here is just to split two pages----*/}
<<<<<<< HEAD
      <Navbar />
      <Signup /><hr />
      <AllRequest /><hr />
      <PageM1 /><hr />
      <PageM3 /><hr />
     (PAGE M4)
      <PageM4 saleName="XXXXXX" orderDate="10/11/2022" deliveryDate="13/11/2022"  
      clientName="YYYYYY" paymentMode="By cash" transactionId="34232211" remarks="hhsckbhsbhsbj" 
      itemsBought={itemsBought} /><hr />
      <PageM5 />
      <Footer />
=======
      <PageN5/>
>>>>>>> c308f14e9e22a8cb1e89bd4827939e29cf158130
    </div>
  );
}

export default App;
