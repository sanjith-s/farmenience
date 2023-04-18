import React, { useState, useEffect } from "react";
import Axios from "axios";
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
import { baseURL } from "../constants";
import { LocalSeeOutlined } from "@material-ui/icons";
import Item from './../components/itemBox';

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
  
  const [data, setData] = useState([]);

  useEffect(() => {
    let token = Cookies.get('token');
    if (localStorage.getItem("reqs") == null || localStorage.getItem("reqs") == "" ) {
      localStorage.setItem("reqs", "[]");
    }
    Axios.get(`${baseURL}/profile`, { headers: { tokenstring: token } }).
      then((response) => {
        setData(response.data.message);
      })
      .catch(async (res) => {
        if (res.response.data.message === 'Error in connection') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Network Connection!',
          })
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Error',
          })
          navigate('../login')
        }
      })

  }, []);

  const handleSubmit2 = async() => {
    let token = Cookies.get('token');
    await Axios.post(`${baseURL}/buyer/postrequest`, {
        name: name,
        price: price,
        quantity: qty,
        specificType: type,
        location: location,
    }, { headers: { tokenstring: token } }).
      then((response) => {
        setData(response.data.message);
      })
      .catch(async (res) => {
        if (res.response.data.message === 'Error in connection') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Network Connection!',
          })
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Error',
          })
          navigate('../login')
        }
      })
  }

  const handleSubmit = async () => {
    var items = [];
    alert('Hello');
    handleSubmit2();

    items = JSON.parse(localStorage.getItem("reqs"));
    var newitems = [{
      name: name,
      price: price,
      quantity: qty,
      specificType: type,
      location: location,
      flag: 1,
      buyer: data
    }, ...items];
    localStorage.setItem("reqs", JSON.stringify(newitems));
  }

  return (
    <Box
      sx={{
        margin: "3.125rem",
        backgroundColor: "white",
        padding: "1.875rem",
        borderRadius: "1.875rem",
        // border: ".375rem solid",
      }}
    >
      <Box sx={{ marginBottom: "1.875rem" }}>
        <Typography
          fontWeight={700} fontSize={"2.8125rem"}
          style={{ textTransform: " ", textAlign: "center" }}
        >
          {" "}
          Publish New Request{" "}
        </Typography>
      </Box>

      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            width: "43.75rem",
            border: "6px solid green",
            padding: "1.875rem",
            borderRadius: "7px",
            // borderTopRightRadius: "3.125rem",
            // borderBottomLeftRadius: "3.125rem",
            backgroundColor: "lightgreen",
          }}
        >
          <Box style={{ position: "sticky",marginTop:"10px" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: " ",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  Name of the Product
                </Typography>
              </InputLabel>
              <FilledInput
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                style={{
                  borderRadius: ".3125rem",
                  borderBottomLeftRadius: "0rem",
                  borderBottomRightRadius: "0rem",
                }}
                inputProps={{
                  minLength: 1,
                  maxLength: 30
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky",marginTop:"10px" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"

                  style={{
                    textTransform: " ",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  Price
                </Typography>
              </InputLabel>
              <FilledInput
                value={price}
                endAdornment={
                  <InputAdornment position="end">
                    <CurrencyRupeeIcon style={{ color: "darkgreen" }} />
                  </InputAdornment>
                }
                onChange={async (event) => {
                  if (event.target.value >= 0 && event.target.value <= 2000)
                    setPrice(event.target.value);
                  else {
                    await Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: "Invalid Price",
                    })
                  }
                }}
                style={{
                  borderRadius: ".3125rem",
                  borderBottomLeftRadius: "0rem",
                  borderBottomRightRadius: "0rem",
                }}
                inputProps={{
                  min: 1,
                  max: 200
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky",marginTop:"10px" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: " ",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  Quantity Required
                </Typography>
              </InputLabel>
              <FilledInput
                value={qty}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography
                      variant="h6"
                      style={{
                        textTransform: " ",
                        color: "darkgreen",
                        fontWeight: "600",
                      }}
                    >
                      Kg
                    </Typography>
                  </InputAdornment>
                }
                onChange={async (event) => {
                  if (event.target.value >= 0 && event.target.value <= 50)
                    setQty(event.target.value);
                  else {
                    await Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: "Invalid Quantity",
                    })
                  }
                }}
                style={{
                  borderRadius: ".3125rem",
                  borderBottomLeftRadius: "0rem",
                  borderBottomRightRadius: "0rem",
                }}
                inputProps={{
                  min: 1,
                  max: 20
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky",marginTop:"10px" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: " ",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  Specific Type
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
                  borderRadius: ".3125rem",
                  borderBottomLeftRadius: "0rem",
                  borderBottomRightRadius: "0rem",
                }}
                inputProps={{
                  minLength: 1,
                  maxLength: 20
                }}
              />
            </FormControl>
          </Box>
          <Box style={{ position: "sticky",marginTop:"10px" }}>
            <FormControl fullWidth variant="filled">
              <InputLabel>
                <Typography
                  variant="h6"
                  style={{
                    textTransform: " ",
                    color: "darkgreen",
                    fontWeight: "600",
                  }}
                >
                  Location
                </Typography>
              </InputLabel>
              <FilledInput
                value={location}
                type="text"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                style={{
                  borderRadius: ".3125rem",
                  borderBottomLeftRadius: "0rem",
                  borderBottomRightRadius: "0rem",
                }}
                inputProps={{
                  minLength: 1,
                  maxLength: 40
                }}
              />
            </FormControl>
          </Box>
        </Box>
      </Box>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:"20px" }}>
        <Button endIcon={<DoneIcon />}
          variant="contained"
          color="success"
          onClick={handleSubmit}
          sx={{ bgcolor: "#41b547", "&:hover": { backgroundColor: "#2E7D32", },marginRight:"50px"}}
          
        >
          Submit Request
        </Button>

        <Button variant="contained"
          color="success" onClick={Reset}  sx={{ bgcolor: "#f23c33", "&:hover": { backgroundColor: "#d63131", } }}>
          Reset To Old Values
        </Button>
      </div>
    </Box>
  );
};

export default PageM18;
