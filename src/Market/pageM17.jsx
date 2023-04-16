import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import TransactionHistory from "../components/TransactionHistory";
import { Typography, Box, Card } from "@mui/material";
import { Col, Divider, Row, Table } from 'antd';
import "../css/pageM17.css";
import Axios from "axios";
import { baseURL } from "../constants";
import Swal from "sweetalert2";

function M17() {

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  // }

  // const fullAnotherSpeak = (text) => {
  //   responsiveVoice.speak(text, "Tamil Male");
  // }

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
  //   document.body.appendChild(addScript);
  // }, []);

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
  
  let buyTransaction = [];

  const [transaction, setTransaction] = useState([]);
  const getTransactions = () => {
    let token = Cookies.get('token');
      Axios.get(`${baseURL}/buyer/gettransactions`, { headers: { tokenstring: token } }).then((res)=> {
        const dat = res.data.message;
        // setTransaction(dat);
        dat && dat.map((val) => {
          buyTransaction.push(
            {
              ifscCode: val.IFSC,
              transactionid: val.transactionId,
              paymentMethod: val.paymentMode,
              bankName: val.bankName,
              amount: val.amount,
              sender: val.senderName,
              receiver: val.recvName
            }
          )
        })
        setTransaction(buyTransaction)
        alert(transaction[0].ifscCode);
      }).catch(async (res) => {
        if (res.response.data.message === 'Error in connection') {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Check Network Connection!',
            })
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login Error',
            })
            navigate('../login')
        }
    })
  }

  useEffect(()=>{
    getTransactions();
  }, []); 

  return (
    <Card id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}
      style={{
        margin: "1.875rem 6.25rem",
        borderRadius: ".75rem",
        border: ".0625rem solid whitesmoke",
      }}
      sx={{
        boxShadow: 20,
      }}
    >
      
      <Box className="gx-d-flex justify-content-center"
        sx={{
    display: "flex", justifyContent: "center", alignItems: "center",backgroundColor:"rgb(153, 237, 184)",
    flexDirection:"column",padding:"2%"
        }}
      >
         <Typography
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "30px",
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