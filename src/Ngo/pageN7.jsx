import React from "react";
import '../css/pageN7.css';
import Swal from 'sweetalert2';
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Slide, Fab, Button, Box, TextField, InputAdornment, Stack, Divider, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { baseURL } from '../constants';

const PageN7 = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const [isUploaded, setIsUploaded] = useState(false);

  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");

  const validate = async () => {
    if (subject.length >= 1 && subject.length <= 50 && desc.length >= 1 && desc.length <= 500) {
      await Swal.fire({
        icon: 'info',
        title: 'Please confirm the details ...',
        html: "<b>Query Subject: </b> " + subject + "<br /><br />" + "<b>Description: </b>" + desc,
        imageUrl: file,
        confirmButtonText: 'Confirm'
      }).then((result) => {
        if (result.isConfirmed) {
          postQuery();
        }
      })
    } else {
      await Swal.fire({
        icon: 'info',
        title: 'Please Note ...',
        html: "1. Subject should be of minimum length 1 and maximum length 50" + "<br></br>" + "2. Description should be of minimum length 1 and maximum length 500",
      })
    }
  }

  const postQuery = async () => {
    let token = Cookies.get('token');
    await Axios.post(`${baseURL}/postquery`, {
      subject: subject,
      description: desc
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        console.log(response);
        if (response.data.messager === 'Query Added Successfully') {
          await Swal.fire({
            icon: 'success',
            title: 'Query Added Successfully !!',
          })
        }
        navigate('../N1');
      })
      .catch(async (res) => {
        console.log(res);
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

  return (
    <div style={{ boxSizing: "borderBox", padding: "1.25rem" }}>
      <CssBaseline />
      <Typography
            variant="h3"
            style={{
              textAlign: "center",
            }}
          >
            Send Query
          </Typography>
      <Box align="center"
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        // spacing={2}
        sx={{ height: "70vh", width: "vw", marginTop: "1.875rem" }}
      >
        <Box align="center"
          sx={{
            bgcolor: "#b8ebab;",
            // height: "100%",
            width: "45vw",
            borderRadius: "3.125rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:"5",
            padding:"30px"
          }}
        >
          <React.Fragment>
            <TextField
              id="filled-basic"
              label="Query Subject"
              variant="filled"
              color="success"
              InputProps={{
                maxLength: 50,
                minLength: 1
              }}
              sx={{
                backgroundColor: "#ffff",
                borderBottomColor: "black",
                width: "70%",
                marginBottom:"20px"
              }}
              onChange={(e) => { setSubject(e.target.value) }}
            />
            <TextField
              id="filled-basic"
              multiline
              minRows={5}
              label="Description"
              variant="filled"
              color="success"
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
                maxLength: 1000,
                minLength: 1
              }}
              sx={{
                backgroundColor: "#ffff",
                borderBottomColor: "black",
                width: "70%",
              }}
              onChange={(e) => { setDesc(e.target.value) }}
            />
            
          </React.Fragment>
        </Box>

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
{/* 
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
                borderRadius: "3.125rem",
              }}
            />
          )}
        </Container> */}
        <Button variant="contained" sx={{ bgcolor: "#1FE57A", marginTop:"5%   " }} onClick={validate}>
                Submit
              </Button>
      </Box>

      

    </div>
  );
};

export default PageN7;