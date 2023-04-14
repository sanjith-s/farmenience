import React from "react";
import Swal from 'sweetalert2';
import { Container, Button, Stack, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import QueryDetails from "../components/queryDetails";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Axios from "axios";
import { baseURL } from '../constants';

const PageN2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;
  const oldQuery = location.state.oldQuery;
  const data = location.state.data;
  const [query, setQuery] = useState({});
  const [open, setOpen] = useState(false);

  const [subject, setSubject] = useState(query.subject);
  const [desc, setDesc] = useState(query.description);

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  // }

  // const fullAnotherSpeak = (text) => {
  //   responsiveVoice.speak(text, "Tamil Male");
  // }

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
  //   document.body.appendChild(addScript);
  // }, []);

  const DeleteQuery = async () => {
    let token = Cookies.get('token');
    await Axios.delete(`${baseURL}/deletequery/${id}`, { headers: { tokenstring: token } }).
      then(async (response) => {
        console.log(response);
        if (response.data.message === 'Deleted Successfully') {
          await Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'Accepted Successfully !',
          })
          navigate('../N1');
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
      })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const NotHappy = async () => {
    let token = Cookies.get('token');
    await Axios.put(`${baseURL}/againpostquery`, {
      subject: subject,
      description: desc,
      id: id
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        console.log(response);
        if (response.data.message === 'Query Attached Successfully') {
          await Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'Query attached successfully !',
          })
          navigate('../N1');
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
    <div id="google_translate_element" style={{ boxSizing: "borderBox" }} onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}>
      <Stack className="gx-d-flex justify-content-center">
        <Container>
          <QueryDetails query={data} prev={oldQuery} delQuery={DeleteQuery} handleNotHappy={handleClickOpen} />
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