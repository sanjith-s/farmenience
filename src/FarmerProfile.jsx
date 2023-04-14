import React, { useState, useEffect } from "react";
import Details from "./components/FarmerProfileComp";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import { baseURL } from '../src/constants';
import Cookies from 'js-cookie';
import Axios from "axios";
import Swal from 'sweetalert2';

const content = [
  {
    Name: "Tom",
    Aadhaar: "123456789000",
    Phone: "9999999999",
    Address1: "Hostel",
    Address2: "CEG",
    Citytown: "Chennai",
    District: "Chennai",
    State: "Tamilnadu",
    Pincode: "600000",
    Email: "tom@gmail.com",
    CropsGrown: "Maize, Rice, Wheat",
    Skills: "Ploughing, Harvesting"
  },
];

const FarmerProfile = () => {

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

  const [data, setData] = useState([]);

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
    <Box id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "35px",
      }}
    >
      <Typography
        id="title"
        style={{
          textAlign: "center",
          fontWeight: "600px",
          fontSize: "45px",
          marginBottom: "20px",
          justifyItems: "space-between"
        }}
      >
        Welcome Farmer
      </Typography>
      <Grid className="gx-d-flex justify-content-center" container spacing={18} >
        <Grid container item xs={6} direction="column" >

          <Box>
            <Details
              name={data.name}
              aadhaar={data.aadhaarno}
              phone={data.phoneno}
              address1={data.addline1}
              address2={data.addline2}
              citytown={data.city}
              district={data.district}
              state={data.state}
              pincode={data.pincode}
              email={data.email}
            />
          </Box>

        </Grid>
        <Grid container item xs={6} direction="column" >
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s"
            sx={{ width: "200px", height: "200px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FarmerProfile;