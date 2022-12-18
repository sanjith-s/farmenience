import React from "react";
import "../css/transactionHistory.css";

function TransactionHistory(props) {
    const cardList = props.cards;
    return (
        <div className="transaction">
        <table>
        <tr>
        <th className="t-rows">T.ID</th>
        <th className="t-rows">IFSC Code</th>
        <th className="t-rows">Payment Mode</th>
        <th className="t-rows">Bank Name</th>
        <th className="t-rows">Amount</th>
        <th className="t-rows">Sender</th>
        <th className="t-rows">Receiver</th>
        </tr>
            {cardList.map((record) => (
              <tr>
               <td className="t-rows">{record.TransactionID}</td>
               <td className="t-rows">{record.IFSCCode}</td>
               <td className="t-rows">{record.PaymentMode}</td>
               <td className="t-rows">{record.BankName}</td>
               <td className="t-rows">{record.Amount}</td>
               <td className="t-rows">{record.Sender}</td>
               <td className="t-rows">{record.Receiver}</td>
              </tr>
            )
            )}
            </table>
        </div>
    );
}

export default TransactionHistory;
