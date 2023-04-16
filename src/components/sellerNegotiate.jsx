import React, { useState,useEffect } from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";
import {Link,useLocation } from "react-router-dom";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  CardActions,
  CardContent,
  Typography,
  Card,
  Stack,
  CardMedia,
  Snackbar,
} from "@mui/material";
import { data } from "autoprefixer";

const itemsName = [
  "name",
  "phone number",
  "address",
  "item name",
  "item quantity",
  "item price",
];

const SellerNegotiate = (props) => {

  let data = props.data;
  
  const itemsValue = [
    props.name,
    props.phno,
    props.address.addline1 + " ," + props.address.addline2,
    props.iname,
    props.iquantity,
    props.iprice,
  ];

  console.log(props.address);
// --------------------------------------------------------------------

  const [orders,setOrders] = useState(()=>{
    const savedItem = localStorage.getItem('orders');
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || " nothing "
  }) ;

  const index = orders.indexOf(orders.find((order)=> { 
    return order._id === props.id;
  }));

  console.log(index);

  // ----------------------------------------------------------------------------

  let [limit, setLimit] = useState(props.iprice);
  const limitHandler = (event) => {
    let newLimit = event.target.value;
    orders[index].price = newLimit ;
    setLimit(newLimit);
  };

  let [quantity, setQuantity] = useState(props.iquantity);
  const quantityHandler = (event) => {
    let newQuantity = event.target.value;
    orders[index].quantity = newQuantity ;
    setQuantity(newQuantity);
    
  };

  // ----------------------------------------------------------------------------

  
  useEffect(()=>{
    console.log("useEffects");
    localStorage.setItem("orders",JSON.stringify(orders)) 
  },[limit,quantity]);

  // -----------------------------------------------------------------------------

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  let [minimum, setMinimum] = useState(Math.round(props.iprice / 2));
  let [iQuantity, setIQuantity] = useState(Math.round(props.iquantity));

  const handleSubmit = () => {
    let regex = /^[0-9]+$/;
    if (!quantity.match(regex) || !limit.match(regex)) {
      setOpen(true);
      setLimit(props.iprice);
      setQuantity(props.iquantity);
    } else if (limit < minimum || quantity < iQuantity) {
      setOpen(true);
      setLimit(props.iprice);
      setQuantity(props.iquantity);
    } else {
      return;
    }
  };

  

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1.875rem 0rem",
        borderRadius: "1.25rem",
        columnGap: "3.125rem",
        backgroundColor: "#fff",
        border: ".1875rem solid",
      }}
    >
      <Box
        sx={{
          width: "37.5rem",
        }}
      >
        <CardContent style={{ padding: "0rem 0rem" }}>
          <Box
            style={{
              display: "flex",
              columnGap: "1.25rem",
              borderBottom: ".125rem solid",
              marginBottom: "1.875rem",
              width: "fit-content",
              padding: "0rem .3125rem",
              border: ".1875rem solid",
              borderRadius: "1.25rem",
              backgroundColor: "lightyellow"
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: "1.375rem",
              }}
            >
              regno:
            </Typography>
            <Typography
              style={{
                fontSize: "1.375rem",
              }}
            >
              {props.regno}
            </Typography>
          </Box>
          <Stack sx = {{border: ".1875rem solid", padding: "1.25rem", width: "40em", borderRadius: "1.25rem", backgroundColor: "lightyellow" }}>
            {itemsName.map((value, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    columnGap: "1.25rem",
                    margin: ".875rem .625rem",
                  }}
                >
                  <Box style={{ width: "40%" }}>
                    <Typography
                      style={{
                        fontWeight: "600",
                        fontSize: "1.375rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      width: "60%",
                      justifyContent: "flex-start",
                      padding: "0rem 3.125rem",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {itemsValue[index]}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </CardContent>
      </Box>

      <CardActions style={{ display: "flex", flexDirection: "column" }}>
        <CardMedia>
          <img
            src={props.img}
            alt="wheat img"
            width="18.75rem"
            style={{
              border: ".3125rem solid darkgreen",
              borderRadius: "1rem",
            }}
          />
        </CardMedia>

        <CardActions>
          <Box
            sx={{
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              rowGap: "1.25rem",
              alignItems: "center",
              border: ".1875rem solid",
              borderRadius: "1.25rem",
              backgroundColor: "lightyellow"
            }}
          >
            <Typography variant="h6" style={{ textTransform: "uppercase" }}>
              {" "}
              negotiate price{" "}
            </Typography>
            
            {/* -------------------------------------------------------------------------------------- */}
            <FormControl style={{ position: "sticky" }}>
              <InputLabel htmlFor="outlined-adornment-quantity">
                Quantity
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-quantity"
                type="quantity"
                min={props.iquantity}
                message="hello"
                placeholder={props.iquantity}
                onChange={quantityHandler}
                startAdornment={
                  <InputAdornment position="start">
                    <ProductionQuantityLimitsIcon />
                  </InputAdornment>
                }
                label="Quantity"
              />
            </FormControl>

            <FormControl style={{ position: "sticky" }}>
              <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-price"
                type="Price"
                min={props.iprice / 2}
                message="hello"
                placeholder={props.iprice}
                onChange={limitHandler}
                startAdornment={
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                }
                label="Price"
              />
            </FormControl>
            {/* ----------------------------------------------------------------------------------------- */}
          </Box>

        </CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0rem",
            width: "100%",
          }}
        >
          <Box>
          <IconButton>
            <Link
              to="/M1"
              state={{
                data: data,
                regNo : props.regNo,
                quantity: quantity,
                price: limit,
                key:'accept',
              }}
              style={{ textDecoration: "none" }}  
            >
              <ThumbUpIcon
                variant="contained"
                onClick={handleSubmit}
                style={{ color: "green", fontSize: "1.875rem" }}
              />
            </Link>
            </IconButton>
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "1.125rem",
              }}
            >
              accept
            </Typography>
          </Box>
          <Box>
            <IconButton>
            <Link
              to="/M1"
              state={{
                data: props.data,
              }}
              style={{ textDecoration: "none" }}  
            >
              <ThumbDownIcon
                variant="contained"
                style={{ color: "lightgreen", fontSize: "1.875rem" }}
              />
            </Link>
              
            </IconButton>
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "1.125rem",
              }}
            >
              reject
            </Typography>
          </Box>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            color="warning"
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
          >
            <InputLabel
              style={{
                backgroundColor: "red",
                width: "100%",
                padding: ".5rem",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1.125rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ErrorSharpIcon
                style={{ marginRight: ".3125rem", textTransform: "uppercase" }}
              />
              Enter only numbers greater than default value
            </InputLabel>
          </Snackbar>
        </Box>
      </CardActions>
    </Card>
  );
};

export default SellerNegotiate;
