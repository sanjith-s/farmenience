import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ShoppingCart, Room } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Stack, Box, Avatar, Button, Tab, Tabs, Grid } from '@mui/material';
import { AspectRatio } from "@mui/icons-material";
import Swal from 'sweetalert2';
import { baseURL } from '../constants';
import Axios from "axios";
import Cookies from 'js-cookie';
// import "./Pagen10.css";
import { Divider } from '@material-ui/core';
import BackImg from "../components/homepageBackground.png";
import "../css/pageM0.css"
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const useStyles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: '2.5rem',
  }
}));

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
        <Box>
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
function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [queries, setQueries] = useState([{subject:""},{subject:""},{subject:""}]);
const [appointments, setAppointments] = useState([{subject:""},{subject:""},{subject:""}]);

  const AxiosSet = () => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/getqueriesN10`, { headers: { tokenstring: token } }).
      then((response) => {
        setQueries([...response.data.message,...queries]);
        console.log(response.data.message);
        console.log(queries);
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
        setAppointments([...response.data.message, ...appointments]);
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

  useEffect(()=>{
   console.log(queries);
  },[queries])


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-head" >
        <Tabs TabIndicatorProps={{ style: { background: 'darkgreen' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<span className='lab-text1'>Latest Queries</span>} {...N10Props(0)} />
          <Tab label={<span className='lab-text1'>Upcoming Appointments</span>} {...N10Props(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <marquee id="roller1" behavior="scroll" direction="up" onMouseOver={() => { document.getElementById("roller1").stop() }} onMouseOut={() => { document.getElementById("roller1").start() }} >
          <div className='shower' style={{ margin: "2%",height:"100%" }}>
            {queries.map((que, ind) => {
              return (<div className='texts-box'>
                <a className='links' href="/n11">
                  <span className='b-text'>{que.subject}</span>
                </a>
              </div>)
            })}
          </div>
        </marquee>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <marquee id="roller2" behavior="scroll" direction="up" onMouseOver={() => { document.getElementById("roller2").stop() }} onMouseOut={() => { document.getElementById("roller2").start() }} >
          <div className='shower' style={{ margin: "2%" }}>
            {appointments.map(que => {
              return (<div className='texts-box'>
                <a className='links' href="/n13">
                  <span className='b-text'>{que.subject}</span>
                </a>
              </div>)
            })}
          </div>
        </marquee>
      </TabPanel>
    </Box>
  );
}

function pageN10() {

  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  // function logout() {
  //   let token = Cookies.get('token')
  //   Axios.get('http://localhost:5000/logout', { headers: { tokenstring: token } }
  //   )
  //     .then((response) => {
  //       if (response.data.message == "Logout Successful") {
  //         setOpen3(true);
  //         CookiesNaNpxove('token')
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
  return (
    <div style={{ backgroundColor: "#E5FDD1" }}>
      <img src={BackImg} style={{ objectFit: "cover", height: "23.125rem", width: "100%" }} className='back-img' />
      <div className='contents'>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"Queries"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"See the list of queries"}</p>
            <button onClick={() => {
              navigate('../N11')
            }} className="box-button">{"View"}</button>
          </div>
        </div>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"Appointments"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"See a list of Appointmets"}</p>
            <button onClick={() => {
              navigate('../N13')
            }} className="box-button">{"View"}</button>
          </div>
        </div>
        <div className="roller box1">
          <BasicTabs />
        </div>
      </div>
    </div>
  )
}

export default pageN10;