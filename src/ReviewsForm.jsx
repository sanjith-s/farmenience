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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobno, setMobno] = useState("");
    const [review, setReview] = useState("");

    const handleAllChange = () => {
        setName(document.querySelector("#p-name").value);
        setEmail(document.querySelector("#emailadd").value);
        if (document.querySelector("#mobno").value.length == 10)
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
                if (response.data.message === 'Review added !!') {
                    await Swal.fire({
                        icon: 'success',
                        title: 'Meet Added !!',
                        text: 'Waiting for NGO Reply',
                    })
                    navigate('../homepage1');
                }
            })
            .catch(async (res) => {
                console.log(res);
                if (res.response.data.message === 'Error in Connection') {
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
        <div style={{ boxSizing: "borderBox", padding: "1.25rem" }}>
            <Container
                spacing={2}
                sx={{
                    display: "flex",
                    height: "100vh",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: {
                        xs: 100,
                        sm: 400, 
                        md: 700, 
                        lg: 1000,
                        xl: 1300
                    }
                }}
            >
                <Typography variant="h2" fontWeight={600}>Review Form</Typography>
                <Stack
                    sx={{
                        boxShadow:10,
                        bgcolor: "#96F0FF;",
                        borderRadius: "10px",
                        padding: "4%",
                        width: "700px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    spacing={2}
                >
                    
                    <React.Fragment>
                        <TextField
                            id="p-name"
                            label="Name"
                            variant="filled"
                            
                            value={name}
                            onChange={handleAllChange}
                            sx={{
                                backgroundColor: "#f5F5F5",
                                borderBottomColor: "black",
                                width: "90%",
                                
                            }}
                            inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5"} }} 
                            InputLabelProps={{ style: { fontSize: 15 } }}
                        />
                        <TextField
                            id="emailadd"
                            type="email"
                            label="Email"
                            variant="filled"
                            
                            onChange={handleAllChange}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                borderBottomColor: "black",
                                width: "90%",
                            }}
                        />
                        <TextField
                            id="mobno"
                            type="tel"
                            onChange={handleAllChange}
                            label="Mobile Number"
                            variant="filled"
                            
                            inputProps={{
                                maxLength: 10
                            }}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                borderBottomColor: "black",
                                width: "90%",
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
                            
                            sx={{
                                backgroundColor: "#F5F5F5",
                                borderBottomColor: "black",
                                width: "90%",
                            }}
                            inputProps={{
                                minLength: 1,
                                maxLength: 200
                            }}
                        />

                    </React.Fragment>
                    <Button  mt = {5} onClick={() => { setOpen(true) }} variant="contained" 
                    sx={{ bgcolor: "BLUE", width: "90px",}}>
                        Submit
                        {/* When adding fn for submit, write price range as greater than 1 and less than 2000 */}
                        {/* When adding fn for submit, write quantity range as greater than 1 and less than 20 */}
                        {/* When adding fn for submit, write type as fruit or vegetable or grain or millet */}
                    </Button>
                </Stack>

            </Container>
            {/* {count.map(ele=>{
              return (  */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => { setOpen(false) }}
                aria-describedby="alert-dialog-slide-description"
                boxShadow = {5}
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
                    <Button onClick={async () => { setOpen(false); postReview(); }}>CONFIRM</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default ReviewsForm;
