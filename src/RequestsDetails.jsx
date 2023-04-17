import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import logo from "../src/images/logo_for_invoice.jpg";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Col, Divider, Row, Table } from 'antd';
import Cookies from 'js-cookie';
import Axios from "axios";
import Swal from 'sweetalert2';
import { baseURL } from '../src/constants';

function BuyerRequestDetails(props) {
  let navigate = useNavigate();

  const acceptMeet = async () => {
    let token = Cookies.get('token');
    await Axios.patch(`${baseURL}/acceptmeetbyfarmer/${props.reqId}`, {
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        if (response.data.message === 'You Accepted the Meet') {
          await Swal.fire({
            icon: 'success',
            title: 'Appointment Accepted !!'
          })
          navigate('../N9');
        }
      })
      .catch(async (res) => {
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
            text: 'Login Error!',
          })
          navigate('../login')
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.response.data.message,
          })
        }
      })
  }

  const cancelMeet = async () => {
    let token = Cookies.get('token');
    await Axios.patch(`${baseURL}/notacceptmeetbyfarmer/${props.reqId}`, {
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        if (response.data.message === 'Not Accepted New Schedule Meet') {
          await Swal.fire({
            icon: 'info',
            title: 'Appointment Not Accepted !!'
          })
          navigate('../N9');
        }
      })
      .catch(async (res) => {
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
            text: 'Login Error!',
          })
          navigate('../login')
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.response.data.message,
          })
        }
      })
  }

  const printRef = useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('AppointmentDetails.pdf');
  };

  return (
    <Card
      style={{
        padding: "0.94rem",
        width: "80%",
        marginLeft: "10%",
        borderRadius: "0.31rem",
        border: "0.125rem solid #000000",
      }}
    >
      {
        props.status === 'Waiting for NGO' || props.status === 'Meet Accepted' ? <></> :
          <>
            <Button
              style={{
                backgroundColor: "#1fe57a",
                color: "#000000",
                fontWeight: "600",
                fontSize: "1rem",
                border: "0.125rem solid #000000",
                marginTop: "0.94rem",
              }}
              onClick={() => {
                acceptMeet()
              }}
            >
              Accept
            </Button>
            <Button
              style={{
                backgroundColor: "#1fe57a",
                color: "#000000",
                fontWeight: "600",
                fontSize: "1rem",
                border: "0.125rem solid #000000",
                marginTop: "0.94rem",
              }}
              onClick={() => {
                cancelMeet()
              }}
            >
              Cancel
            </Button>
          </>
      }

      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: "0.625rem 0.31rem",
          borderTop: "0.125 solid",
          columnGap: "1.25rem",
        }}
      >

        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Request ID
        </Typography>
        <Typography
          style={{
            width: "55%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.reqId}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Reason
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.meetReason}
        </Typography>
      </CardContent>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Meet Date
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.status !== 'Waiting for NGO' && props.status !== 'Meet Accepted' ? props.newDate : props.meetDate}
        </Typography>
      </CardContent>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Meet Time
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.status !== 'Waiting for NGO' && props.status !== 'Meet Accepted' ? props.newTime : props.meetTime}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          soil Details
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.soilDetails}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          crops Growing
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.cropsGrowing}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "1.25rem",
          padding: "0.625rem 0.31rem",
          borderBottom: "0.125rem solid",
        }}
      >
        <Typography
          style={{
            width: "45%",
            backgroundColor: "#16e575",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Status
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.status}
        </Typography>

      </CardContent>
      <CardActions
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
      </CardActions>

      <Button
        onClick={handleDownloadPdf}
        variant="contained"
        style={{
          fontWeight: "600",
          fontSize: "1.063rem",
          backgroundColor: "green",
          // position: "absolute",
          top: "1.25rem",
          left: "1.25rem",
        }}
      >
        Print PDF
      </Button>

      <div style={{ padding: 20, width: "80%", margin: "auto" }} ref={printRef}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src={logo} style={{ width: "12.5rem", objectFit: "cover", height: "3.125rem", position: "relative", right: "2%" }} />
            <span style={{ width: "12.5rem", fontWeight: "bolder", fontSize: "1.10rem" }} >APPOINTMENT DETAILS</span>
            <span style={{ width: "12.5rem" }} ></span>
          </div>
          <Row gutter={39} style={{ marginTop: 32 }}>
            <Col span={8}>
              <table style={{ width: "60%" }}>
                <tr style={{ width: "40%" }}>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Request ID </strong></th>
                  <td>{props.reqId}</td>
                </tr>
                <tr style={{ width: "40%" }}>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Reason </strong></th>
                  <td>{props.meetReason}</td>
                </tr>
                <tr style={{ width: "40%" }}>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Meet Date </strong></th>
                  <td>{props.status !== 'Waiting for NGO' && props.status !== 'Meet Accepted' ? props.newDate : props.meetDate}</td>
                </tr>
              </table>
            </Col>
            <Col span={8} offset={8}>
              <table style={{ width: "60%" }}>
                <tr>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Meet Time </strong></th>
                  <td>{props.status !== 'Waiting for NGO' && props.status !== 'Meet Accepted' ? props.newTime : props.meetTime}</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Soil Details </strong></th>
                  <td>{props.soilDetails}</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Crops Growing </strong></th>
                  <td>{props.soilDetails}</td>
                </tr>
              </table>
            </Col>
          </Row>

          <Row style={{ display: "block", marginTop: 48, alignItems: "center", justifyContent: "center" }}>
            <div>Thank you for booking an appointment.<br />Please check the status of the appointment regularly.</div>
          </Row>
        </div>
    </Card>
  );
}
export default BuyerRequestDetails;
