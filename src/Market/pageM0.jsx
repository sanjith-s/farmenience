import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Notifications, ShoppingCart, Room } from '@material-ui/icons';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
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
        backgroundColor: '#f4f4f4',
    },
    saleRequest: {
        backgroundColor: '#f4f4f4',
    },
    notifications: {
        backgroundColor: '#f4f4f4',
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

function SellerDashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={classes.title}>
                        <span>SELLER DASHBOARD</span>
                        <hr />
                    </div>
                </Grid>
                {/* Order Details section */}
<Grid item xs={12} md={4}>
  <Paper className={`${classes.paper} ${classes.orderDetails}`}>
    <Typography variant="h5">Order Details</Typography>
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
  </Paper>
</Grid>


                <Grid item xs={12} md={4}>
                    <Paper className={`${classes.paper} ${classes.saleRequest}`}>
                        <Typography variant="h5">Sale Requests</Typography>
                        <List>
                            {saleRequestsData.map((request, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon className={classes.listItemIcon}>
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
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper className={`${classes.paper} ${classes.notifications}`}>
                        <Typography variant="h5">Notifications</Typography>
                        <List>
                            {notificationsData.map((notification, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon className={classes.listItemIcon}>
                                        <Notifications fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={notification.message} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default SellerDashboard;
