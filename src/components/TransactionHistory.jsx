import React from "react";
import "../css/transactionHistory.css";

function TransactionHistory(props) {
    const onClickHandler = (event) => {
        console.log(event.target.outerText);
    };
    const cardList = props.cards;
    return (
        <ul className="transaction">
            {cardList.map((record) => (
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
        </ul>
    );
}

export default TransactionHistory;
