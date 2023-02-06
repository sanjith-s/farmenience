import React, { useState } from "react";
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
    props.address,
    props.iname,
    props.iquantity,
    props.iprice,
  ];

  let [limit, setLimit] = useState(props.iprice);
  const limitHandler = (event) => {
    let newLimit = event.target.value;
    setLimit(newLimit);
  };

  let [quantity, setQuantity] = useState(props.iquantity);
  const quantityHandler = (event) => {
    let newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

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
        padding: "30px 0px",
        borderRadius: "20px",
        columnGap: "50px",
        backgroundColor: "#fff",
        border: "3px solid",
      }}
    >
      <Box
        sx={{
          width: "600px",
        }}
      >
        <CardContent style={{ padding: "0px 0px" }}>
          <Box
            style={{
              display: "flex",
              columnGap: "20px",
              borderBottom: "2px solid",
              marginBottom: "30px",
              width: "fit-content",
              padding: "0px 5px",
              border: "3px solid",
              borderRadius: "20px",
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: "22px",
              }}
            >
              regno:
            </Typography>
            <Typography
              style={{
                fontSize: "22px",
              }}
            >
              {props.regno}
            </Typography>
          </Box>
          <Stack sx = {{border: "3px solid", padding: "20px", width: "40em", borderRadius: "20px" }}>
            {itemsName.map((value, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    columnGap: "20px",
                    margin: "14px 10px",
                  }}
                >
                  <Box style={{ width: "40%" }}>
                    <Typography
                      style={{
                        fontWeight: "600",
                        fontSize: "22px",
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
                      padding: "0px 50px",
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
            width="300px"
            style={{
              border: "5px solid darkgreen",
              borderRadius: "16px",
            }}
          />
        </CardMedia>

        <CardActions>
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              alignItems: "center",
              border: "3px solid",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h6" style={{ textTransform: "uppercase" }}>
              {" "}
              negotiate price{" "}
            </Typography>
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
          </Box>
        </CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0px",
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
                style={{ color: "green", fontSize: "30px" }}
              />
            </Link>
            </IconButton>
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "18px",
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
                style={{ color: "lightgreen", fontSize: "30px" }}
              />
            </Link>
              
            </IconButton>
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "18px",
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
                padding: "8px",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ErrorSharpIcon
                style={{ marginRight: "5px", textTransform: "uppercase" }}
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
