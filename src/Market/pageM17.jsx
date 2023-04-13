import React from "react";
import TransactionHistory from "../components/TransactionHistory";
import { Typography, Box, Card } from "@mui/material";
import { Col, Divider, Row, Table } from 'antd';
import "../css/pageM17.css";
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
    {
      ifscCode: "1xxx",
      transactionid: 5,
      paymentMode: "UPI",
      bankName: "State Bank of India",
      amount: 10000.0,
      sender: "A",
      receiver: "B",
    },
  ];

  return (
    <Card
      style={{
        margin: "30px 100px",
        borderRadius: "12px",
        border: "1px solid whitesmoke",
      }}
      sx={{
        boxShadow: 20,
      }}
    >
      <Box
        sx={{
    display: "flex", justifyContent: "center", alignItems: "center",backgroundColor:"rgb(153, 237, 184)",
    flexDirection:"column",padding:"2%"
        }}
      >
         <Typography
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "1.875rem",
            fontWeight: "600",
          }}
        >
          Transaction History
        </Typography>
        {/* <TransactionHistory rows={buyerHistory} /> */}
        <Table dataSource={buyerHistory}
        pagination={false}
        rowClassName={"row-ant"}
        >
          <Table.Column title="Trans Id" dataIndex='transactionid' />
          <Table.Column title="IFSC Code" dataIndex='ifscCode' />
          <Table.Column title="Payment Mode" dataIndex='paymentMode' />
          <Table.Column title="Bank Name" dataIndex='bankName' />
          <Table.Column title="Amount" dataIndex='amount' />
          <Table.Column title="Sender" dataIndex='sender' />
          <Table.Column title="Receiver" dataIndex='receiver' />
        </Table>
      </Box>
    </Card>
  );
}
export default M17;
