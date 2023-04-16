import React, { useState } from "react";
import Cookies from 'js-cookie';
import ProductCard from "../components/productCard";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
// import { Button, Box, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  InputAdornment,
  FormControl,
  FilledInput,
  InputLabel,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import Axios from "axios";
import { baseURL } from "../constants";

const PageM18 = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const Reset = () => {
    setName('');
    setPrice('');
    setQty('');
    setType('');
    setLocation('');
  }

  const handleSubmit = async () => {
    let token = Cookies.get('token');
    await Axios.post(`${baseURL}/buyer/postrequest`, {
      name: name,
      price: price,
      quantity: qty,
      specificType: type,
      location: location
    }, { headers: { tokenstring: token } })
      .then(async (res) => {
        alert("SUCCESS");
        console.log("Successfully added request");
      }).catch((err) => {
        alert("FAILURE");
        console.log(err);
      })
  }

  return (
    <Box
      sx={{
        margin: "50px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "30px",
        border: "6px solid",
      }}
    >
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          fontWeight={700} fontSize={"45px"}
          style={{ textTransform: "uppercase", textAlign: "center" }}
        >
          {" "}
          publish new request{" "}
        </Typography>
      </Box>

      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            width: "700px",
            border: "8px solid green",
            padding: "30px",
            borderRadius: "5px",
            borderTopRightRadius: "50px",
            borderBottomLeftRadius: "50px",
            backgroundColor: "lightgreen",
          }}
        >
          <Box style={{ position: "sticky" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: "uppercase",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  name of the product
                </Typography>
              </InputLabel>
              <FilledInput
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                style={{
                  borderRadius: "5px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                inputProps={{
                  minLength: 1,
                  maxLength: 30
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"

                  style={{
                    textTransform: "uppercase",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  price
                </Typography>
              </InputLabel>
              <FilledInput
                value={price}
                endAdornment={
                  <InputAdornment position="end">
                    <CurrencyRupeeIcon style={{ color: "darkgreen" }} />
                  </InputAdornment>
                }
                onChange={(event) => {
                  if (event.target.value >= 0 && event.target.value <= 2000)
                    setPrice(event.target.value);
                  else {
                    setOpen1(true);
                  }
                }}
                style={{
                  borderRadius: "5px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                inputProps={{
                  min: 1,
                  max: 200
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: "uppercase",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  quantity required
                </Typography>
              </InputLabel>
              <FilledInput
                value={qty}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography
                      variant="h6"
                      style={{
                        textTransform: "uppercase",
                        color: "darkgreen",
                        fontWeight: "600",
                      }}
                    >
                      kg
                    </Typography>
                  </InputAdornment>
                }
                onChange={(event) => {
                  if (event.target.value >= 0 && event.target.value <= 50)
                    setQty(event.target.value);
                  else {
                    setOpen2(true);
                  }
                }}
                style={{
                  borderRadius: "5px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                inputProps={{
                  min: 1,
                  max: 20
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: "uppercase",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  specific type
                </Typography>
              </InputLabel>
              <FilledInput
                value={type}
                type="text"
                onChange={(event) => {
                  // if (event.target.value == "Fruit" || event.target.value == "Vegetable" || event.target.value == "Grain" || event.target.value == "Millet")
                  setType(event.target.value);
                  // else {
                  // setOpen3(true);
                  // }
                }}
                style={{
                  borderRadius: "5px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                inputProps={{
                  minLength: 1,
                  maxLength: 20
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: "uppercase",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  location
                </Typography>
              </InputLabel>
              <FilledInput
                value={location}
                type="text"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                style={{
                  borderRadius: "5px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                inputProps={{
                  minLength: 1,
                  maxLength: 40
                }}
              />
            </FormControl>
          </Box>
        </Box>

        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Invalid Price
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose1}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Invalid Quantity
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose2}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Invalid Type
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose3}>Ok</Button>
          </DialogActions>
        </Dialog>

      </Box>

      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <Button endIcon={<DoneIcon />}
        variant="contained"
        color="success"
        onClick={handleSubmit}
      >
        submit request
      </Button>

      <Button variant="contained"
            color="success" onClick={Reset} >
        Reset To Old Values
      </Button>
      </div>
    </Box>
  );
};

export default PageM18;
