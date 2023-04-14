import * as React from 'react';
import '../css/pageN10.css';
import Swal from 'sweetalert2';
import AspectRatio from '@mui/joy/AspectRatio';
import { useNavigate } from "react-router-dom/dist";
import "./Pagen10.css";
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { Typography, Grid, Box, Tabs, Tab } from "@mui/material";
import { baseURL } from '../constants';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function N10Props(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const queries = [
  "Fund Request by Farmer jon ...",
  "Land Assistance by Farmer kesan ...",
  "Fund extension requestt by farmer..",
  "Finance Assistance reg..."
]

const Appointments = [
  "Appointment at Kancheepuram ...",
  "Meeting in Koyambedu market ...",
  "Meeting regarding soil problem ...",
]

function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [queries, setQueries] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const AxiosSet = () => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/getqueriesN10`, { headers: { tokenstring: token } }).
      then((response) => {
        setQueries(response.data.message);
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
      });

    Axios.get(`${baseURL}/getmeetsN10`, { headers: { tokenstring: token } }).
      then((response) => {
        setAppointments(response.data.message);
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
      });
  }

  useEffect(() => {
    AxiosSet();
  }, []);


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-head" >
        <Tabs TabIndicatorProps={{ style: { background: '#348467' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<span className='lab-text'>Latest Queries</span>} {...N10Props(0)} />
          <Tab label={<span className='lab-text'>Upcoming Appointments</span>} {...N10Props(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='shower'>
          {queries.map((que, ind) => {
            return (<div className='texts-box'>
              <a className='links' href="/n11">
                <span className='b-text'>{que.description}</span>
              </a>
            </div>)
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='shower'>
          {appointments.map(que => {
            return (<div className='texts-box'>
              <a className='links' href="/n13">
                <span className='b-text'>{que.requestdate}</span>
              </a>

            </div>)
          })}
        </div>
      </TabPanel>
    </Box>
  );
}

function OneBox(props) {
  return (
    <a href={props.link}>
      <AspectRatio
        ratio="4/4"
        className="boxes"
        sx={{
          width: 200,
          padding: "1%",
          background: "radial-gradient(#ADCF9F, #36AE7C)",
          borderRadius: 'md',
          textAlign: "center",
          color: "#276548",
          overflow: "hidden",
          boxShadow: "0.31rem 0.31rem 0.125rem 0.063rem #ADCF9F",
          "&:hover": {
            background: "radial-gradient(#96e0db,#96e0db, #36AE7C)",
            fontSize: "1.44rem",
            border: "0.125rem solid #44b68a",
            borderBottom: "0.25rem solid black",
            borderTop: "15.875 solid black",
            animationPlayState: "paused",
            width: 200
          }
        }}
      >
        <span className='in-text' >
          {props.name}
        </span>
      </AspectRatio>
    </a>
  )
}

const PageN10 = () => {

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  }

  const fullAnotherSpeak = (text) => {
    responsiveVoice.speak(text, "Tamil Male");
  }

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
    document.body.appendChild(addScript);
  }, []);

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

  // function logout() {
  //   let token = Cookies.get('token')
  //   Axios.get('http://localhost:5000/logout', { headers: { tokenstring: token } }
  //   )
  //     .then((response) => {
  //       if (response.data.message == "Logout Successful") {
  //         setOpen3(true);
  //         Cookies.remove('token')
  //         navigate('../login');
  //       }
  //       else {
  //         setOpen4(true);
  //       }
  //       console.log(response);
  //     }).
  //     catch((response) => {
  //       if (response.response.data.message === "Token not found" || response.response.data.message === "Logout Fail, Please Logout Again") {
  //         setOpen5(true);
  //         navigate('../login');
  //       }
  //       if (response.response.data.message === "Invalid token") {
  //         setOpen6(true);
  //         navigate('../login');
  //       }
  //     });
  // }

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

        <div className="gx-d-flex justify-content-center" style={{ padding: "0 4% 0 4%" }}>
          <div style={{ textAlign: "center" }}>
            <h1 className='head-text'>Welcome back, NGO</h1>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
            <Box
              sx={{ width: '100%', border: "" }}
            >
              <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={3} className="box2">
                  <OneBox name={"View Appointments"} link={"/n13"} />
                </Grid>
                <Grid item xs={3} className="box2">
                  <OneBox name={"View Queries"} link={"/n11"} />
                </Grid>
                <Grid item xs={5}>
                  <AspectRatio
                    ratio="3/1"
                    sx={{
                      width: 600,
                      padding: "1%",
                      borderRadius: 'md',
                      textAlign: "center",
                      color: "#276548",
                      overflow: "hidden",
                    }}
                  >
                    <BasicTabs />
                  </AspectRatio>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
}

export default PageN10