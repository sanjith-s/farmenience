import * as React from 'react';
import '../css/pageN9.css';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { Typography, Box, Stack, Avatar, Button, ButtonGroup } from "@mui/material";
import { baseURL } from '../constants';

function PageN9() {

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

  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/profile`, { headers: { tokenstring: token } }).
      then((response) => {
        setProfile(response.data.message);
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
  }, []);

  const logout = async () => {
    let token = Cookies.get('token')
    await Axios.get(`${baseURL}/logout`, { headers: { tokenstring: token } }
    )
      .then(async (response) => {
        if (response.data.message == "Logout Successful") {
          await Swal.fire({
            icon: 'success',
            title: 'Logout Successful'
          })
          Cookies.remove('token')
          navigate('../login');
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Error',
          })
        }
        console.log(response);
      }).
      catch(async (response) => {
        if (response.response.data.message === "Token not found" || response.response.data.message === "Logout Fail, Please Logout Again") {
          await Swal.fire({
            icon: 'warning',
            title: 'Please Login, Before Logout !!',
          })
          navigate('../login');
        }
        if (response.response.data.message === "Invalid token") {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Expired, Please Login Again !!',
          })
          navigate('../login');
        }
      });
  }

  const buttons = [
    <Button onClick={() => {
      navigate('../N1')
    }}>
      View Queries
    </Button>,
    <Button onClick={() => {
      navigate('../N6')
    }}>
      View Appoinments
    </Button>,
    <Button onClick={() => {
      navigate('../N7')
    }}>
      New Query
    </Button>,
    <Button onClick={() => {
      navigate('../N4')
    }}>
      New Appoinment
    </Button>,
    <Button onClick={logout}>LogOut</Button>
  ]

  const characteristics = Object.entries(profile).map((key, i) => {
    return (
      <div key={i}>
        <br></br>
        <span>{key[0]}</span> : <h2>{key[1]}</h2>
        <br></br>
      </div>
    );
  });

  return (
    <>
      <Box id="google_translate_element" onClick={(e) => {
        fullAnotherSpeak(e.target.innerText)
      }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          display: 'flex',
          marginTop: "2%",
          '& > *': {
            m: 1,
          },
        }}
      >
        <Stack direction="column" spacing={2} className="gx-d-flex justify-content-center">
          <Typography variant="h5" component="h1">Your Profile</Typography>
          <Stack direction="row" spacing={3}>
            <Stack direction="column" spacing={1}>
              <Avatar
                alt=""
                src=""
                sx={{ width: "134px", height: "134px" }}
              />
              <Stack>
                <Typography variant='h6'>User name</Typography>
                <Typography variant='h7'>Farmer</Typography>
              </Stack>
            </Stack>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
              variant="text"
            >
              {buttons}
            </ButtonGroup>
          </Stack>
        </Stack>
        {
          characteristics
        }
      </Box>
    </>
  );
}

export default PageN9;
