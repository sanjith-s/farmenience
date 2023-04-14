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

const ResetEnterNewPassword = () => {
    const navigate = useNavigate();

    const [pass, setPass] = useState("");
    const [confpass, setConfpass] = useState("");
    const [enableButton, setEnableButton] = useState(false)
    const [color, setColor] = useState('primary')

    const handlePasswordChange = (e) => {
        let password = e.target.value

        if(password == pass) {
            setColor('success')
            setEnableButton(true);
        } else {
            setColor('error')
        }

        setConfpass(password)
    }
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
                email: "",
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
        <div style={{ boxSizing: "borderBox", padding: "1.25rem" }}>
            <CssBaseline />
            <span className="title">Forget Password</span>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{ height: "70vh", width: "vw", marginTop: "1.875rem" }}
            >
                <Container
                    sx={{
                        bgcolor: "#D9D9D9;",
                        height: "100%",
                        width: "60vw",
                        borderRadius: "3.125rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <React.Fragment>
                        <TextField
                            id="pass"
                            label="New Password"
                            variant="filled"
                            type="password"
                            color={color}
                            InputProps={{
                                maxLength: 6,
                                minLength: 1
                            }}
                            sx={{
                                backgroundColor: "#C4E1C5",
                                borderBottomColor: "black",
                                width: "70%",
                            }}
                            onChange={(e) => { setPass(e.target.value) }}
                        />

                        <TextField
                            id="confpass"
                            label="Reenter New Password"
                            variant="filled"
                            color={color}
                            type="password"
                            InputProps={{
                                maxLength: 6,
                                minLength: 1
                            }}
                            sx={{
                                backgroundColor: "#C4E1C5",
                                borderBottomColor: "black",
                                width: "70%",
                            }}
                            onChange={handlePasswordChange}
                        />

                        <Box textAlign="center" padding={"1.25rem"}>
                            <Button variant="contained" sx={{ bgcolor: "#1FE57A" }} onClick={postPass} disabled={!enableButton}>
                                Submit
                            </Button>
                        </Box>
                    </React.Fragment>
                </Container>

                {/* <Dialog
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
                    <TableCell>Query Subject</TableCell>
                    <TableCell>{subject}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>{desc}</TableCell>
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
            <Button onClick={postQuery}>CONFIRM</Button>
          </DialogActions>
        </Dialog> */}
            </Stack>

            <Box textAlign="center" padding={"1.25rem"}>
                <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
                    Home Page
                </Button>
            </Box>

        </div>
    );
};

export default ResetEnterNewPassword;
