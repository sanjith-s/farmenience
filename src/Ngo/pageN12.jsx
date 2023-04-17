import React, { useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";


const PageN12 = () => {
  const handleChange = (event) => { };

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

  const content = {
    id: "1",
    type: "request",
    name: "Visit to farm",
    date: "16/07/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tortor ligula, in ultricies est maximus nec. Mauris a porta est, ac iaculis ante. Etiam euismod mi sit amet aliquam efficitur. Aenean ante augue, tincidunt sit amet tristique nec, consectetur cursus dui. Cras placerat luctus diam et fringilla. Etiam elit est, efficitur eget ullamcorper nec, efficitur a lacus.",
    attachments: ["Image", "Bill", "PDF"],
  };
  const location = useLocation();
    const navigate = useNavigate();
    const data = location.state.data;

  return (
    <Container id="google_translate_element"
      style={{

        margin : "1.875rem",
        padding: ".9375rem 0rem",

        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: ".9375rem",
        width: "100%",
        height: "100%",
      }}
      onClick={(e) => {
        fullAnotherSpeak(e.target.innerText)
      }}
    >
      <CssBaseline />
      <Grid container sx={{ width: "100%" }} className="gx-d-flex justify-content-center" >
        <Grid xs={2}>
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "#adadad",
                color: "white",
              },
            }}
          >
            <ArrowBackIcon
              sx={{
                fontSize: "2.5rem",
              }}
            />
          </IconButton>
        </Grid>

        <Grid xs={8}>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
            }}
          >
            View Queries
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          margin:"1.875rem",
          padding: "1.25rem",
          backgroundColor: "#ffffff",
          boxShadow : 10,
          borderRadius: ".625rem",
        }}
      >
        <Grid
          container
          sx={{

            margin: ".625rem",
            padding: ".625rem",
            height: "100%",
          }}
          columnSpacing={2}
        >
          <Grid xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  fontWeight:600,
                  width:"7.8125rem",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:".4375rem",
                }}
              >
                Query ID:
              </Typography>
              <Typography
                style={{

                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  background: "#f5f5f5",
                  marginLeft: ".3125rem",
                  borderRadius: ".25rem",
                  width: "70%",
                }}
              >
                {/* {data._id} */}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  fontWeight:600,
                  width:"7.8125rem",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:".4375rem",
                }}
              >
                Query Type:
              </Typography>
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  background: "#f5f5f5",
                  marginLeft: ".3125rem",
                  borderRadius: ".25rem",
                  width: "21.875rem",
                }}
              >
                {content.type}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  fontWeight:600,
                  width:"7.8125rem",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:".4375rem",
                }}
              >
                Query Name:
              </Typography>
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  background: "#f5f5f5",
                  marginLeft: ".3125rem",
                  borderRadius: ".25rem",
                  width: "70%",
                }}
              >
                {content.name}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid xs={12}>
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  fontWeight:600,
                  width:"7.8125rem",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:".4375rem",
                }}
              >
                Description:
              </Typography>
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".4375rem",
                  background: "#f5f5f5",
                  marginLeft: ".3125rem",
                  borderRadius: ".25rem",
                  width: "90%",
                }}
              >
                {content.description}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:".625rem",
                  fontWeight:600,
                  fontSize: "1rem",
                  padding: ".625rem",
                  width:"7.8125rem",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:".4375rem",
                }}
              >
                Date:
              </Typography>
              <Typography
                style={{
                  margin:".625rem",
                  fontSize: "1rem",
                  padding: ".625rem",
                  background: "#f5f5f5",
                  marginLeft: ".3125rem",
                  borderRadius: ".25rem",
                  width: "70%",
                }}
              >
                {content.date}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:".625rem",
                  fontWeight:600,
                  fontSize: "1rem",
                  padding: ".625rem",
                  width:"7.8125rem",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:".4375rem",
                }}
              >
                Attachments:
              </Typography>

              <FormControl
                variant="standard"
                sx={{
                  margin:".625rem",
                  width: "50%",
                  borderRadius: ".25rem",
                  color: "black",
                  background: "#f5f5f5",
                  height: "20%",
                }}
              >
                <InputLabel
                  id="select-attachments"
                  sx={{ paddingLeft: ".625rem" }}
                >
                  Open
                </InputLabel>
                <Select
                  labelId="select-attachments"
                  id="select-attachments"
                  value={""}
                  onChange={handleChange}
                  label="Attachments"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {content.attachments.map((val) => {
                    return <MenuItem value={val.toLowerCase}>{val}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box
             margin = {2}
              sx={{
                 
                display: "flex",
                justifyContent: "space-evenly",
                padding: ".4375rem",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  "&:hover": {
                    color:"white",
                    backgroundColor: "red",
                  },
                }}
              >
                <DeleteIcon />
                Delete
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    color:"white",
                    backgroundColor: "green",
                  },
                }}
              >
                <CallIcon />
                Respond
              </Button>
              <Button
                variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , 
                  "&:hover": {
                    color:"white",
                    backgroundColor: "#f7a900",
                  },  
                }}
              >
                Sender Details
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PageN12;
