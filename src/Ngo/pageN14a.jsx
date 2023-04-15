import React, { useEffect } from "react";
import '../css/pageN14.css';
import Swal from 'sweetalert2'
import { useLocation } from "react-router-dom";
import file from "../images/farm_land.jpg";
import { useNavigate } from "react-router-dom/dist";
import Cookies from 'js-cookie';
import Axios from "axios";
import {
  Grid,
  Box,
  CardContent,
  Stack,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { baseURL } from '../constants';

const PageN14a = () => {

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

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  console.log(data);
  const itemsName1 = [
    "Appointment ID",
    "Appointment Name",
    "Soil Details",
    "Crop Details",
    "Client Name",
    "Date",
    "Time",
    "Location"
  ];

  const itemsValue1 = [
    data.appID,
    data.appName,
    data.reason,
    data.crops,
    data.clientName,
    data.dateTime,
    data.dateTime,
    data.location
  ];

  const DeleteAppointment = async () => {
    await Swal.fire({
      title: 'Do you want to delete the appointment?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Swal.fire({
          icon: 'success',
          title: 'Appointment Deleted!',
        })
      }
    })
  };

  const AcceptAppointment = async () => {
    let token = Cookies.get('token');
    await Axios.patch(`${baseURL}/acceptmeetbyngo/${data.appID}`, {
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        if (response.data.message === 'You Accepted the Meet') {
          await Swal.fire({
            icon: 'success',
            title: 'Appointment Accepted !!'
          })
          navigate('../N13');
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
            text: 'Login Error!',
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

  };

  return (
    <Container style={{ padding: "1.875rem 0rem" }} id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        VIEW APPOINTMENT
      </Typography>
      <Box className="gx-d-flex justify-content-center"
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "0.19rem solid",
          justifyContent: "center",
          rowGap: "1.25rem",
          padding: "1.875rem 1.875rem",
          paddingRight: "0",
          backgroundColor: "#7bff96",
          margin: "1.625rem",
          borderRadius: "0.5rem",
        }}
      >
        <Stack direction={"row"}>
          <Box
            sx={{
              borderRadius: "0.5rem",
              border: "0.25rem solid #000",
              backgroundColor: "#fff",
              width: "100%"
            }}
          >
            <Grid container item xs={12} direction="column">
              <CardContent
                style={{ padding: "0.94rem", borderRadius: "0.5rem" }}
              >
                <Stack>
                  {itemsName1.map((value, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          columnGap: "1.25rem",
                          justifyContent: "space-between",
                          height: "3.125rem",
                          alignItems: "center",
                          margin: "0.125rem 0rem 0 0 0",
                        }}
                      >
                        <Typography
                          style={{
                            fontWeight: "600",
                            fontSize: "1.25rem",
                            textTransform: "uppercase",
                          }}
                        >
                          {value}
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{ textTransform: "capitalize" }}
                        >
                          {itemsValue1[index]}
                        </Typography>
                      </Box>
                    );
                  })}
                </Stack>
              </CardContent>
            </Grid>
          </Box>
          <Box>
            <Stack spacing={2} display="flex" justifyContent={"center"} alignContent="center" alignItems={"center"} >
              <img
                src={data.filename}
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "2%",
                  objectFit: "fill",
                  borderRadius: "3.125rem",
                }}
              /><br />
              <Stack direction={"column"} spacing={4}>
                <Button
                  onClick={DeleteAppointment}
                  variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                    backgroundColor:"#ffff00",
                  } }}
                >
                  DELETE
                </Button>
                <Button
                  onClick={AcceptAppointment}
                  variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                    backgroundColor:"#ffff00",
                  } }}
                >
                  ACCEPT
                </Button>
                <Button
                variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                  backgroundColor:"#ffff00",
                } }}
                  onClick={() => {
                    navigate('../N14b', { state: { id: data.appID, name: data.appName } })
                  }}
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    fontWeight: "600",
                    fontSize: "1.125rem",
                  }}
                >
                  Reschedule
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Box sx={{ display: "flex", columnGap: "3.125rem", padding: "0rem 18.75rem" }}>

        </Box>
      </Box>
    </Container>
  );
};

export default PageN14a;