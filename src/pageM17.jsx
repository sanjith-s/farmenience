
import React, {useEffect, useState} from "react";
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
        <><div ca="top">
            <center>
                <label id="header">
                    View Transaction History
                </label>
            </center>
        </div>
        <br></br>
            <div id="details">
                {buyerHistory.map((record)=>(
                        <div key={record.id}>
                            <h5> IFSC Code: {record.IFSCCode} </h5>
                            <h5> Transaction ID: {record.TransactionID}</h5>
                            <h5> Payment Mode: {record.PaymentMode}</h5>
                            <h5> Bank Name: {record.BankName}</h5>
                            <h5> Total Amount: {record.Amount}</h5>
                            <h5> Sender: {record.Sender}</h5>
                            <h5> Receiver: {record.Receiver}</h5>
                            -------------------------------------
                        </div>
                    )
                )}
            </div>
            {/*<div>
                <button onClick={() => {
                    Check()
                } }>Check</button>
                <button onClick={() => {
                    localstorage3()
                }}>Add to cart</button>
                <button>Special Request?</button>

            </div>*/}</>

    )
}
export default M17;