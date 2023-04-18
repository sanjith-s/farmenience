import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WheatImg from "../wheatimg.jpg";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2";
import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";

function NegotiationBox2(props) {
  const navigate = useNavigate();
  let [limit, setlimit] = useState(props.userPrice);
  const limitHandler = (event) => {
    let newLimit = event.target.value;
    setlimit(newLimit);
    props.getValue(newLimit);
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  let [maximum, setMaximum] = useState(
    Math.round(1000.5)
  );
  let [minimum, setMinimum] = useState(Math.round(props.actualPrice / 2));

  const handleSubmit = async () => {
      var content2 = JSON.parse(localStorage.getItem("reqs"));
      if (limit == props.userPrice) {
      let token = Cookies.get('token');
      await Axios.post(`${baseURL}/buyer/postrequest`, {
          name: content2[props.index].name,
          price: content2[props.index].price,
          quantity: content2[props.index].quantity,
          specificType: content2[props.index].specificType,
          location: content2[props.index].location
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
        content2.splice(props.index, 1);
      } else {
      content2[props.index].price = content2[props.index].nprice;
      content2[props.index].price = limit;
      content2[props.index].flag = 1;
      }
      localStorage.setItem("reqs",JSON.stringify(content2));
      Swal.fire({
        icon: 'success',
        title: 'Sent',
        text: 'Price request sent to seller',
      })
      navigate("../m10");
      return;
  };

  props.onlimitHandler(limit, props.index);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 13,
      border: `0.063rem solid ${theme.palette.background.paper}`,
      padding: "0rem 0.25rem",
      width: "1.875rem",
      height: "1.875rem",
      fontSize: "1.25rem",
      fontWeight: "600",
      borderRadius: "1.25rem",
    },
  }));

  return (
    <Card
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "1.25rem",
        margin: "0.375rem 0rem",
      }}
    >
      <CardMedia
        component="img"
        height="8.75rem"
        image={WheatImg}
        sx={{
          width: "11.875rem",
          border: "0.25rem solid #285430",
          borderRadius: "0.188rem",
        }}
      />

      <CardContent
        style={{
          lineHeight: "0rem",
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
          sx={{ fontSize: "0.938rem", paddingLeft: "0.313rem" }}
        >
          ₹ {props.actualPrice}
        </Typography>
        <Typography
          variant="overline"
          lineHeight={2.5}
          sx={{ fontSize: "15px", paddingLeft: "5px" }}
        >
          {props.weight} kg
        </Typography>
      </CardContent>

      <CardActions
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          rowGap: "1.25rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600", marginBottom: "12px" }}
        >
          quantity
        </Typography>

        <StyledBadge
          style={{ position: "sticky" }}
          badgeContent={props.quantity}
          color="success"
        >
          <ShoppingCartIcon style={{ fill: "#000000", fontSize: "2.5rem" }} />
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
            padding: "2.5rem",
            display: "flex",
            columnGap: "1.25rem",
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
              placeholder={props.userPrice}
              onChange={limitHandler}
              startAdornment={
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              }
              label="Amount"
            />
          </FormControl>

          <IconButton
              onClick={handleSubmit}
          >
            <ThumbUpIcon
              variant="contained"
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
              padding: "0.5rem",
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "1.125rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ErrorSharpIcon style={{ marginRight: "0.313rem" }} />
            Enter values from {minimum} to {maximum} only
          </InputLabel>
        </Snackbar>
      </CardActions>
    </Card>
  );
}

export default NegotiationBox2;
