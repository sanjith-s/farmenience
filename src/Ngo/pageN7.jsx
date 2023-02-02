import React from "react";

import { useRef } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
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
import { Alert, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

const PageN7 = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const validate = () => {
    if (subject.length >= 1 && subject.length <= 50 && desc.length >= 1 && desc.length <= 500) {
      setOpen(true);
    } else {
      setOpen2(true);
    }
  }
  const postQuery = () => {
    let token = Cookies.get('token');
    Axios.post('http://localhost:5000/postquery', {
      subject: subject,
      description: desc
    }, { headers: { tokenstring: token } }).
      then((response) => {
        console.log(response);
        if (response.data.message === 'Query Added Successfully') {
          setOpen1(true);
          navigate('../N1');
        }
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          setOpen2(true);
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          setOpen3(true);
          navigate('../login')
        }
        else {
          alert(res.response.data.message);
        }
      })
  }
  return (
    <div style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <span className="title">Query Form</span>
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
              id="filled-basic"
              label="Query Subject"
              variant="filled"
              color="success"
              InputProps={{
                maxLength: 50,
                minLength: 1
              }}
              sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
              }}
              onChange={(e) => { setSubject(e.target.value) }}
            />
            <TextField
              id="filled-basic"
              label="Description"
              variant="filled"
              color="success"
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
                maxLength: 500,
                minLength: 1
              }}
              sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
              }}
              onChange={(e) => { setDesc(e.target.value) }}
            />
            <Box textAlign="center" padding={"20px"}>
              <Button variant="contained" sx={{ bgcolor: "#1FE57A" }} onClick={validate}>
                Submit
              </Button>
            </Box>
          </React.Fragment>
        </Container>
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Please check subject and description"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              1. Subject should be of minimum length 1 and maximum length 50 <br></br>
              2. Description should be of minimum length 1 and maximum length 500
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>
              <Typography
                style={{
                  color: "blue",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Ok
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>
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
                          borderRadius: "50px",
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
        <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
          Home Page
        </Button>
      </Box>

      <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Query Added Successfully
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose3}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Please check network connection
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose4}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open5}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Login Error
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose5}>Ok</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default PageN7;
