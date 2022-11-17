import React from "react";
import Signup from "./signup";
import AllRequest from "./showAllRequest";
import PageM2 from "./pageM2";
import PageM3 from "./pageM3";
import PageM4 from "./pageM4";
function App() {
  return (
    <div>
      <Signup />
      <AllRequest />
      <PageM2 />
      <PageM3 />
     (PAGE M4)
      <PageM4 saleName="XXXXXX" orderDate="10/11/2022" deliveryDate="13/11/2022"  
      clientName="YYYYYY" paymentMode="By cash" transactionId="34232211" remarks="hhsckbhsbhsbj" 
      itemsBought={[
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
        ]} />
    </div>
  );
}

export default App;
