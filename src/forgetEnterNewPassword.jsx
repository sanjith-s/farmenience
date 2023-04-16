import React from "react";
// import '../css/pageN7.css';
import Swal from 'sweetalert2';
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Slide, Fab, Button, Box, TextField, InputAdornment, Stack, Divider, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { baseURL } from './constants';

const forgetEnterNewPassword = () => {
    const navigate = useNavigate();

    const [pass, setPass] = useState("");
    const [confpass, setConfpass] = useState("");

    //   const validate = async () => {
    //     if (subject.length >= 1 && subject.length <= 50 && desc.length >= 1 && desc.length <= 500) {
    //       await Swal.fire({
    //         icon: 'info',
    //         title: 'Please confirm the details ...',
    //         html: "<b>Query Subject: </b> " + subject + "<br /><br />" + "<b>Description: </b>" + desc,
    //         imageUrl: file,
    //         confirmButtonText: 'Confirm'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           postQuery();
    //         }
    //       })
    //     } else {
    //       await Swal.fire({
    //         icon: 'info',
    //         title: 'Please Note ...',
    //         html: "1. Subject should be of minimum length 1 and maximum length 50" + "<br></br>" + "2. Description should be of minimum length 1 and maximum length 500",
    //       })
    //     }
    //   }

    // const handleChange = () => {
    //     setEmail(document.querySelector("#em").value);
    // }

    const postPass = async () => {
        let token = Cookies.get('token');
        // localStorage.set('Email', email);
        if (pass === confpass) {
            await Axios.post(`${baseURL}/resetpass`, {
                password: pass,
            }, { headers: { tokenstring: token } }).
                then(async (response) => {
                    console.log(response);
                    if (response.data.message === 'Password Save successful') {
                        await Swal.fire({
                            icon: 'success',
                            title: 'Password Updated Successfully !!',
                        })
                    }
                    navigate('./resetEnterNewPassword')
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
                        alert(res.response.data.message);
                    }
                })
        }
    }

    return (
        <div div style = {{ boxSizing: "borderBox", padding: "1.25rem" }}>
        <CssBaseline />
        <Box
            spacing={2}
            sx={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "space-around", flexDirection: "column" }}
        >
            <Typography variant="h3" style={{ margin: "auto" }}>Forget Password</Typography>
            <Divider orientation="horizontal" flexItem  />
            <Container
                sx={{
                    bgcolor: "#D9D9D9;",
                    borderRadius: "10px 15px",
                    width: "60%",
                    margin: "auto",
                    padding: "1% 2%"
                }}
            >
                <React.Fragment>
                    <TextField
                        id="pass"
                        label="Enter new Passowrd"
                        type="password"
                        variant="filled"
                        color="success"
                        InputProps={{
                            maxLength: 50,
                            minLength: 1
                        }}
                        sx={{
                            backgroundColor: "#bde3e5",
                            borderBottomColor: "black",
                            marginBottom:"1%",
                            width: "100%"
                        }}
                        onChange={(e) => { setPass(e.target.value) }}
                    />
                    <TextField
                        id="conpass"
                        label="Confirm Password"
                        type="password"
                        variant="filled"
                        color="success"
                        InputProps={{
                            maxLength: 50,
                            minLength: 1
                        }}
                        sx={{
                            backgroundColor: "#bde3e5",
                            borderBottomColor: "black",
                            width: "100%"
                        }}
                        onChange={(e) => { setConfpass(e.target.value) }}
                    />

                    <Box sx={{display:"flex", padding:"1.2rem", justifyContent:"space-evenly",width:"100%"}}>
                        <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#138ac5"}}>
                           Back to HomePage
                        </Button>
                        <Button variant="contained" sx={{ bgcolor: "#138ac5" }} onClick={postPass}>
                            Submit
                        </Button>
                    </Box>
                </React.Fragment>
            </Container>
            </Box>
            </div >
    );
};

export default forgetEnterNewPassword;
