import React, { useEffect } from 'react'
import BackImg from "../components/homepageBackground.png";
import Menubar from "../components/menubar";
import ImageSlider from "../components/imageSlider";
import "../css/pageM9.css"
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ShoppingCart, Room } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Stack, Box, Avatar, Button, Tab, Tabs, CardContent, IconButton } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import { AspectRatio } from "@mui/icons-material";
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

function pageM9() {
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
  return (
    <div id="google_translate_element" style={{ backgroundColor: "#E5FDD1" }} onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}>
      <img src={BackImg} style={{ objectFit: "cover", height: "370px", width: "100%" }} className='back-img' />
      <div className='contents'>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"Purchase"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"See a list of view Items in the market"}</p>
            <button onClick={() => {
              navigate('../m10')
            }} className="box-button">{"Go Now"}</button>
          </div>
        </div>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"Your orders"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"See a list of orders you placed"}</p>
            <button onClick={() => {
              navigate('../m17')
            }} className="box-button">{"View"}</button>
          </div>
        </div>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"Requests"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"See a list of requests"}</p>
            <button onClick={() => {
              navigate('../m15')
            }} className="box-button">{"View"}</button>
          </div>
        </div>
        <div className="box1">
          <div className="box-header">
            <span className="box-title">{"New Request"}</span>
          </div>
          <div className="box-body">
            <p className="box-description">{"Publish a new Request"}</p>
            <button onClick={() => {
              navigate('../m18')
            }} className="box-button">{"Create"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pageM9;