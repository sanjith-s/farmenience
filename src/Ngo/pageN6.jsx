import React from "react";
import '../css/pageN6.css';
import Swal from 'sweetalert2'
import farmImg from "../images/farm_land.jpg";
import { Container, Button, Box, Stack, Divider,Typography } from "@mui/material";
import Request from "../RequestsDetails";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from '../constants';


function PageN6() {
  const [listOfRequests, setListOfRequests] = useState([
    {
      _id: 34,
      date: "22/2/2023",
      time: "03:00AM",
      reason: "Discuss about funding",
      details: "Red Soil land",
      crops: "rice,wheat",
      status: "Good"
    }
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/getmeet`, { headers: { tokenstring: token } }).
      then((response) => {
        setListOfRequests(response.data.message);
        console.log(response.data.message)
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

  return (
    <div id="google_translate_element">
      <br />
      <Typography className="total-req-count" fontWeight="700" fontSize="2.5rem" sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}> You Have {listOfRequests.length} Requests</Typography>
      {listOfRequests.map((request, index) => {
        return (
          <>
            <Stack className="gx-d-flex justify-content-center"
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={0}
              sx={{ height: "70vh", width: "vw", marginTop: "1.25rem" }}
              onClick={(e) => {
                fullAnotherSpeak(e.target.innerText)
              }}
            >
              <Container
                sx={{
                  // bgcolor: "#D9D9D9;",
                  height: "100%",
                  width: "60vw",
                  borderRadius: "3.125rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Request
                  reqId={request._id}
                  meetDate={request.date}
                  meetTime={request.time}
                  meetReason={request.reason}
                  soilDetails={request.details}
                  cropsGrowing={request.crops}
                  itemQuantity={request._id}
                  status={request.status}
                  newDate={request.requestdate}
                  newTime={request.requesttime}
                  imageLink={request.filename}
                />
              </Container>
              <Container
                disableGutters={true}
                sx={{
                  bgcolor: "#ffff",
                  height: "80%",
                  width: "30vw",
                  borderRadius: "3.125rem",
                  paddingLeft: "0rem",
                  paddingRight: "0rem",
                  display: "flex",
                  marginTop: "1.875rem",
                  justifyItems: "center",
                }}
              >
                <img
                  src={request.filename}
                  alt="!!!! No image uploaded !!!!"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "3.125rem",
                  }}
                />
              </Container>
            </Stack>
            <hr />
          </>
        );
      })}

      <Box textAlign="center" padding={"1.25rem"}>
        <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                    backgroundColor:"#ffff00",
                  } }}>
          Home Page
        </Button>
      </Box>
    </div>
  );
}

export default PageN6;