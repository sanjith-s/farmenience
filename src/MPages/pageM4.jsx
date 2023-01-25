import React from "react";
import "./css/pageM4.css";
import PriceTable from "../components/priceTable";
import ProductDetails from "../components/productDetails";
import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const itemsBought = [
  {
    sno: 1,
    item: "rice",
    quantity: "20",
    eachPrice: "60",
    price: "600",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Person Z",
    paymentMode: "Cash On Delivery",
    transactionID: "---------",
    remarks: "--------",
  },
  {
    sno: 2,
    item: "wheat",
    quantity: "20",
    eachPrice: "40",
    price: "800",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Person Z",
    paymentMode: "Cash On Delivery",
    transactionID: "---------",
    remarks: "--------",
  },
  {
    sno: 3,
    item: "ragi",
    quantity: "7",
    eachPrice: "60",
    price: "420",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Person Z",
    paymentMode: "Cash On Delivery",
    transactionID: "---------",
    remarks: "--------",
  },
  {
    sno: 4,
    item: "fibre",
    quantity: "0",
    eachPrice: "42",
    price: "0",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Person Z",
    paymentMode: "Cash On Delivery",
    transactionID: "---------",
    remarks: "--------",
  },

  {
    sno: 5,
    item: "beans",
    quantity: "0",
    eachPrice: "42",
    price: "0",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Person Z",
    paymentMode: "Cash On Delivery",
    transactionID: "---------",
    remarks: "--------",
  },
  {
    sno: 6,
    item: "carrot",
    quantity: "0",
    eachPrice: "42",
    price: "0",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Person Z",
    paymentMode: "Cash On Delivery",
    transactionID: "---------",
    remarks: "--------",
  },
  {
    sno: 7,
    item: "apple",
    quantity: "0",
    eachPrice: "42",
    price: "0",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Person Z",
    paymentMode: "Cash On Delivery",
    transactionID: "---------",
    remarks: "--------",
  },
];

const item = {
  sno: "1",
  orderDate: "21/12/2022",
  deliveryDate: "27/12/2022",
  clientName: "Person Z",
  paymentMode: "Cash On Delivery",
  transactionID: "---------",
  remarks: "--------",
};

let tot_amount = 0;
itemsBought.map((item) => {
  tot_amount += item.quantity * item.eachPrice;
  return;
});

const billingAddress = "Room No: 30 , Kurinji Hostel , CEG , Anna University";

function PageM4() {
  return (
    <Card
      style={{
        display: "flex",
        columnGap: "20px",
        backgroundColor: "#fff",
        padding: "20px",
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
            key={item.sno}
            orderDate={item.orderDate}
            deliveryDate={item.deliveryDate}
            clientName={item.clientName}
            paymentMode={item.paymentMode}
            transactionID={item.transactionID}
            remarks={item.remarks}
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
          >
            contact client
          </Button>
        </Box>
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
            onClick={window.print}
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
              {billingAddress}
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
            <PriceTable rows={itemsBought} />
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
              fontWeight: "600",
              fontSize: "17px",
              backgroundColor: "green",
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
          >
            Delete Sale
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
export default PageM4;
