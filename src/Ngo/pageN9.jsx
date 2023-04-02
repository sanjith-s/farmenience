import React from 'react';
import { useEffect, useState } from "react";
import '../css/pageN9.css';
import "../css/pageM0.css"
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { Typography, Box, Stack, Avatar, Button, ButtonGroup, Tab, Tabs } from "@mui/material";
import { baseURL } from '../constants';
import BackImg from "../components/homepageBackground.png";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ShoppingCart, Room } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { AspectRatio } from "@mui/icons-material";
import Axios from "axios";
import { Divider } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: '40px',
  }
}));

const ordersData = [{ orderNo: '123456789', destination: 'Chennai', },
{ orderNo: '987654321', destination: 'Koyambedu', },
{ orderNo: '456123789', destination: 'THiruchi', },];


const saleRequestsData = [
  {
    item: 'Item 1',
    itemName: 'Apple',
    quantity: 5,
    requestSender: 'Kumar',
  },
  {
    item: 'Item 2',
    itemName: 'Cucumber',
    quantity: 10,
    requestSender: 'Dhoni',
  },
  {
    item: 'Item 3',
    itemName: 'Onions',
    quantity: 3,
    requestSender: 'Virat',
  },
];

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

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }} className="tabs-head" >
        <Tabs TabIndicatorProps={{ style: { background: 'darkgreen' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<span className='lab-text1'> Orders</span>} {...N10Props(0)} />
          <Tab label={<span className='lab-text1'>Sale Requests</span>} {...N10Props(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <marquee id="roller1" behavior="scroll" direction="down" onMouseOver={() => { document.getElementById("roller1").stop() }} onMouseOut={() => { document.getElementById("roller1").start() }} >
          {ordersData.map((order, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <Room fontSize="small" />
                <ListItemText primary={`Order No: ${order.orderNo}`} />
              </ListItem>
              <ListItem>
                <Room fontSize="small" />
                <ListItemText primary={`Destination: ${order.destination}`} />
              </ListItem>
              {index !== ordersData.length - 1 && (
                <Divider variant="middle" />
              )}
            </React.Fragment>
          ))}
        </marquee>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List>
          <marquee id="roller2" direction="down" behaviour="scroll" onMouseOver={() => { document.getElementById("roller2").stop() }} onMouseOut={() => { document.getElementById("roller2").start() }}>
            {saleRequestsData.map((request, index) => (
              <ListItem key={index}>
                <ListItemIcon className={useStyles.listItemIcon}>
                  <ShoppingCart fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={request.item}
                  secondary={
                    <React.Fragment>
                      <Typography variant="subtitle2">
                        Item: {request.itemName}
                      </Typography>
                      <Typography variant="subtitle2">
                        Quantity: {request.quantity}
                      </Typography>
                      <Typography variant="subtitle2">
                        Request Sender: {request.requestSender}
                      </Typography>

                    </React.Fragment>
                  }
                />
              </ListItem>

            ))}
          </marquee>
        </List>
      </TabPanel>
    </Box>
  );
}



function PageN9() {
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

  // const buttons = [
  //   <Button onClick={() => {
  //     navigate('../N1')
  //   }}   sx ={{
  //     "&:hover": { backgroundColor: "#a3ff75" } ,
  //     backgroundColor:"#fcd38b",
  //     color:"black"
  //   }}>
  //     View Queries
  //   </Button>,
  //   <Button onClick={() => {
  //     navigate('../N6') 
  //   }} 
  //   sx ={{
  //     "&:hover": { backgroundColor: "#a3ff75" } ,
  //     backgroundColor:"#fcd38b",
  //     color:"black"
  //   }}> 
  //     View Appoinments
  //   </Button>,
  //   <Button onClick={() => {
  //     navigate('../N7')
  //   }}
  //   sx ={{
  //     "&:hover": { backgroundColor: "#a3ff75" } ,
  //     backgroundColor:"#fcd38b",
  //     color:"black"
  //   }}>
  //     New Query
  //   </Button>,
  //   <Button onClick={() => {
  //     navigate('../N4')
  //   }}
  //   sx ={{
  //     "&:hover": { backgroundColor: "#a3ff75" } ,
  //     backgroundColor:"#fcd38b",
  //     color:"black"
  //   }}>
  //     New Appoinment
  //   </Button>,
  //   <Button onClick={logout} sx={{

  //     "&:hover": { backgroundColor: "#f52f1d" } ,

  //     backgroundColor:"#ff6b6b",

  //     color:"white"

  //   }}>LogOut</Button>
  // ]

  return (
    <div style={{ backgroundColor: "#E5FDD1" }}>
      <img src={BackImg} style={{ objectFit: "cover", height: "370px", width: "100%" }} className='back-img' />
      <div className='contents'>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"Queries"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"See a list of Queries"}</p>
            <button onClick={() => {
              navigate('../N1')
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
              navigate('../N6')
            }} className="box-button">{"View"}</button>
          </div>
        </div>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"New Query"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"Create a new Query"}</p>
            <button onClick={() => {
              navigate('../N7')
            }} className="box-button">{"Create"}</button>
          </div>
        </div>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"New Appointment"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"Make a new Appointment"}</p>
            <button onClick={() => {
              navigate('../N4')
            }} className="box-button">{"Create"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageN9;
