import React, { useState } from "react";
import WheatImg from "../WheatImg.png";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Snackbar from "@mui/material/Snackbar";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Badge,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";

function NegotiationBox2(props) {
  let [limit, setlimit] = useState(props.discountPrice);
  const limitHandler = (event) => {
    let newLimit = event.target.value;
    setlimit(newLimit);
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  let [maximum, setMaximum] = useState(
    Math.round(props.actualPrice / 2 + props.actualPrice)
  );
  let [minimum, setMinimum] = useState(Math.round(props.actualPrice / 2));
  const handleSubmit = () => {
    let regex = /^[0-9]+$/;
    if (!limit.match(regex)) {
      setOpen(true);
      setlimit(props.discountPrice);
    } else if (limit < minimum || limit > maximum) {
      setOpen(true);
      setlimit(props.discountPrice);
    } else {
      return;
    }
  };

  props.onlimitHandler(limit, props.index);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      width: "30px",
      height: "30px",
      fontSize: "20px",
      fontWeight: "600",
      borderRadius: "20px",
    },
  }));

  return (
    <Card
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "20px",
        margin: "8px 0px",
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image="../wheatimg.jpg"
        sx={{ width: "150px" }}
      />

      <CardContent
        style={{
          lineHeight: "0px",
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
        >
          {props.iName}
        </Typography>
        <Typography
          variant="overline"
          lineHeight={2.5}
          sx={{ fontSize: "15px", paddingLeft: "5px" }}
        >
          {props.quantity}kg
        </Typography>
        <Box>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{ fontSize: "18px", fontWeight: "600" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
            {props.discountPrice}
          </Typography>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{
              textDecoration: "line-through",
              fontSize: "13px",
              paddingLeft: "10px",
            }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "13px" }} />
            {props.actualPrice}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            color="green"
            lineHeight={2.5}
            sx={{ fontWeight: "600" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "17px" }} />
            {props.discountAmount} off
          </Typography>
        </Box>
      </CardContent>

      <CardActions
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
        >
          quantity
        </Typography>

        <StyledBadge
          style={{ position: "sticky" }}
          badgeContent={props.userQuantity}
          color="success"
        >
          <ShoppingCartIcon style={{ fill: "#000000", fontSize: "40px" }} />
        </StyledBadge>
      </CardActions>

      <CardActions
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
        >
          Your price
        </Typography>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            columnGap: "20px",
            alignItems: "center",
          }}
        >
          <FormControl style={{ position: "sticky" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="amount"
              min={props.actualPrice / 2}
              max={props.actualPrice / 2 + props.actualPrice}
              message="hello"
              placeholder={props.discountPrice}
              onChange={limitHandler}
              startAdornment={
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              }
              label="Amount"
            />
          </FormControl>

          <IconButton>
            <ThumbUpIcon
              variant="contained"
              onClick={handleSubmit}
              color="success"
            />
          </IconButton>
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
            <ErrorSharpIcon style={{ marginRight: "5px" }} />
            Enter values from {maximum} to {minimum} only
          </InputLabel>
        </Snackbar>
      </CardActions>
    </Card>
  );
}

export default NegotiationBox2;
