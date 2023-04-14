import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Box,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import img from "../images/product8.jpg";
import Axios from "axios";
import Cookies from "js-cookie";
import { baseURL } from "../constants";

function MarketCard(props) {
  
  function addCart() {
    // alert("fsnk")
    const items = {
      productName: props.productName,
      quantity: props.sellerCount,
      price: props.price,
      rating: props.stars,
      type: props.type
    } 
    // console.log(props.array);
    let dummy=props.array;
    dummy.push(items);
    props.cartArray(dummy);

  }

  return (
    <Card
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "5px solid darkmagenta",
        width: "250px",
        position: "relative",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
              fontSize: "24px",
              color: "blue",
              textAlign: "center",
            }}
          >
            ₹ {props.price}
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", top: "1px", right: "1px" }}>
          <Badge
            color="info"
            badgeContent={<Typography>{props.stars}</Typography>}
            showZero
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            style={{ position: "sticky" }}
          >
            <StarRoundedIcon style={{ color: "orange", fontSize: "30px" }} />
          </Badge>
        </Box>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
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
          onClick={addCart}
          variant="contained"
          color="success"
        >
          <ShoppingCartIcon /> add
        </Button>
      </CardActions>
    </Card>
  );
}

export default MarketCard;