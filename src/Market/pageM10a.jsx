import React, { useState, useEffect } from "react";
import MarketMap from '../MarketMap';
import Cookies from 'js-cookie';
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import Swal from 'sweetalert2';
import Page10Nav from "../components/page10Nav";
import Axios from "axios";
import { baseURL } from "../constants";

const data = [
  {
    market: "Market name",
    distance: "address of the market",
    city: "place",
    rate: 3,
  },
];

const marketData = [
  {
    sellerName: "full name",
    storeName: "some store",
    places: ["place1", "place2"],
    rate: 2.5,
    profile: "",
    content: "seller description given by the market itself",
  },
];

const PageM10a = () => {

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

  const GOOGLE_MAP_API_KEY = 'AIzaSyDrQFK0vnEuz5BUAjAjdKrhq2N3UvDbjXg';

  const location = useLocation();

  const [market, setMarket] = useState([]);

  const handleGetMarkets = () => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/buyer/getmarkets`, { headers: { tokenstring: token } })
      .then((res) => {
        const hell = res.data.message;
        setMarket(hell);
      }).catch(async (res) => {
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

  useEffect(() => {
    handleGetMarkets();
  }, []);

  /*
  const list_of_markets = market.map((val) => {
      return(
        <div>
          <br/>
          <span>{val.name}</span>
          <span>{val.location}</span>
          <button> View Market </button>
        </div>
      );
  })
  */

  const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      callback();
    } else {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", callback);
    }
  }

  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <Container id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}
      style={{
        padding: ".9375rem 0rem",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: ".9375rem",
      }}
    >
      <CssBaseline />

      <Box className="gx-d-flex justify-content-center">
        <Page10Nav title={location.state ? location.state.from : "List"} />
      </Box>
      <CardActions
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: ".5rem",
          border: ".125rem solid #555555",
        }}
      >
        <FormControl
          style={{
            width: "100%",
            height: "3rem",
          }}
        >
          <Input
            style={{ height: "2.5rem" }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: "green" }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <MicIcon style={{ color: "green" }} />
                </IconButton>
                <IconButton>
                  <PhotoCameraIcon
                    style={{ color: "green" }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </CardActions>

      <CardActions
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: ".5rem",
          padding: "0rem",
        }}
      >
        <CardActionArea style={{ width: "100%" }}>
          <Button
            style={{
              display: "flex",
              columnGap: "1.25rem",
              color: "green",
              width: "100%",
              alignItems: "center",
            }}
          >
            <SortIcon />
            <Typography style={{ fontSize: "1.125rem", fontWeight: "500" }}>
              sort
            </Typography>
          </Button>
        </CardActionArea>
        <CardActionArea style={{ width: "100%" }}>
          <Button
            style={{
              display: "flex",
              columnGap: "1.25rem",
              color: "green",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FilterListIcon />
            <Typography style={{ fontSize: "1.125rem", fontWeight: "500" }}>
              filter
            </Typography>
          </Button>
        </CardActionArea>
      </CardActions>

      <div className="App" style={{justifyItems: "center"}}>
        {/* <a href="https://www.cluemediator.com">Clue Mediator</a> */}
        <br /><br />
        {!loadMap ? <div>Loading...</div> : <MarketMap />}
        <br /><br />
        {/* <small><b>Note:</b> In order to make it work, you have to set the YOUR_GOOGLE_MAP_API_KEY in App.js file. </small> */}
      </div>

      <Card
        style={{
          backgroundColor: "#86fe9ede",
          display: "flex",
          flexDirection: "column",
          rowGap: "1.25rem",
          height: "31.25rem",
          overflow: "auto",
          padding: "1.25rem .9375rem",
          borderRadius: ".3125rem",
          border: ".1875rem solid #000000",
        }}
      >
        {(location.state ? location.state.dataList : market).map((val, index) => {
          return (
            <CardContent
              key={index}
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: ".5rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "50%",
                  padding: "0rem 1.25rem",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: "1.375rem",
                  }}
                >
                  {val.name}
                </Typography>
                <Typography
                  variant="boby1"
                  style={{ fontSize: "1.25rem", fontWeight: "400" }}
                >
                  {val.distance.miles} Kilometers
                </Typography>
              </Box>
              <Box
                style={{
                  width: "20%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0rem 1.25rem",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: "1.375rem",
                  }}
                >
                  {val.location}
                </Typography>
              </Box>

              <Box
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                >
                  <Link
                    to="/M10b"
                    state={{
                      market: val
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography>
                      view market
                    </Typography>
                  </Link>
                </Button>
              </Box>
            </CardContent>
          );
        })}
      </Card>
      {/* {list_of_markets} */}
    </Container>
  );
};
export default PageM10a;
