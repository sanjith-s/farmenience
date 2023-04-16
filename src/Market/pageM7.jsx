import React from "react";
import ConfirmationTable from "../components/confirmationTable";
import {
  CardContent,
  Typography,
  Box,
  Card,
  Button,
  CssBaseline,
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

let tot_amount = 0;
itemsBought.map((item) => {
  tot_amount += item.quantity * item.eachPrice;
  return;
});

const PageM7 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        margin: "2.8125rem",
        borderRadius: ".5rem",
        border: ".3125rem solid",
        position: "relative",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "transparent",
          padding: "1.875rem 0rem",
        }}
      >
        <CssBaseline />
        <Typography
          variant="h4"
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "600",
            color: "darkgreen",
          }}
        >
          confirmation page
        </Typography>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "1.25rem",
            }}
          >
            <ConfirmationTable rows={itemsBought} />
          </Box>

          <Box
            sx={{
              display: "flex",
              columnGap: "1.25rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Total amount to be paid :
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontWeight: "600",
              }}
            >
              ₹ {tot_amount}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "1.875rem",
              position: "absolute",
              bottom: "1.25rem",
              right: "1.875rem",
            }}
          >
            <Button
              variant="contained"
              color="success"
            >
              confirm
            </Button>
            <Button
              variant="contained"
              color="success"
            >
              cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PageM7;
