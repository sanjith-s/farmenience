import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import img from "../product8.jpg";

function MarketCard(props) {
  return (
    <Card
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "5px solid darkmagenta",
        width: "240px",
      }}
    >
      <CardMedia style={{ display: "flex", justifyContent: "center" }}>
        <img width="100px" src={img} alt="product image" />
      </CardMedia>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "6px",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <Typography
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "24px",
            color: "darkorchid",
            textAlign: "center",
            paddingBottom: "3px",
          }}
        >
          {props.productName}
        </Typography>
        <Typography
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "15px",
            color: "grey",
          }}
        >
          sellers - {props.sellerCount}
        </Typography>
        <Box sx={{ display: "flex", columnGap: "10px", alignItems: "center" }}>
          <Typography
            style={{
              textTransform: "uppercase",
              fontWeight: "400",
              color: "brown",
            }}
          >
            starting from{" "}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "22px",
              color: "steelblue",
            }}
          >
            ₹ {props.price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "10px",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "grey",
            color: "white",
            columnGap: "10px",
            fontWeight: "600",
          }}
        >
          view
        </Button>
        <Button
          style={{
            backgroundColor: "green",
            color: "white",
            columnGap: "10px",
            fontWeight: "600",
          }}
        >
          <ShoppingCartIcon /> buy
        </Button>
      </CardActions>
    </Card>
  );
}

export default MarketCard;
