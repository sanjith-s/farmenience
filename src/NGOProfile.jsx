import React, { useState, useEffect } from "react";
import Details from "./components/NGOProfileComp";
import { useNavigate } from "react-router-dom/dist";
import { Avatar, Typography, Box, Grid, Paper, TextField, Divider } from '@material-ui/core';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Email, Phone, LocationOn, Home, PinDrop, PermIdentity, Fingerprint, AccountBalance } from '@material-ui/icons';
import "./css/styleProfile.css";
import { Stack } from '@mui/material';
import { baseURL } from '../src/constants';
import Cookies from 'js-cookie';
import Axios from "axios";
import Swal from 'sweetalert2';

const c = {
  Name: "Universal Versatile Society (UVS)",
  Aadhaar: "123456789000",
  Phone: "9129942399",
  Address1: "78/9 Nehru Street",
  Address2: "West Tambaram",
  Citytown: "Tambaram",
  District: "Chennai",
  State: "Tamilnadu",
  Pincode: "600000",
  Email: "ngoemaileg@gmail.com",
};



const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
    boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
  }
}))

function ProfilePage({ name, email, phoneNumber, line1, line2, district, city, state, pincode, aadharNumber, profilePicture }) {
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

  const classes = useStyles();
  const navigate = useNavigate();
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
          Cookies.remove('token');
          localStorage.removeItem("auth");
          localStorage.removeItem("role");
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
  return (
    <div className='backProfile' style={{
      background: "linear-gradient(-4deg,white 0%,white 50%,#ffea93 50%,#ffdb4a 100%)",
      height: "max-content"
    }}>
      <div className='profileBox' style={{
        width: "70%",
        // height:"120%",
        background: "linear-gradient(176deg,#FFD93D 0%,white 70%,white 100%)"
      }}>
        <Stack direction={"column"} spacing={1}
          sx={{
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative", bottom: "7%"
          }}
        >
          <Box
            sx={{
              display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%", height: "max-content"
            }}>
            <Stack sx={{
              display: "flex", alignItems: "center", justifyContent: "center", width: "15%"
            }}>
              <Typography variant='h6'></Typography>
              <Typography variant='subtitle1'></Typography>
            </Stack>
            <Avatar className={classes.avatar} src={profilePicture} alt={name} />
            <Button color="error" variant="contained" sx={{ width: "15%" }} onClick={logout}>Logout</Button>
          </Box>
          <Typography variant='h4'>{name}</Typography>
          <Typography variant='subtitle1'>An NGO</Typography>
          <Box sx={{
            boxShadow: "0rem 0rem 0.625rem lightgrey", margin: "20%", padding: "2%",
            borderRadius: "0.625rem 0.938rem", marginBottom: "5%", width: "35%"
          }}>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <Email />
                <Typography>{email}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Phone />
                <Typography>{phoneNumber}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <LocationOn />
                <Typography>{city}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Fingerprint />
                <Typography>{aadharNumber}</Typography>
              </Stack>
            </Stack>
          </Box>
          <Box className='fitem1' sx={{
            boxShadow: "0rem 0rem 0.625rem lightgrey",
            margin: "5%", padding: "2%", paddingTop: "1%",
            borderRadius: "0.625rem 0.938rem", marginBottom: "5%", width: "35%"
          }}>
            <Stack sx={{ margin: "2%" }} divider={<Divider orientation="horizontal" flexItem />} spacing={1} >
              <Stack direction={"row"} spacing={1}><AccountBalance /><Typography>Address</Typography></Stack>
              <Stack sx={{ padding: "1%" }} spacing={1}>
                <Typography>{line1}</Typography>
                <Typography>{line2}</Typography>
                <Typography>{city}</Typography>
                <Typography>{district} - {pincode}</Typography>
                <Typography>{state}</Typography>
              </Stack>
            </Stack>
          </Box>

        </Stack>
      </div>
    </div>
  );
}


export default function () {
  const navigate = useNavigate();
  const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s";

  const [data, setData] = useState({});

  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/profile`, { headers: { tokenstring: token } }).
      then((response) => {
        setData(response.data.message);
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

  return (
    <>
      <ProfilePage name={data.name} email={data.email} phoneNumber={data.phoneno} city={data.city} line1={data.addline1} line2={data.addline2} district={data.district} state={data.state} pincode={data.pincode} aadharNumber={data.aadhaarno} profilePicture={src} />
    </>
  )
}