import React from "react";
import "./css/pageM4.css";
import PriceTable from "./components/priceTable";
import ProductList from "./components/productList";
import { Box, CssBaseline, Typography, Container, Card } from "@mui/material";

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
  tot_amount += item.quantity * item.price;
  return;
});

const saleDetails = {
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
};

function PageM4() {
  return (
    <Container>
      <CssBaseline />
      <div>
        <ProductList cards={itemsBought} />
        {/* <div className="s-row">
          <div className="s-key">Sale name</div>
          <div className="s-value">{saleDetails.saleName}</div>
        </div>
        <div className="s-row">
          <div className="s-key">Order Date</div>
          <div className="s-value">{saleDetails.orderDate}</div>
        </div>
        <div className="s-row">
          <div className="s-key">Delivery date</div>
          <div className="s-value">{saleDetails.deliveryDate}</div>
        </div>
        <div className="s-row">
          <div className="s-key">Client Name</div>
          <div className="s-value">{saleDetails.clientName}</div>
        </div>
        <div className="s-row">
          <div className="s-key">Payment Mode</div>
          <div className="s-value">{saleDetails.paymentMode}</div>
        </div>
        <div className="s-row">
          <div className="s-key">Transcation Id</div>
          <div className="s-value">{saleDetails.transactionID}</div>
        </div>
        <div className="s-row">
          <div className="s-key">Remarks</div>
          <div className="s-value">{saleDetails.remarks}</div>
        </div>
        <div className="s-row">
          <div className="s-contact">Contact Client</div>
        </div> */}
      </div>
      <Card>
        <div>
          <div>
            <button className="printbox" onClick={window.print}>
              Print Pdf
            </button>
          </div>
        </div>
        <div>
          <div>
            <span>Billing Address : </span> Room No:30,Kurinji Hostel, CEG, Anna
            University
          </div>
        </div>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <PriceTable rows={itemsBought} />
        </Box>
        <div>
          <Typography>Total amount to be paid : </Typography>
          <div>₹ {tot_amount}</div>
        </div>
        <div>
          <div className="delsale">Delete Sale</div>
        </div>
      </Card>
    </Container>
  );
}
export default PageM4;
