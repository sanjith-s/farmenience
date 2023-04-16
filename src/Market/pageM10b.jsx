import React, { useEffect } from "react";
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
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import Page10Nav from "../components/page10Nav";

// const data = [
//   {
//     sellerName: "full name",
//     storeName: "some store",
//     places: ["place1", "place2"],
//     rate: 2.5,
//     profile: "",
//     content: "sellers description",
//   },
// ];

const PageM10b = (props) => {

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

  const location = useLocation();
  // const location = props.location.state
  const data = location.state?.market;
  console.log(data);

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
        <Page10Nav
          title={data.name}
        />
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
            style={{ height: "2.5rem", fontSize: "1.5625rem" }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: "green", fontSize: "2.1875rem" }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <MicIcon style={{ color: "green", fontSize: "2.1875rem" }} />
                </IconButton>
                <IconButton>
                  <PhotoCameraIcon
                    style={{ color: "green", fontSize: "2.1875rem" }}
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
            <Typography style={{ fontSize: "1.125rem", fontWeight: "600" }}>
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
            <Typography style={{ fontSize: "1.125rem", fontWeight: "600" }}>
              filter
            </Typography>
          </Button>
        </CardActionArea>
      </CardActions>
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
        {/* {(location.state ? location.state.marketData : data).map(
          (val, index) => {
            return ( */}
        <CardContent
          // key={index}
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
            <Box style={{ display: "flex" }}>
              <Typography
                style={{
                  fontWeight: "600",
                  textTransform: "uppercase",
                  fontSize: "1.375rem",
                }}
              >
                name of the seller:
              </Typography>
              {
                <Typography
                  style={{
                    fontWeight: "400",
                    textTransform: "uppercase",
                    fontSize: "1.375rem",
                    paddingLeft: "1.25rem",
                  }}
                >
                  {data.owner}
                </Typography>
              }
            </Box>
            <Box style={{ display: "flex" }}>
              <Typography
                variant="boby1"
                style={{
                  fontSize: "1.375rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  display: "flex",
                }}
              >
                name of the store:
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  textTransform: "uppercase",
                  fontSize: "1.375rem",
                  paddingLeft: "1.75rem",
                }}
              >
                {data.name}
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              width: "20%",
              display: "flex",
              alignItems: "center",
              padding: "0rem 1.25rem",
            }}
          >
            <Rating value={data.rating} max={5} precision={0.5} readOnly />
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
                to="/M10c"
                state={{
                  data: data
                }}
                style={{ textDecoration: "none" }}
              >
                <Typography>
                  view details
                </Typography>
              </Link>
            </Button>
          </Box>
        </CardContent>
        {/* );
          }
        )} */}
      </Card>
    </Container>
  );
};
export default PageM10b;
