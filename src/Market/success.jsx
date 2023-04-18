import { useEffect, React, useRef, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Col, Divider, Row, Table } from 'antd';
import Paper from '@mui/material/Paper';
import logo from "../images/logo_for_invoice.jpg";
import { Container, Typography, Button } from "@mui/material";
import { ConsumerName, ConsumerAddress, ConsumerNumber, Quantities, PaymentMethod } from "./pageM12"
import { PhoneIcon } from '@mui/icons-material/Phone';

const Success = () => {
  // const conName = useContext(ConsumerName);
  // const conAddress = useContext(ConsumerAddress);
  // const conNumber = useContext(ConsumerNumber);
  // const quantities = useContext(Quantities);
  // const paymentMethod = useContext(PaymentMethod);

  // const conName = localStorage.getItem('ConsumerName');
  // const conAddress = localStorage.getItem('ConsumerAddress');
  // const conNumber = localStorage.getItem('ConsumerNumber');
  // const quantities = JSON.parse(localStorage.getItem('Quantities'));
  // const paymentMethod = localStorage.getItem('PaymentMethod');
  
  const conName = "Karthik";
  const conAddress = "hell";
  const conNumber = "1234567890";
  const quantities = [{
    rice: 2,
    wheat: 23
  }];
  const paymentMethod = "card";

  console.log(conName);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/M9', { replace: true });
    });
  }, []);

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
    pdf.save('Invoice.pdf');
  };

  return (
    <Container style={{ display: "flex", flexDirection: "column",height:"100vh", justifyContent: "center", justifyContent:"space-evenly",alignContent:"center" }}>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        Success. <Link to='/M12'>Click Here</Link> to redirect.
      </Typography>
      <div style={{width: "80%",marginLeft:"auto",marginRight:"auto"}} ref={printRef}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={logo} style={{ width: "12.5rem", objectFit: "cover", height: "3.125rem", position: "relative", right: "2%" }} />
          <span style={{ width: "12.5rem", fontWeight: "bolder", fontSize: "1.875rem" }} >INVOICE</span>
          <span style={{ width: "12.5rem" }} ></span>
        </div>
        <Row gutter={39} style={{ marginTop: 32 }}>
          <Col span={8}>
            <table style={{ width: "60%" }}>
              <tr style={{ width: "40%" }}>
                <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Name </strong></th>
                <td>{conName}</td>
              </tr>
              <tr style={{ width: "40%" }}>
                <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Payment Method </strong></th>
                <td>{paymentMethod}</td>
              </tr>
            </table>
          </Col>
          <Col span={8} offset={8}>
            <table style={{ width: "60%" }}>
              <tr>
                <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Invoice Id </strong></th>
                <td>1</td>
              </tr>
              <tr>
                <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Phone Number </strong></th>
                <td>{conNumber}</td>
              </tr>
            </table>
          </Col>
        </Row>
        <Row style={{ marginTop: 48, display: "block" }}>
          <Table dataSource={quantities}
            pagination={false}
          >
            <Table.Column title="Item" dataIndex='quantity' />
            <Table.Column title="Quantity" dataIndex='quantity' />
          </Table>
          <Col span={12} offset={17} style={{ marginTop: "2%" }} >
            <table>
              <div style={{ borderBottom: ".0625rem solid", borderTop: ".0625rem solid", paddingTop: "3%", paddingBottom: "3%" }}>
                <tr>
                  <th style={{ textAlign: "left" }}>Net Total - &nbsp;</th>
                  <th>
                    <span style={{ textAlign: "right", fontWeight: "bolder" }} >₹ {1000}</span>
                  </th>
                </tr>
              </div>
            </table>
          </Col>
          <Divider></Divider>
        </Row>
      </div>
      <div style={{ display: "flex",justifyContent:"flex-end" }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleDownloadPdf}
          style={{
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Print Invoice
        </Button>
      </div>
    </Container>
  );
};

export default Success;


