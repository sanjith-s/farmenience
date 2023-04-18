import React, { useState, useEffect } from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
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
  Button,
} from "@mui/material";
import Axios from "axios";
import { baseURL } from "../constants";

const itemsName = [
  "name",
  "phone number",
  // "address",
  "item name",
  "item quantity",
  "item price",
];

const SellerNegotiate = (props) => {

  let data = props.data;

  const itemsValue = [
    
    props.name,
    props.phno,
    // props.address.addline1 + " ," + props.address.addline2,
    props.iname,
    props.iquantity,
    props.iprice,
  ];

  // console.log(props.address);
  // --------------------------------------------------------------------

  // const [orders, setOrders] = useState(() => {
  //   const savedItem = localStorage.getItem('reqs');
  //   const parsedItem = JSON.parse(savedItem);
  //   return parsedItem || " nothing "
  // });

  // const index = orders.indexOf(orders.find((order) => {
  //   return order.name === props.iname;
  // }));

  // console.log(" hi" + index);

  // ----------------------------------------------------------------------------

  let [limit, setLimit] = useState(props.iprice);
  const limitHandler = (event) => {
    let newLimit = event.target.value;
    console.log(newLimit);
    // orders[index].nprice = newLimit;
    setLimit(newLimit);
  };

  let [quantity, setQuantity] = useState(props.iquantity);
  const quantityHandler = (event) => {
    let newQuantity = event.target.value;
    console.log(newQuantity);
    // orders[index].quantity = newQuantity;
    setQuantity(newQuantity);

  };

  // ----------------------------------------------------------------------------


  // useEffect(() => {
  //   console.log("useEffects");
  //   localStorage.setItem("orders", JSON.stringify(orders))
  // }, [limit, quantity]);

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

  const handleSubmit = async () => {
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
      if (limit == props.iprice) {
        let token = Cookies.get('token');
        await Axios.post(`${baseURL}/buyer/postrequest`, {
          name: orders[index].name,
          price: orders[index].price,
          quantity: orders[index].quantity,
          specificType: orders[index].specificType,
          location: orders[index].locatiom1
        }, { headers: { tokenstring: token } })
          .then(async (res) => {
            await Swal.fire({
              icon: 'success',
              title: "Successfully added request !!!",
            })
          }).catch(async (err) => {
            await Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message,
            })
          })
        orders.splice(index, 1);
      } else {
        orders[index].flag = 0;
        orders[index].nprice = limit;
      }
      localStorage.setItem("reqs", JSON.stringify(orders));
      Swal.fire({
        icon: 'success',
        title: 'Sent',
        text: 'Price request sent to seller',
      })
      return;
    }
  };

  const negotiate = async() => {
    alert('Hei');
    console.log(props.all);
    console.log(limit, quantity);
    let token = Cookies.get('token');
    await Axios.post(`${baseURL}/transit`, {
        name: props.all.name,
        price: props.all.price,
        quantity: props.all.quantity,
        specificType: props.all.specificType,
        location: props.all.location,
        senderEmail: props.all.senderEmail,
        senderName: props.all.senderName,
        senderPhoneNo: props.all.senderPhoneNo,
        negPrice: limit,
        negQuantity: quantity  
    } ,{ headers: { tokenstring: token }}).then((res) => {
      console.log('success');  
    }).then(async (res) => {
      await Swal.fire({
        icon: 'success',
        title: "Successfully added seller's products" + res.data.message,
      })
    }).catch(async (err) => {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
      })
    })
  }

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0rem",
        borderRadius: "0.25rem",
        columnGap: "3.125rem",
        backgroundColor: "#ffffff",
        /* border: ".1875rem solid", */
      }}
    >
      <Box
        sx={{
          width: "60%", borderRadius : "0.25rem",
        }}
      >

          <Box
            alignSelf = "left"
            style={{
              display: "flex",
              columnGap: "1.25rem",
              /* borderBottom: ".125rem solid", */
              margin: "0.8125rem",
              width: "fit-content",
              padding: "0.3125rem",
              /* border: ".1875rem solid", */
              borderRadius: "0.25rem",
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
              {props.id}
            </Typography>
          </Box>
          <Stack sx={{ /* border: ".1875rem solid" */ padding: "1.25rem", width: "40rem", 
          borderRadius: "0.25rem", backgroundColor: "white" , justifyContent:"left",margin: "0.875rem",}}>
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
                  <Box align = "left" style={{ width: "40%" }}>
                    <Typography
                      style={{
                        fontWeight: "500",
                        fontSize: "1.375rem",
                        /* textTransform: "uppercase", */
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
                      style={{
                        textTransform: "capitalize",
                        backgroundColor:"#f5f5f5",
                        width:"30rem",
                        borderRadius:"0.2rem",
                        padding:"0.25rem"
                      }}
                    >
                      {itemsValue[index]}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
      </Box>

      <CardActions style={{ display: "flex", flexDirection: "column" }}>
        <CardMedia>
          <img
            src={props.img}
            alt="wheat img"
            width="18.75rem"
            style={{
              /* border: ".3125rem solid darkgreen", */
              /* borderRadius: "1rem", */
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
              /* border: ".1875rem solid", */
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
            <Button onClick={negotiate}>
              Negotiate
            </Button>
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
                  regNo: props.regNo,
                  quantity: quantity,
                  price: limit,
                  key: 'accept',
                }}
                style={{ textDecoration: "none" }}
              >
                <ThumbUpIcon
                  variant="contained"
                  // onClick={handleSubmit}
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
                  style={{ color: "red", fontSize: "1.875rem" }}
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
