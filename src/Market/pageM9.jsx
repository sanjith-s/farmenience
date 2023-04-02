// import React from "react";
// import Menubar from "../components/menubar";
// import ImageSlider from "../components/imageSlider";
// import Card from "@mui/material/Card";
// import {
//   CardContent,
//   Typography,
//   CssBaseline,
//   Box,
//   IconButton,
// } from "@mui/material";
// import Divider from "@mui/material/Divider";

// const orders = [
//   {
//     id: 1,
//     items: ["onions", "tomato"],
//   },
//   {
//     id: 2,
//     items: ["potato", "ginger"],
//   },
//   {
//     id: 3,
//     items: ["garlic", "cucumber"],
//   },
//   {
//     id: 4,
//     items: ["garlic", "cucumber"],
//   },
//   {
//     id: 5,
//     items: ["garlic", "cucumber"],
//   },
//   {
//     id: 6,
//     items: ["garlic", "cucumber"],
//   },
// ];

// function PageM9() {
//   return (
//     <Box style={{ boxSizing: "borderBox" }}>
//       <CssBaseline />
//       <Menubar />
//       <Card
//         sx={{
//           display: "flex",
//           padding: "30px",
//           columnGap: "30px",
//           flexDirection: "row",
//         }}
//       >
//         <CardContent
//           sx={{
//             bgcolor: "#d9d9d9",
//             borderRadius: "5px",
//             border: "3px solid #000",
//             width: "50%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             height: "400px",
//             overflow: "auto",
//             position: "relative",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               textTransform: "uppercase",
//               fontWeight: "600",
//               textAlign: "center",
//             }}
//           >
//             orders placed
//           </Typography>
//           <Divider style={{ width: "90%", alignSelf: "center" }} flexItem />

//           {orders.map((order, index) => {
//             return (
//               <CardContent
//                 key={index}
//                 style={{
//                   padding: "15px 5px",
//                   marginTop: "15px",
//                   backgroundColor: " #eeeeee",
//                   width: "90%",
//                   margin: "10px 0px",
//                   borderRadius: "8px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   style={{
//                     fontWeight: "600",
//                     textTransform: "uppercase",
//                     width: "30%",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   order id :
//                   <Typography
//                     variant="h6"
//                     style={{
//                       fontWeight: "600",
//                     }}
//                   >
//                     {order.id}
//                   </Typography>
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   style={{
//                     fontWeight: "600",
//                     width: "55%",
//                     textTransform: "uppercase",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   items :
//                   <Typography
//                     variant="h5"
//                     style={{
//                       textTransform: "lowercase",
//                     }}
//                   >
//                     {order.items.toString()} etc.
//                   </Typography>
//                 </Typography>
//               </CardContent>
//             );
//           })}
//         </CardContent>

//         <Divider orientation="vertical" flexItem />
//         <ImageSlider />
//       </Card>
//     </Box>
//   );
// }

// export default PageM9;
import React from 'react'
import BackImg from "../components/homepageBackground.png";
import "../css/pageM9.css"
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ShoppingCart, Room } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Stack, Box, Avatar, Button, Tab, Tabs } from '@mui/material';
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
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#E5FDD1" }}>
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