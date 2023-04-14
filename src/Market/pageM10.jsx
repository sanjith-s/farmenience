import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import lineGraph from "../images/lineGraph.png";

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

  [chartData, setChartData] = useState(null);

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
        padding: "15px 0px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
      }}
    >
      <CssBaseline />
      <Box>
        <Page10Nav title="buyer dashboard" />
      </Box>
      <Box
        sx={{
          position: "relative ",
          // width: "500px",
          backgroundColor: "#86fe9ede",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "30px 0px",
          border: "1px solid #000",
          borderRadius: "4px",
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
            style={{ border: "2px solid #000", borderRadius: "4px" }}
          /> */}
        </Box>
        <Button
          variant="contained"
          color="success"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            fontWeight: "600",
            fontSize: "15px",
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
                fontSize: "16px",
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
