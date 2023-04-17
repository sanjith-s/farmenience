import React from "react";
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
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
import { baseURL } from "../constants";
import Axios from "axios";

const PageM6 = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState({});
  const [open, setOpen] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [count, setCount] = useState([0]);

  const addItem = () => {
    var an = count;
    setCount([...an, 0]);
  }

  const delItem = () => {
    var an = count;
    an.pop();
    setCount([...an]);
  }

  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.files[0]);  
  }
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');

  const handleAllChange = () => {
    setName(document.querySelector("#p-name").value);
    setPrice(document.querySelector("#price").value);
    setQuantity(document.querySelector("#quan").value);
    setType(document.querySelector("#type").value);
    setRating(document.querySelector("#rating").value);
  }

  const Reset = () => {
    setName("");
    setPrice("");
    setQuantity("");
    setType("");
    setRating("");
    setFile();
  }

  const handleSubmit = async () => {
    let token = Cookies.get('token');
    let filename='';
    let formData = new FormData();
    formData.append('caption', "hello");
    formData.append('file', fileName);
    console.log(Array.from(formData.entries()))
    await Axios.post(`${baseURL}/upload`, formData)
      .then(async (response) => {
        console.log(response);
        filename=response.data.message;
      })
      .catch(async (res) => {
        alert(res.response.data.message);
      })

      alert(filename);
      
    await Axios.post(`${baseURL}/seller/postsellerproducts`, {
      productName: name,
      price: price,
      quantity: quantity,
      type: type,
      rating: rating,
      filename: filename,
      sellerName: "",
      sellerEmail: ""
    }, { headers: { tokenstring: token } })
      .then(async (res) => {
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
    <div style={{ boxSizing: "borderBox", padding: "1.25rem" }}>
      <CssBaseline />

      <Typography fontWeight={700} fontSize={50} sx={{
        alignItems: "center",
        marginLeft: "37.5rem"
      }}>Sell Products</Typography>
      {count.map(ele => {
        return (
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ height: "auto", width: "auto", marginTop: "1.875rem", padding: "3.125rem" }}
          >
            <Container
              sx={{
                // bgcolor: "#D9D9D9;",
                height: "100%",
                width: "60vw",
                borderRadius: "3.125rem",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <React.Fragment>
                {/* <Box

            sx={{
              overflow: "auto",
              padding:"2%",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignContent:"center"
            }}
          > */}

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
                  inputProps={{
                    minLength: 1,
                    maxLength: 25
                  }}
                />
                <TextField
                  id="price"
                  type="number"
                  label="Price"
                  value={price}
                  variant="filled"
                  color="success"
                  onChange={handleAllChange}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">₹</InputAdornment>,
                    min: 1,
                    max: 200
                  }}
                  sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                  }}
                />
                <TextField
                  id="quan"
                  type="number"
                  onChange={handleAllChange}
                  value={quantity}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    min: 1,
                    max: 10
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
                  value={type}
                  onChange={handleAllChange}
                  color="success"
                  sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                  }}
                  inputProps={{
                    minLength: 1,
                    maxLength: 20
                  }}
                />
                <TextField
                  id="rating"
                  label="Rating"
                  variant="filled"
                  type="number"
                  value={rating}
                  onChange={handleAllChange}
                  color="success"
                  sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                  }}
                  inputProps={{
                    minLength: 1,
                    maxLength: 5
                  }}
                />

              </React.Fragment>
            </Container>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => { setOpen(false) }}
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
                              borderRadius: "3.125rem",
                            }}
                          /></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

              </DialogContent>
              <DialogActions>
                <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                <Button >CONFIRM</Button>
              </DialogActions>
            </Dialog>
            <Container
              disableGutters={true}
              sx={{
                bgcolor: "#ffff",

                height: "100%",
                width: "40vw",
                borderRadius: "3.125rem",
                paddingLeft: "0rem",
                paddingRight: "0rem",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "5.625rem"
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
                    borderRadius: "3.125rem",
                  }}
                />
              )}
            </Container>
          </Stack>
        )
      })}
      {/* {count.map(ele=>{
              return (  */}
      
        {/* <Button variant="contained" onClick={addItem} sx={{ bgcolor: "#78beff", "&:hover": { backgroundColor: "#78beff", } }}>
          Add Item
        </Button> */}
        {/* <Button variant="contained" onClick={delItem} sx={{ bgcolor: "#fa552f", "&:hover": { backgroundColor: "#fa552f", } }}>
          Delete Item
        </Button> */}
      <Box textAlign="center" padding={"1.25rem"}>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        display="flex"
        justifyContent="center"
      >
        <Button onClick={async () => {
          await Swal.fire({
            icon: 'info',
            title: 'Please confirm the details ...',
            html: "<b>Product Name: </b> " + name + "<br /><br />" + "<b>Price: </b>" + price + "<br /><br />" + "<b>Quantity: </b>" + quantity + "<br /><br />" + "<b>Type: </b>" + type + "<br /><br />" + "<b>Rating: </b>" + rating,
            imageUrl: file,
            confirmButtonText: 'Confirm',
            preConfirm: () => {
              handleSubmit();
              console.log('click');
            }
          })
        }} variant="contained" sx={{ bgcolor: "#7ad14f", margin: "auto", "&:hover": { backgroundColor: "#7ad14f", } }}>
          Submit
          {/* When adding fn for submit, write price range as greater than 1 and less than 2000 */}
          {/* When adding fn for submit, write quantity range as greater than 1 and less than 20 */}
          {/* When adding fn for submit, write type as fruit or vegetable or grain or millet */}
        </Button>
        <Button variant="contained" 
          color="success" onClick={Reset}>
          Reset To Old Values
        </Button><br /><br />
        </Stack>
        </Box>
    </div>
  );
};

export default PageM6;
