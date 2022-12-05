
import React, {useEffect, useState} from "react";
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
        <><div>
            <center>
                <h1 id="buyconfirmation">
                    TRANSACTION HISTORY
                </h1>
            </center>
        </div>
            <div id="details">
                {buyerHistory.map((record)=>(
                        <div key={record.id}>
                            <h5> IFSC Code: {bill.IFSCCode} </h5>
                            <h5> Transaction ID: {bill.TransactionID}</h5>
                            <h5> Payment Mode: {bill.PaymentMode}</h5>
                            <h5> Bank Name: {bill.BankName}</h5>
                            <h5> Total Amount: {bill.Amount}</h5>
                            <h5> Sender: {bill.Sender}</h5>
                            <h5> Receiver: {bill.Receiver}</h5>
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