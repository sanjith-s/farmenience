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
import Swal from "sweetalert2";

export default function MediaCard(props) {
  
  async function addCart() {

    await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Item added to cart',
      showConfirmButton: false,
      timer: 950
    });

    const items = {
      productName: props.productName,
      quantity: props.sellerCount,
      price: props.price,
      rating: props.stars,
      type: props.type,
      filename: props.imgsrc 
    } 
    console.log(items);
    let dummy=props.array;
    dummy.push(items);
    console.log(dummy);
    props.cartArray(dummy);
    console.log(props.cartArray);
  }

  async function viewItem() {
    await Swal.fire({
      position: 'center',
      icon: 'info',
      html: "<b>Product Name: </b> " + props.productName + "<br /><br />" + "<b>Price: </b>" + props.price + "<br /><br />" + "<b>Quantity: </b>" + props.sellerCount + "<br /><br />" + "<b>Type: </b>" + props.type + "<br /><br />" + "<b>Rating: </b>" + props.stars,
      imageUrl: props.imgsrc,
      // // showConfirmButton: false,
      // timer: 950
    });
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: ".625rem .938rem",
        boxShadow: ".125rem .125rem .125rem .125rem rgba(0, 0, 0, 0.2)",
        background:"linear-gradient(white,#74e81c)"
      }}>
      <CardMedia
        sx={{ height: "12.5rem" }}
        image={props.imgsrc}
        title="green iguana"
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" style={{fontWeight:"bold",textAlign:"center"}} component="div">
          {props.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
          Sellers - {props.sellerCount}
        </Typography>

      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="small" variant="contained"
        onClick={viewItem}>View</Button>
        <Typography variant="h6" color="text.success">
          ₹ {props.price}
        </Typography>

        <Button
          size="small"
          style={{
            backgroundColor: "green",
            color: "white",
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