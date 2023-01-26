import React from "react";
import TransactionHistory from "../components/TransactionHistory";
import { Typography, Box, Card } from "@mui/material";

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
    {
      ifscCode: "1xxx",
      transactionid: 4,
      paymentMode: "UPI",
      bankName: "SBI",
      amount: 10000.0,
      sender: "A",
      receiver: "B",
    },
    {
      ifscCode: "1xxx",
      transactionid: 5,
      paymentMode: "UPI",
      bankName: "SBI",
      amount: 10000.0,
      sender: "A",
      receiver: "B",
    },
  ];

  return (
    <Card
      style={{
        padding: "20px 0px 30px 0px",
        margin: "30px 100px",
        borderRadius: "12px",
        border: "2px solid",
      }}
    >
      <Box>
        <Typography
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "38px",
            fontWeight: "600",
          }}
        >
          View Transaction History
        </Typography>
      </Box>
      <br></br>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TransactionHistory rows={buyerHistory} />
      </Box>
    </Card>
  );
}
export default M17;
