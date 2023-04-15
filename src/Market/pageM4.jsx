import React, { useState, useRef, useEffect } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import PriceTable from "../components/priceTable";
import ProductDetails from "../components/productDetails";
import { Link, useLocation } from "react-router-dom";
import { Col, Divider, Row, Table } from 'antd';
import logo from "../images/logo_for_invoice.jpg";
import Paper from '@mui/material/Paper';
import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  // Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
const itemsBought = [
  {
    sno: 1,
    item: "rice",
    quantity: 0,
    eachPrice: "60",
    price: 0,

  },
  {
    sno: 2,
    item: "wheat",
    quantity: 0,
    eachPrice: "40",
    price: 0,

  },
  {
    sno: 3,
    item: "ragi",
    quantity: 0,
    eachPrice: "60",
    price: 0,

  },
  {
    sno: 4,
    item: "fibre",
    quantity: 0,
    eachPrice: "35",
    price: 0,

  },

  {
    sno: 5,
    item: "beans",
    quantity: 0,
    eachPrice: "42",
    price: 0,

  },
  {
    sno: 6,
    item: "carrot",
    quantity: 0,
    eachPrice: "24",
    price: 0,
  },
  {
    sno: 7,
    item: "apple",
    quantity: 0,
    eachPrice: "30",
    price: 0,
  },
];

const item = {
  id: 1,
  orderDate: "21/12/2022",
  deliveryDate: "27/12/2022",
  clientName: "Person Z",
  paymentMode: "Safe Payment",
  transactionID: "xxxyyyzzz",
  remarks: "xyz",
  clientEmailId: "chumma@gmail.com",
  clientPh: 1111111111,
  items: ["rice", "wheat", "carrot"],
  address: "Room No: 30 , Kurinji Hostel , CEG , Anna University",
};

const billingAddress = "Room No: 30 , Kurinji Hostel , CEG , Anna University";

function PageM4() {

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  }

  const fullAnotherSpeak = (text) => {
    responsiveVoice.speak(text, "Tamil Male");
  }

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
    document.body.appendChild(addScript);
  }, []);

  const printRef = useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    let data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Receipt.pdf');

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClickClose = () => {
      setOpen(false);

    }

    const location = useLocation();

    data = location.state ? location.state.data : item;
    const ordDate = location.state ? location.state.date[0] : item.orderDate;
    const delDate = location.state ? location.state.date[1] : item.deliveryDate;


    let filterItems;
    var count = 1;
    let tot_amount = 0;
    data.items.forEach(i => {
      i.sno = count;
      i.total = i.unitPrice * i.quantity;
      tot_amount += i.total;
      count++;
    })

    const handleChange = () => {
      filterItems = itemsBought.filter((value) => {
        if ((data.items).includes(value.item)) {
          return value;
        }
      });

      filterItems.forEach((value, index) => {
        value.quantity = data.quantity[index];
        value.price = value.quantity * value.eachPrice;
      });
    }

    handleChange();

    tot_amount = 0;
    filterItems.map((item) => {
      tot_amount += item.quantity * item.eachPrice;
      return;
    });
    console.log("hello");
    console.log(filterItems);

    return (
      <>
        <Card id="google_translate_element">
          <Box className="gx-d-flex justify-content-center" style={{ padding: "15px 0px" }} onClick={(e) => {
            fullAnotherSpeak(e.target.innerText)
          }}>
            <Typography
              variant="h4"
              style={{ fontWeight: "600", textTransform: "uppercase", textAlign: "center" }}
            >
              {location.state ? location.state.from : "sales"}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              columnGap: "20px",
              backgroundColor: "#fff",
              padding: "0px 20px 20px 20px",
            }}
          >
            <CssBaseline />

            <CardContent
              sx={{
                width: "40%",
                bgcolor: "#ddd",
                padding: "20px 0px",
                borderRadius: "8px",
                border: "4px solid",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  padding: "0px 20px",
                  textTransform: "capitalize",
                }}
              >
                product details
              </Typography>
              <Box
                sx={{
                  padding: "15px 0px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ProductDetails
                  style={{ padding: "15px 0px" }}
                  key={data.id}
                  orderDate={ordDate}
                  deliveryDate={delDate}
                  clientName={data.clientName}
                  paymentMode={data.paymentMode}
                  transactionID={data.transactionID}
                  remarks={data.remarks}
                />
              </Box>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    fontWeight: "600",
                    fontSize: "17px",
                    backgroundColor: "green",
                  }}
                  onClick={handleClickOpen}
                >
                  contact client
                </Button>
              </Box>
              <Dialog open={open} onClick={handleClickClose} >
                <DialogTitle style={{ borderBottom: "5px solid green" }}> <Typography style={{ textTransform: "uppercase", fontWeight: "600" }}>client contact details</Typography></DialogTitle>
                <List>
                  <ListItem>
                    <ListItemButton ><Typography style={{ textTransform: "lowercase" }}>Email: {data.clientEmailId}</Typography></ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton><Typography>Mobile Number: {data.clientPh}</Typography></ListItemButton>
                  </ListItem>
                </List>
              </Dialog>
            </CardContent>

            <CardContent
              style={{
                width: "60%",
                position: "relative",
                paddingTop: "80px",
                border: "4px solid",
                borderRadius: "10px",
                backgroundColor: "#eee",
              }}
            >
              <CssBaseline />
              <Box>
                <Button
                  onClick={handleDownloadPdf}
                  variant="contained"
                  style={{
                    fontWeight: "600",
                    fontSize: "17px",
                    backgroundColor: "green",
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                  }}
                >
                  Print PDF
                </Button>
                <Box
                  id="print-part"
                  sx={{
                    display: "flex",
                    columnGap: "20px",
                    margin: "5px 0px",
                    width: "100%",
                    alignItems: "center",
                    padding: "12px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "600",
                      width: "27%",
                    }}
                  >
                    billing address :
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "18px",
                      overflow: "auto",
                    }}
                  >

                    {data.billingAddress}

                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: "20px",
                  }}
                >
                  <PriceTable rows={data.items} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    columnGap: "20px",
                    margin: "5px 0px",
                    width: "100%",
                    padding: "12px",
                  }}
                >
                  <Typography
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textTransform: "uppercase",
                      fontWeight: "600",
                      width: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    Total amount to be paid :
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "600",
                        paddingLeft: "15px",
                        width: "30%",
                      }}
                    >
                      ₹ {tot_amount}
                    </Typography>
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "green",
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                  }}
                >
                  <Link
                    to="/M3"
                    state={{
                      data: data.transactionID,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      Delete Sale
                    </Typography>
                  </Link>
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Card>

        <div style={{ padding: 20, width: "80%", margin: "auto" }} ref={printRef}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src={logo} style={{ width: "200px", objectFit: "cover", height: "50px", position: "relative", right: "2%" }} />
            <span style={{ width: "200px", fontWeight: "bolder", fontSize: "30px" }} >INVOICE</span>
            <span style={{ width: "200px" }} ></span>
          </div>
          <Row gutter={39} style={{ marginTop: 32 }}>
            <Col span={8}>
              <table style={{ width: "60%" }}>
                <tr style={{ width: "40%" }}>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Client Name </strong></th>
                  <td>{data.clientName}</td>
                </tr>
                <tr style={{ width: "40%" }}>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Payment Mode </strong></th>
                  <td>{data.paymentMode}</td>
                </tr>
              </table>
            </Col>
            <Col span={8} offset={8}>
              <table style={{ width: "60%" }}>
                <tr>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Invoice # </strong></th>
                  <td>1</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Order Date </strong></th>
                  <td>{ordDate}</td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}><strong style={{ paddingLeft: "1%" }}>Delivery Date </strong></th>
                  <td>{delDate}</td>
                </tr>
              </table>
            </Col>
          </Row>

          <Row style={{ display: "block", marginTop: 48 }}>
            <div>Bill To: <strong style={{ paddingLeft: "1%" }}>{data.clientName}</strong><br />{data.address}</div>
          </Row>


          <Row style={{ marginTop: 48, display: "block" }}>

            <Table dataSource={data.items}
              pagination={false}
            >
              <Table.Column title="S. No" dataIndex='sno' />
              <Table.Column title="Item" dataIndex='name' />
              <Table.Column title="Quantity" dataIndex='quantity' />
              <Table.Column title="Price / kg" dataIndex='unitPrice' />
              <Table.Column title="Total Price (In Rs.)" dataIndex='total' />
            </Table>
            <Col span={12} offset={17} style={{ marginTop: "2%" }} >
              <table>
                <div style={{ borderBottom: "1px solid", borderTop: "1px solid", paddingTop: "3%", paddingBottom: "3%" }}>
                  <tr>
                    <th style={{ textAlign: "left" }}>Net Total - &nbsp;</th>
                    <th>
                      <span style={{ textAlign: "right", fontWeight: "bolder" }} >₹ {tot_amount}</span>
                    </th>
                  </tr>
                </div>
              </table>
            </Col>
            <Divider></Divider>
          </Row>
        </div>
      </>
    );
  }
}

export default PageM4;