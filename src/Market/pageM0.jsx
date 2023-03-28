import React from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Notifications, ShoppingCart, Room } from '@material-ui/icons';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PropTypes from 'prop-types';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack, Box, Avatar, Button, Tab, Tabs } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';

import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: "#E5FDD1"
    },
    paper: {
        textAlign: 'center',
        height: '100%',
        color: theme.palette.text.secondary,
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0px 0px 10px #777',
            transform: 'scale(1.05)',
        },
        transition: 'all 0.3s ease-in-out',
    },
    orderDetails: {
        backgroundColor: '#B5F1CC',
    },
    saleRequest: {
        backgroundColor: '#B5F1CC',
    },
    notifications: {
        backgroundColor: '#B5F1CC',
    },
    listItemIcon: {
        minWidth: '40px',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '3rem',
        letterSpacing: '0.2rem',
        marginBottom: theme.spacing(3),
        '& span': {
            display: 'block',
            fontSize: '1rem',
            fontWeight: 'normal',
            letterSpacing: '0.1rem',
        },
        '& hr': {
            border: 0,
            height: '1px',
            backgroundImage: 'linear-gradient(to right, transparent, #ccc, transparent)',
        },
    },
}));

const ordersData = [{ orderNo: '123456789', destination: 'Chennai', },
{ orderNo: '987654321', destination: 'Koyambedu', },
{ orderNo: '456123789', destination: 'THiruchi', },];


const notificationsData = [{ message: 'You have a new sale request.', },
{ message: 'Your have a new sale request.', }]
// ...

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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-head" >
                <Tabs TabIndicatorProps={{ style: { background: '#C0B236' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={<span className='lab-text'> Orders</span>} {...N10Props(0)} />
                    <Tab label={<span className='lab-text'>Sale Requests</span>} {...N10Props(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                        <List>
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
                        </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
                        <List>
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
                        </List>
            </TabPanel>
        </Box>
    );
}


function SellerDashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stack container spacing={2}>
                <Grid item xs={12}>
                    <div className={classes.title}>
                        <span>SELLER DASHBOARD</span>
                        <hr />
                    </div>
                </Grid>
                <Box  sx={{display:"flex",alignContent:"center",justifyContent:"center"}}>
                <Stack direction={"row"} spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Stack direction="column" spacing={2} sx={{ border: "1px solid #FEF778", padding: "2%", borderRadius: "10px 15px", backgroundColor: "#B5F1CC",height:"min-content" }} >
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Avatar
                            alt=""
                            src=""
                            sx={{ width: "134px", height: "134px" }}
                        /></Box>
                        <Stack spacing={1}>
                            <Typography variant='h6'>Seller name</Typography>
                            <Typography>Seller Account</Typography>
                            <Stack direction={"row"} spacing={1}>
                                <MailIcon />
                                <Typography>selleremail@gmail.com</Typography>
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
                                        Create new sale
                                    </Button>
                                    <Button variant='contained' color="success" onClick={() => navigate("../n11")}>
                                        View Sale requests
                                    </Button>
                                    <Button variant='contained' color="success" onClick={() => navigate("../n11")}>
                                        View Sale history
                                    </Button>
                                </Stack>
                                <AspectRatio
                                    ratio="4/3"
                                    sx={{
                                        width: 600,
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
                </Box>
            </Stack>
        </div>
    );
}

export default SellerDashboard;