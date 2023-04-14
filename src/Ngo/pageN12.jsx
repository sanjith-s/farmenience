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

  return (
    <Container id="google_translate_element"
      style={{
        padding: "15px 0px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
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
          padding: "10px",
          backgroundColor: "#86fe9ede",
          height: "100%",
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          sx={{
            padding: "10px",
            height: "100%",
          }}
          columnSpacing={2}
        >
          <Grid xs={6}>
            <Box
              sx={{
                backgroundColor: "#86fe9ede",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                }}
              >
                Query ID:
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                  background: "white",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "70%",
                }}
              >
                {content.id}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                backgroundColor: "#86fe9ede",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                }}
              >
                Query Type:
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                  background: "white",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "70%",
                }}
              >
                {content.type}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                backgroundColor: "#86fe9ede",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                }}
              >
                Query Name:
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                  background: "white",
                  marginLeft: "5px",
                  borderRadius: "4px",
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
                backgroundColor: "#86fe9ede",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                }}
              >
                Description:
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "7px",
                  background: "white",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "100%",
                }}
              >
                {content.description}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                backgroundColor: "#86fe9ede",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                Date:
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "10px",
                  background: "white",
                  marginLeft: "5px",
                  borderRadius: "4px",
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
                backgroundColor: "#86fe9ede",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                Attachments:
              </Typography>

              <FormControl
                variant="standard"
                sx={{
                  width: "50%",
                  borderRadius: "4px",
                  color: "black",
                  background: "white",
                  height: "20%",
                }}
              >
                <InputLabel
                  id="select-attachments"
                  sx={{ paddingLeft: "10px" }}
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
              sx={{
                backgroundColor: "#86fe9ede",
                display: "flex",
                justifyContent: "space-evenly",
                padding: "7px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
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
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                <CallIcon />
                Respond
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
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
