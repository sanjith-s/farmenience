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
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import Cookies from 'js-cookie';
import Axios from "axios";
import Swal from "sweetalert2";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


const PageN12 = () => {
  const handleChange = (event) => { };
  const navigate = useNavigate();
  const submitResponse = async () => {
    let token = Cookies.get('token');
    Axios.put('http://localhost:5000/respondquery', {
      id: data._id,
      response: response
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        if (response.data.message === 'Reponse Submitted Successfully') {
          
          await Swal.fire({
            icon: 'success',
            title: 'Response Submitted Successfully !!',
          })
          navigate('../N10');
        }
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
          navigate('../login');
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.response.data.message,
          })
        }
      })
    setOpen(false);
  };
  
  const [response, setResponse] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
    // const navigate = useNavigate();
    const data = location.state.data;
    console.log(data);

  return (
    <Box align="center">
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
        // alignItems:"center"
      }}
      onClick={(e) => {
        fullAnotherSpeak(e.target.innerText)
      }}
    >
      <CssBaseline />
      <Grid container sx={{ width: "100%" }} className="gx-d-flex justify-content-center" >
        <Grid xs={2}>
          <IconButton
          onClick={()=>{navigate("../n11")}}
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
          alignItems:"center",
          display:"flex",
          textAlign:"center"
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
                {data._id}
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
                Query Status:
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
                {data.status}
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
                {data.subject}
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
                {data.description}
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
                {data.updatedAt}
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
                onClick={()=>{
                  handleClickOpen();
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
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Response Submit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Response"
            fullWidth
            variant="standard"
            onChange={(e) => { setResponse(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" sx={{
            backgroundColor: "#ffdf00", color: "black", "&:hover": {
              backgroundColor: "#ffff00",
            }
          }} >Cancel</Button>
          <Button onClick={submitResponse} variant="contained" sx={{
            backgroundColor: "#ffdf00", color: "black", "&:hover": {
              backgroundColor: "#ffff00",
            }
          }} >Submit</Button>
        </DialogActions>
      </Dialog>
        </Grid>
      </Box>
    </Container>
    </Box>
  );
};

export default PageN12;
