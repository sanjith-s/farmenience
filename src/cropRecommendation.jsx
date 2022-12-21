import React from "react";

import { useState, useRef } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import Crop from "./components/cropML";

const PageN2 = () => {
  const [file, setFile] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <center><b><span className="title">Find out the most suitable crop to grow in<br />your farm</span></b></center>
      <Stack
        sx={{ height: "70vh", width: "vw", marginTop: "30px" }}
      >
        <Container
          sx={{
            bgcolor: "#D9D9D9;",
            height: "auto",
            width: "60vw",
            borderRadius: "50px",
            display: "flex",
            flex: "100%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            //overflow: "auto"
          }}
        >
          <Crop />
        </Container>
      </Stack>
      <br /><br /><br /><br /><br />
      <Box textAlign="center" padding={"20px"}>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
          Predict
        </Button>
      </Box>
    </div>
  );
};

export default PageN2;
