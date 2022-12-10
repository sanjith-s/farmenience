
import React, {useEffect, useState} from "react";
import TransactionHistory from "./components/TransactionHistory";
import './css/pageM17.css';
//import Axios from "axios";

function M17() {

    //const [buydetails, setBuydetails] = useState([]);

    /*useEffect(() => {
    Axios.post('http://localhost:9091/api/buy/confirm', {
        custEmail: email
    }).then((response) => {
        setBuydetails(response.data);
        console.log(response)
        if (response.data == 'success') {
            window.location.href = "http://localhost:3000/login";
        }
    });
    }, []);

    let i;*/

    const buyerHistory = [
        {
          IFSCCode: "1xxx",
          TransactionID: 1,
          PaymentMode: "UPI",
          BankName: "SBI",
          Amount: 10000.0,
          Sender: "A",
          Receiver: "B"
        },
        {
            IFSCCode: null,
            TransactionID: 2,
            PaymentMode: "Cash On Delivery",
            BankName: null,
            Amount: 14500.0,
            Sender: "C",
            Receiver: "D"
        },
        {
            IFSCCode: "3xxx",
            TransactionID: 3,
            PaymentMode: "Credit Card",
            BankName: "Canara Bank",
            Amount: 21000.0,
            Sender: "E",
            Receiver: "F"
        },
      ];

    return (
        <><div id="top">
            <center>
                <label id="header">
                    View Transaction History
                </label>
            </center>
        </div>
        <br></br>
            <div id="details">
            <TransactionHistory cards={buyerHistory} />
            </div>
        </>

    )
}
export default M17;