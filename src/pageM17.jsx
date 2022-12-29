import TransactionHistory from "./components/TransactionHistory";
import "./css/pageM17.css";

function M17() {
  const buyerHistory = [
    {
      ifscCode: "1xxx",
      transactionid: 1,
      paymentMode: "UPI",
      bankName: "SBI",
      amount: 10000.0,
      sender: "A",
      receiver: "B",
    },
    {
      ifscCode: "",
      transactionid: 2,
      paymentMode: "Cash On Delivery",
      bankName: null,
      amount: 14500.0,
      sender: "C",
      receiver: "D",
    },
    {
      ifscCode: "3xxx",
      transactionid: 3,
      paymentMode: "Credit Card",
      bankName: "Canara Bank",
      amount: 21000.0,
      sender: "E",
      receiver: "F",
    },
  ];

  return (
    <>
      <div id="top">
        {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; */}
        <label id="header">View Transaction History</label>
      </div>
      <br></br>
      <div id="details">
        <TransactionHistory rows={buyerHistory} />
      </div>
    </>
  );
}
export default M17;
