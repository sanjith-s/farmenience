import React from "react";

import {useRef } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import { Alert, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

const PageN7 = () => {
  const [file, setFile] = useState();
  const navigate=useNavigate();
  const [isUploaded, setIsUploaded] = useState(false);
  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [subject,setSubject]=useState("");
  const [desc,setDesc]=useState("");
  const postQuery = () => {
    let token=Cookies.get('token') ;
    Axios.post('http://localhost:5000/postquery',{subject:subject,
    description: desc
  },{headers: { tokenstring: token } }).
    then((response)=>{
      console.log(response);
      if(response.data.message==='Query Added Successfully')
      {
        alert('Query Added Successfully');
        navigate('../N1');
      }
    })
    .catch((res)=>{
      if(res.response.data.message==='Error in connection')
      {
        alert('Please Check Network');
      }
      else if(res.response.data.message==='Token not found'||res.response.data.message==='Invalid token'||res.response.data.message==='Session Logged Out , Please Login Again')
      {
        alert('Login error');
        navigate('../login')
      }
      else
      {
        alert(res.response.data.message);
      }
    })
  }
  return (
    <div style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <span className="title">Query Form</span>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ height: "70vh", width: "vw", marginTop: "30px" }}
      >
        <Container
          sx={{
            bgcolor: "#D9D9D9;",
            height: "100%",
            width: "60vw",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
           <React.Fragment>
      <TextField
        id="filled-basic"
        label="Query Subject"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        onChange={(e)=>{setSubject(e.target.value)}}
      />
      <TextField
        id="filled-basic"
        label="Description"
        variant="filled"
        color="success"
        InputProps={{
          endAdornment: <InputAdornment position="end"></InputAdornment>,
        }}
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        onChange={(e)=>{setDesc(e.target.value)}}
      />
      <Box textAlign="center" padding={"20px"}>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }} onClick={postQuery}>
          Submit
        </Button>
      </Box>
    </React.Fragment>
        

        </Container>
        <Container
          disableGutters={true}
          sx={{
            bgcolor: "#ffff",
            height: "100%",
            width: "40vw",
            borderRadius: "50px",
            paddingLeft: "0px",
            paddingRight: "0px",
            display: "flex",
            justifyItems: "center",
          }}
        >
          {!isUploaded && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <input
                type="file"
                id="imgUp"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <label
                htmlFor="imgUp"
                style={{ width: "fit-content", height: "fit-content" }}
              >
                <Fab component="span">
                  <FileUploadOutlinedIcon />
                </Fab>
                <br />
                <br />
              </label>
              <Typography>Upload Image</Typography>
            </div>
          )}
          {isUploaded && (
            <img
              src={file}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "50px",
              }}
            />
          )}
        </Container>
      </Stack>
    </div>
  );
};

export default PageN7;
