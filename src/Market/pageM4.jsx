import React, { useState, useRef, useEffect } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import PriceTable from "../components/priceTable";
import ProductDetails from "../components/productDetails";
import { Link, useLocation } from "react-router-dom";
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
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead
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
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Receipt.pdf');
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);

  }

  const location = useLocation();

  const data = location.state ? location.state.data : item;
  const ordDate = location.state ? location.state.date[0] : item.orderDate;
  const delDate = location.state ? location.state.date[1] : item.deliveryDate;


  let filterItems;

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

  let tot_amount = 0;
  filterItems.map((item) => {
    tot_amount += item.quantity * item.eachPrice;
    return;
  });

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
                key={data.key}
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
                  {data.address}
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
                <PriceTable rows={filterItems} />
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
      <div ref={printRef}>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          INVOICE
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          ID :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.id}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Order Date :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {ordDate}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Delivery Date :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {delDate}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Client Name :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.clientName}
        </Typography>

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
          {data.address}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Payment Mode :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.paymentMode}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Transaction ID :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.transactionID}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Remarks :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.remarks}
        </Typography>

        <TableContainer
          component={Paper}
          style={{
            border: "3px solid",
            width: "fit-content",
            overflow: "auto",
            height: "300px",
          }}
        >
          <Table sx={{ width: "650px", overflow: "auto" }} aria-label="prece table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  sno
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  item
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  quantity
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  price per kg
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  total price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterItems.map((row) => (
                <TableRow key={row.sno} style={{ borderBottom: "2px solid #000" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.sno}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      textTransform: "capitalize",
                    }}
                  >
                    {row.item}{" "}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.eachPrice}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
      </div>
    </>
  );
}
export default PageM4;
{/*
<Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          INVOICE
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          ID :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.id}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Name :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {conName}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Address :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {conAddress}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Payment Method :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Transaction ID :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.transactionID}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            width: "27%",
          }}
        >
          Remarks :
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "18px",
            overflow: "auto",
          }}
        >
          {data.remarks}
        </Typography>

        <TableContainer
          component={Paper}
          style={{
            border: "3px solid",
            width: "fit-content",
            overflow: "auto",
            height: "300px",
          }}
        >
          <Table sx={{ width: "650px", overflow: "auto" }} aria-label="prece table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  sno
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  item
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  quantity
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  price per kg
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  total price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterItems.map((row) => (
                <TableRow key={row.sno} style={{ borderBottom: "2px solid #000" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.sno}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      textTransform: "capitalize",
                    }}
                  >
                    {row.item}{" "}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.eachPrice}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {row.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
    
*/}