import React, { useState, useEffect } from 'react';
import Axios from "axios"
import BackImg from "../components/homepageBackground.png";
import "../css/pageM0.css"
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Grid, Paper } from '@material-ui/core';
import { Notifications, ShoppingCart, Room } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Stack, Box, Avatar, Button, Tab, Tabs } from '@mui/material';
import { AspectRatio } from "@mui/icons-material";
import { Divider } from '@material-ui/core';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { baseURL } from '../constants';

const useStyles = makeStyles((theme) => ({
    listItemIcon: {
        minWidth: '2.5rem',
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

    const classes = useStyles();

    const [orders, setOrders] = useState([]);
    const [requests, setRequests] = useState([]);
    const [notifications, setNotifications] = useState([]);

    const AxiosSet = () => {
        let token = Cookies.get('token');
        Axios.get(`${baseURL}/loadorders`, { headers: { tokenstring: token } }).
            then((response) => {
                setOrders(response.data.message);
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

        Axios.get(`${baseURL}/loadrequests`, { headers: { tokenstring: token } }).
            then((response) => {
                setRequests(response.data.message);
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

        // Axios.get(`${baseURL}/loadnotifications`, { headers: { tokenstring: token } }).
        //     then((response) => {
        //         setNotifications(response.data.message);
        //     })
        //     .catch(async (res) => {
        //         if (res.response.data.message === 'Error in connection') {
        //             await Swal.fire({
        //                 icon: 'error',
        //                 title: 'Oops...',
        //                 text: 'Please Check Network Connection!',
        //             })
        //         }
        //         else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
        //             await Swal.fire({
        //                 icon: 'error',
        //                 title: 'Oops...',
        //                 text: 'Login Error',
        //             })
        //             navigate('../login')
        //         }
        //     })
    }

    useEffect(() => {
        AxiosSet();
    }, []);

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box id="google_translate_element" sx={{ width: "100%" }} onClick={(e) => {
            fullAnotherSpeak(e.target.innerText)
        }}>
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

function pageM0() {

    const navigate = useNavigate();

    // const googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
    // }

    // const fullAnotherSpeak = (text) => {
    //     responsiveVoice.speak(text, "Tamil Male");
    // }

    // useEffect(() => {
    //     var addScript = document.createElement('script');
    //     addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    //     document.body.appendChild(addScript);
    //     window.googleTranslateElementInit = googleTranslateElementInit;
    // }, []);

    // useEffect(() => {
    //     var addScript = document.createElement('script');
    //     addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
    //     document.body.appendChild(addScript);
    // }, []);

    return (
        <div style={{ backgroundColor: "#E5FDD1" }}>
            <img src={BackImg} style={{ objectFit: "cover", height: "23.125rem", width: "100%" }} className='back-img' />
            <div className='contents'>
                <div className="box1">
                    <div className="box-header">
                        <span className="box-title">{"Sale"}</span>
                    </div>
                    <div className="box-body">
                        <p className="box-description">{"Create a New Sale"}</p>
                        <button onClick={() => {
                            navigate('../M6')
                        }} className="box-button">{"Create Now"}</button>
                    </div>
                </div>
                <div className="box1">
                    <div className="box-header">
                        <span className="box-title">{"Sale Requests"}</span>
                    </div>
                    <div className="box-body">
                        <p className="box-description">{"See a list of sale requests"}</p>
                        <button onClick={() => {
                            navigate('../M1')
                        }} className="box-button">{"View"}</button>
                    </div>
                </div>
                <div className="box1">
                    <div className="box-header">
                        <span className="box-title">{"Sales"}</span>
                    </div>
                    <div className="box-body">
                        <p className="box-description">{"See a list of sales you have done"}</p>
                        <button onClick={() => {
                            navigate('../M3')
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

export default pageM0;
