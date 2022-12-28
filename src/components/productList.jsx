import React from "react";
import ProductDetails from "./productDetails";
import { Box, Grid } from "@mui/material";

function ProductList(props) {
  if (props.cards.length === 0) {
    return <h2> N0 Sales Cards </h2>;
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: 600,
        flexGrow: 1,
        padding: "20px 0px",
        overflow: "auto",
        position: "relative",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={5}
        style={{ padding: "0px" }}
      >
        {props.cards.map((item) => (
          <Grid item padding={2} key={item.sno}>
            <ProductDetails
              key={item.sno}
              orderDate={item.orderDate}
              deliveryDate={item.deliveryDate}
              clientName={item.clientName}
              paymentMode={item.paymentMode}
              transactionID={item.transactionID}
              remarks={item.remarks}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
