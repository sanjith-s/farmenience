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
  const id = location.state.id;
  const oldQuery = location.state.oldQuery;
  const [query, setQuery] = useState({});
  const [open, setOpen] = useState(false);
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
          alert('Please Check Network');
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          alert('Login error');
          navigate('../login')
        }
      })
    console.log(query);
  }, []);
  const [subject, setSubject] = useState(query.subject);
  const [desc, setDesc] = useState(query.description);
  const DeleteQuery = () => {
    let token = Cookies.get('token');
    Axios.delete(`http://localhost:5000/deletequery/${id}`, { headers: { tokenstring: token } }).
      then((response) => {
        console.log(response);
        if (response.data.message === 'Deleted Successfully') {
          alert('Accepted Successfully');
          navigate('../N1');
        }
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          alert('Please Check Network');
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
          alert('Query Attached Successfully');
          navigate('../N1');
        }
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          alert('Please Check Network');
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          alert('Login error');
          navigate('../login')
        }
        else {
          alert(res.response.data.message);
        }
      })
  }
  return (
    <div style={{ boxSizing: "borderBox" }}>
      <Stack>
        <Container>
          <QueryDetails query={query} prev={oldQuery} delQuery={DeleteQuery} handleNotHappy={handleClickOpen} />
        </Container>
      </Stack>
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
    </div>
  );
};

export default PageN2;