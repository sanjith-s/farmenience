import React from "react";
import { useState } from "react";
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

function ProductCard() {
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

  return (
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
              endAdornment={
                <InputAdornment position="end">
                  <CurrencyRupeeIcon style={{ color: "darkgreen" }} />
                </InputAdornment>
              }
              onChange={(event) => {
                if(event.target.value >= 1 && event.target.value <= 2000)
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
                if(event.target.value >= 1 && event.target.value <= 50)
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
              type="text"
              onChange={(event) => {
                if(event.target.value == "Fruit" || event.target.value == "Vegetable" || event.target.value == "Grain" || event.target.value == "Millet")
                  setType(event.target.value);
                else {
                  setOpen3(true);
                }
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
  );
}

export default ProductCard;
