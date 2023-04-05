import React from "react";
import Cookies from 'js-cookie';
import { useState, useRef } from "react";
import Axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Swal from 'sweetalert2';
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
import { baseURL } from '../src/constants';

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const ReviewsForm = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState([0]);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobno, setMobno] = useState();
    const [review, setReview] = useState();

    const handleAllChange = () => {
        setName(document.querySelector("#p-name").value);
        setEmail(document.querySelector("#emailadd").value);
        if(document.querySelector("#mobno").value.length == 10)
            setMobno(document.querySelector("#mobno").value);
        setReview(document.querySelector("#review").value);
    }

    const postReview = async () => {
        let token = Cookies.get('token');

        await Axios.post(`${baseURL}/review`, {
          name: name,
          email: email,
          phonenum: mobno,
          review: review,
        }, { headers: { tokenstring: token } }).
          then(async (response) => {
            console.log(response);
            if (response.data.message === 'Review Added !!') {
              await Swal.fire({
                icon: 'success',
                title: 'Meet Added !!',
                text: 'Waiting for NGO Reply',
              })
              navigate('../homepage1');
            }
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
            else {
              await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.response.data.message,
              })
            }
          })
      }

    return (
        <div style={{ boxSizing: "borderBox", padding: "20px" }}>
            <CssBaseline />
            <span className="title">Review</span>
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
                        <TextField
                            id="p-name"
                            label="Name"
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
                            id="emailadd"
                            type="email"
                            label="Email"
                            variant="filled"
                            color="success"
                            onChange={handleAllChange}
                            sx={{
                                backgroundColor: "#C4E1C5",
                                borderBottomColor: "black",
                                width: "70%",
                            }}
                        />
                        <TextField
                            id="mobno"
                            type="tel"
                            onChange={handleAllChange}
                            label="Mobile Number"
                            variant="filled"
                            color="success"
                            inputProps={{
                                maxLength: 10
                            }}
                            sx={{
                                backgroundColor: "#C4E1C5",
                                borderBottomColor: "black",
                                width: "70%",
                            }}
                        />
                        <TextField
                            id="review"
                            type="textfield"
                            label="Review"
                            variant="filled"
                            multiline
                            rows={5}
                            onChange={handleAllChange}
                            color="success"
                            sx={{
                                backgroundColor: "#C4E1C5",
                                borderBottomColor: "black",
                                width: "70%",
                            }}
                            inputProps={{
                                minLength: 1,
                                maxLength: 200
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
                                        <TableCell>Name</TableCell>
                                        <TableCell>{name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Email Address</TableCell>
                                        <TableCell>{email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Mobile Number</TableCell>
                                        <TableCell>{mobno}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Review</TableCell>
                                        <TableCell>{review}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { setOpen(false); }}>Cancel</Button>
                        <Button onClick={async () => { postReview(); }}>CONFIRM</Button>
                    </DialogActions>
                </Dialog>
            </Stack>
            {/* {count.map(ele=>{
              return (  */}
            <Box textAlign="center" padding={"20px"}>
                <Button onClick={() => { setOpen(true) }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
                    Submit
                    {/* When adding fn for submit, write price range as greater than 1 and less than 2000 */}
                    {/* When adding fn for submit, write quantity range as greater than 1 and less than 20 */}
                    {/* When adding fn for submit, write type as fruit or vegetable or grain or millet */}
                </Button>
            </Box>
        </div>
    );
};

export default ReviewsForm;