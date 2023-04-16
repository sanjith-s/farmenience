import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import Page10Nav from "../components/page10Nav";
import PersonRoundIcon from "@mui/icons-material/PersonRounded";
import {
  Card,
  Box,
  CardContent,
  Container,
  CardMedia,
  CssBaseline,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

const PageM10c = (props) => {

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
  const data = location.state?.data;

  return (
    <Container id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}
      style={{
        padding: "1.875rem 0rem",
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
      <Card style={{ padding: "1.125rem", display: "flex", columnGap: "1.5rem" }}>
        <CardContent
          style={{
            padding: ".3125rem .625rem",
            display: "flex",
            flexDirection: "column",
            rowGap: "1.5625rem",
          }}
        >
          <Box>
            <Typography
              style={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "1.625rem",
                color: "#333",
              }}
            >
              {/* {location.state ? location.state.from : "Seller Name"} */}
              {data.name}
            </Typography>
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "1.25rem",
                color: "#444",
              }}
            >
              {/* {location.state
                ? location.state.branches.toString()
                : "branch places"} */}
                {data.location}
            </Typography>
          </Box>
          <Divider style={{ width: "98%" }} flexItem />
          <Box>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "1.375rem",
                paddingLeft: "1.125rem",
                color: "#555",
              }}
            >
              {data.sellerDesc}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia style={{ padding: "1.25rem" }}>
          <Paper
            elevation={14}
            style={{
              width: "12.5rem",
              height: "12.5rem",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: ".625rem",
              backgroundColor: "#fff",
              position: "sticky",
            }}
          >
            {location.state ? (
              location.state.profile ? (
                <img
                  src={location.state ? location.state.profile : ""}
                  alt="profile pic"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <PersonRoundIcon
                  style={{
                    width: "110%",
                    height: "110%",
                    color: "#555555",
                    border: ".625rem solid #ffffff",
                    borderRadius: "31.25rem",
                    backgroundColor: "#86fe9eee",
                  }}
                />
              )
            ) : (
              <PersonRoundIcon
                style={{
                  width: "110%",
                  height: "110%",
                  color: "#555555",
                  border: ".625rem solid #ffffff",
                  borderRadius: "31.25rem",
                  backgroundColor: "#86fe9eee",
                }}
              />
            )}
          </Paper>
        </CardMedia>
      </Card>
    </Container>
  );
};

export default PageM10c;
