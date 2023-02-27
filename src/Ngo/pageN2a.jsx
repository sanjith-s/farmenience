import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import QueryDetails from "../components/queryDetails";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState, useRef } from "react";
import Cookies from 'js-cookie';
import Axios from "axios";

const PageN2 = () => {
  const [file, setFile] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const id = 3;
  const oldQuery = [
    {
      subject:"Query 1",
      description:"Query description here",
      timedate:"22/2/2023"
    }
  ];
  const [query, setQuery] = useState({});
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
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

  const handleClose6 = () => {
    setOpen6(false);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get(`http://localhost:5000/getquery/${id}`, { headers: { tokenstring: token } }).
      then((response) => {
        setQuery(response.data.message);
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          setOpen1(true);
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          setOpen2(true);
          navigate('../login')
        }
      })
    console.log(query);
  }, []);
  const [subject, setSubject] = useState(query.subject);
  const [desc, setDesc] = useState(query.description);
  const DeleteQuery = () => {
    let token = Cookies.get('token');
    Axios.delete(`http://localhost:5000/acceptquery/${id}`, { headers: { tokenstring: token } }).
      then((response) => {
        console.log(response);
        if (response.data.message === 'Query You Accepted Successfully') {
          setOpen3(true);
          navigate('../N1');
        }
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          setOpen1(true);
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          alert(res.response.data.message);
          navigate('../login')
        }
      })
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const NotHappy = () => {
    let token = Cookies.get('token');
    Axios.put('http://localhost:5000/againpostquery', {
      subject: subject,
      description: desc,
      id: id
    }, { headers: { tokenstring: token } }).
      then((response) => {
        console.log(response);
        if (response.data.message === 'Query Attached Successfully') {
          setOpen4(true);
          navigate('../N1');
        }
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          setOpen1(true);
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          setOpen2(true);
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
      <center><b><span className="title">Query Details</span></b></center>
      <Stack
        sx={{ height: "70vh", width: "vw", marginTop: "30px" }}
      >
        <Container
          sx={{
            bgcolor: "#D9D9D9;",
            height: "auto",
            width: "60vw",
            borderRadius: "50px",
            display: "flex",
            flex: "100%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "55px"
            // overflow: "auto"
          }}
        >
          <QueryDetails query={query} />
        </Container>
      </Stack>
      {
        query.status === 'Pending' ?
          <Box textAlign="center" padding={"350px 250px 50px 250px"}>
            <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
              Home Page
            </Button>
          </Box>
          :
          <Box textAlign="center" padding={"350px 250px 50px 250px"}>
            <Button variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }} onClick={DeleteQuery}>
              Accept
            </Button>
            <br /><br />
            <Button variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }} onClick={handleClickOpen}>
              Not Happy with Reply?
            </Button>
            <br></br>
            <br></br>
            <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
              Home Page
            </Button>
          </Box>
      }
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Attach query</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter subject and descrpition
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="Subject"
            fullWidth
            variant="standard"
            onChange={(e) => { setSubject(e.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="Description"
            fullWidth
            variant="standard"
            onChange={(e) => { setDesc(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={NotHappy}>Attach</Button>
        </DialogActions>
      </Dialog>
      {
        oldQuery.map((val) => {
          return (
            <>
              {val.subject}
              <br></br>
              {val.description}
              <br></br>
              {val.timedate}
            </>
          )
        })
      }

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Please check network connection !
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
          Login Error
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
          Deleted Successfully
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
          Query Attached Successfully
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose4}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PageN2;
