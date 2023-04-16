import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import lineGraph from "../images/lineGraph.png";
import Cookies from 'js-cookie';
import Axios from "axios";
import { baseURL } from '../constants';

import {
  Button,
  Container,
  Typography,
  CssBaseline,
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import profilePhoto from "../images/face1.jpg";
import Page10Nav from "../components/page10Nav";
import Chart from "../components/chart";

const data = [
  {
    market: "SABJI MANDI",
    distance: "2208.3 km from your location",
    city: "DELHI",
    rate: 3,
  },
  {
    market: "KOYEMBEDU MARKET",
    distance: "5 km from your location",
    city: "CHENNAI",
    rate: 3,
  },
  {
    market: "PATEL VEGETABLE MARKET",
    distance: "626 km from your location",
    city: "HYDERABAD",
    rate: 3,
  },
  {
    market: "RMC MARKET",
    distance: "345 km from your location",
    city: "BANGALORE",
    rate: 3,
  },
  {
    market: "SABJI MANDI",
    distance: "2208.3 km from your location",
    city: "DELHI",
    rate: 3,
  },
  {
    market: "KOYEMBEDU MARKET",
    distance: "5 km from your location",
    city: "CHENNAI",
    rate: 3,
  },
  {
    market: "PATEL VEGETABLE MARKET",
    distance: "626 km from your location",
    city: "HYDERABAD",
    rate: 3,
  },
  {
    market: "RMC MARKET",
    distance: "345 km from your location",
    city: "BANGALORE",
    rate: 3,
  },
];

const marketData = [
  {
    sellerName: "RAJA",
    storeName: "ANGEL STORE",
    places: ["koyambedu", "chennai"],
    rate: 2.5,
    profile: profilePhoto,
    content:
      "Has been selling wheat ,rice,millets,etc for the past 45 years . Known for his fresh vegetables that is sold at a very reasonable rate",
  },
  {
    sellerName: "RAHUL ",
    storeName: "SS STORE",
    places: ["koyambedu", "chennai"],
    rate: 2.5,
    profile: profilePhoto,
    content:
      "Has been selling wheat ,rice,millets,etc for the past 45 years . Known for his fresh vegetables that is sold at a very reasonable rate",
  },
  {
    sellerName: "RAKESH ",
    storeName: "KP STORE",
    places: ["koyambedu", "chennai"],
    rate: 2.5,
    profile: "",
    content:
      "Has been selling wheat ,rice,millets,etc for the past 45 years . Known for his fresh vegetables that is sold at a very reasonable rate",
  },
  {
    sellerName: "MAHESH ",
    storeName: "MANI STORE",
    places: ["koyambedu", "chennai"],
    rate: 2.5,
    profile: "",
    content:
      "Has been selling wheat ,rice,millets,etc for the past 45 years . Known for his fresh vegetables that is sold at a very reasonable rate",
  },
];

 function createData(time, amount) {
    return { time, amount };
}


const fetchData = async () => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/fetchprice`, { headers: { tokenstring: token } }).
      then((response) => {
        setChartData(response.data.priceHistory);
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
}

function PageM10() {

  const [chartData, setChartData] = useState(null);

  const data = [
    createData("00:00", 0),
    createData("03:00", 300),
    createData("06:00", 600),
    createData("09:00", 800),
    createData("12:00", 1500),
    createData("15:00", 2000),
    createData("18:00", 2400),
    createData("21:00", 2400),
    createData("24:00", undefined),
  ];

  useEffect(() => {
    fetchData();
    setInterval(this.loadData, 30000);
  });


  

  return (
    <Container
      style={{
        padding: ".9375rem 0rem",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: ".9375rem",
      }}
    >
      <CssBaseline />
      <Box>
        <Page10Nav title="buyer dashboard" />
      </Box>
      <Box
        sx={{
          position: "relative ",
          // width: "31.25rem",
          backgroundColor: "#86fe9ede",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1.875rem 0rem",
          border: ".0625rem solid #000",
          borderRadius: ".25rem",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chart />
          {/* <img
            src={lineGraph}
            width={800}
            height={350}
            style={{ border: ".125rem solid #000", borderRadius: ".25rem" }}
          /> */}
        </Box>
        <Button
          variant="contained"
          color="success"
          style={{
            position: "absolute",
            bottom: ".625rem",
            right: ".625rem",
          }}
        >
          <Link
            to="/M10a"
            state={{
              from: "market list",
              dataList: data,
              marketData: marketData,
            }}
            style={{ textDecoration: "none" }}
          >
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              available markets
            </Typography>
          </Link>
        </Button>
      </Box>
    </Container>
  );
}

export default PageM10;
