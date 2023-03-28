import * as React from 'react';
import '../css/pageN10.css';
import Swal from 'sweetalert2';
import AspectRatio from '@mui/joy/AspectRatio';
import "./Pagen10.css";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { Stack } from '@mui/material';
import Cookies from 'js-cookie';
import PlaceIcon from '@mui/icons-material/Place';
import Axios from "axios";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from "react";
import { Typography, Grid, Box, Tabs, Tab, Avatar, Divider, Button, Link } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { baseURL } from '../constants';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const navigate = useNavigate();
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

const PageN10 = () => {
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
    <div style={{ height: "100%", backgroundColor: "#FFF0BC", paddingBottom: "2%" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >

        <div style={{ padding: "0 0% 0 0%" }}>
          <div style={{ textAlign: "left" }}>
            <h1 className='head-text'>Welcome back, NGO</h1>
          </div>
          <Stack direction={"row"} spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack direction="column" spacing={2} sx={{ border: "1px solid #FEF778", padding: "2%", borderRadius: "10px 15px", backgroundColor: "#f1e18e" }} >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Avatar
                alt=""
                src=""
                sx={{ width: "134px", height: "134px" }}
              /></Box>
              <Stack spacing={1}>
                <Typography variant='h6'>NGO Name</Typography>
                <Typography>NGO</Typography>
                <Stack direction={"row"} spacing={1}>
                  <MailIcon />
                  <Typography>ngoemail@gmail.com</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <PhoneIphoneIcon />
                  <Typography>+913423874928</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <PlaceIcon />
                  <Typography>Chennai</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <Button color="error" startIcon={<LogoutIcon />} >Logout</Button>
                </Stack>
              </Stack>
            </Stack>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
              <Box
                sx={{ width: '100%', border: "" }}
              >
                {/* <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={3} className="box2">
                  <OneBox name={"View Appointments"} link={"/n13"} />
                </Grid>
                <Grid item xs={3} className="box2">
                  <OneBox name={"View Queries"} link={"/n11"} />
                </Grid>
                <Grid item xs={5}>  */}
                <Stack direction={"column"} spacing={2}
                >
                  <Stack direction={"row"} spacing={1}>
                    <Button variant='contained' color="success" onClick={() => navigate("../n13")}>
                      Appointments
                    </Button>
                    <Button variant='contained' color="success" onClick={() => navigate("../n11")}>
                      Queries
                    </Button>
                  </Stack>
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
                </Stack>
                {/* </Grid>
              </Grid> */}
              </Box>
            </div>
          </Stack>
        </div>
      </Box>
    </div>
  );
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-head" >
        <Tabs TabIndicatorProps={{ style: { background: '#C0B236' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<span className='lab-text'>Latest Queries</span>} {...N10Props(0)} />
          <Tab label={<span className='lab-text'>Upcoming Appointments</span>} {...N10Props(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='shower'>
          {queries.map((que, ind) => {
            return (<div className='texts-box'>
              <a className='links' href="/n11">
                <span className='b-text'>{que}</span>
              </a>
            </div>)
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='shower'>
          {Appointments.map(que => {
            return (<div className='texts-box'>
              <a className='links' href="/n13">
                <span className='b-text'>{que}</span>
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
          background: "radial-gradient(#FFEEAF, #D9CB50)",
          borderRadius: 'md',
          textAlign: "center",
          color: "#276548",
          overflow: "hidden",
          // boxShadow: "0.31rem 0.31rem 0.125rem 0.063rem #E3C770",
          "&:hover": {
            // background: "radial-gradient(#96e0db,#96e0db, #36AE7C)",
            fontSize: "1.44rem",
            border: "0.125rem solid #44b68a",
            border: "5px solid #C0B236",
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


export default PageN10