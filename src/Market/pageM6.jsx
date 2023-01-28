import React from "react";

import { useState, useRef } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const PageM6 = () => {
  const [file, setFile] = useState();
  const [open,setOpen] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [name,setName] = useState();
  const [price,setPrice] = useState();
  const [quantity,setQuantity] = useState();
  const [type,setType] = useState();
  const handleAllChange = ()=>{
      setName(document.querySelector("#p-name").value);
      setPrice(document.querySelector("#price").value);
      setQuantity(document.querySelector("#quan").value);
      setType(document.querySelector("#type").value);
  }
  return (
    <div style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <span className="title">Sell Products</span>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ height: "70vh", width: "vw", marginTop: "30px" }}
      >
        <Container
          sx={{
            bgcolor: "#D9D9D9;",
            height: "100%",
            width: "60vw",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <React.Fragment>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Fab component="span">
          <ArrowBackOutlinedIcon />
        </Fab>
        <Fab component="span">
          <ArrowForwardOutlinedIcon />
        </Fab>
      </Stack>
      <TextField
        id="p-name"
        label="Product Name"
        variant="filled"
        color="success"
        value={name}
        onChange={handleAllChange}
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <TextField
        id="price"
        label="Price"
        variant="filled"
        color="success"
        onChange={handleAllChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">₹</InputAdornment>,
        }}
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <TextField
        id="quan"
        onChange={handleAllChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        label="Quantity"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <TextField
        id="type"
        label="Type"
        variant="filled"
        onChange={handleAllChange}
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        display="flex"
        justifyContent="center"
      >
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }}>
          Add Item
        </Button>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }}>
          Delete Item
        </Button>
      </Stack>
    </React.Fragment>
        </Container>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>{setOpen(false)}}
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogTitle>CONFIRM?</DialogTitle>
        <DialogContent>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>{price}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Quantity</TableCell>
            <TableCell>{quantity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>{type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} rowSpan={2}>
          <img
              src={file}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "50px",
              }}
            /></TableCell>
          </TableRow>
           </TableBody>
           </Table>
          </TableContainer>
            
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
          <Button >CONFIRM</Button>
        </DialogActions>
      </Dialog>
        <Container
          disableGutters={true}
          sx={{
            bgcolor: "#ffff",
            height: "100%",
            width: "40vw",
            borderRadius: "50px",
            paddingLeft: "0px",
            paddingRight: "0px",
            display: "flex",
            justifyItems: "center",
          }}
        >
          {!isUploaded && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <input
                type="file"
                id="imgUp"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <label
                htmlFor="imgUp"
                style={{ width: "fit-content", height: "fit-content" }}
              >
                <Fab component="span">
                  <FileUploadOutlinedIcon />
                </Fab>
                <br />
                <br />
              </label>
              <Typography>Upload Image</Typography>
            </div>
          )}
          {isUploaded && (
            <img
              src={file}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "50px",
              }}
            />
          )}
        </Container>
      </Stack>
      <Box textAlign="center" padding={"20px"}>
        <Button onClick={()=>{setOpen(true)}} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default PageM6;
