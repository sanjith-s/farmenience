import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState, useRef } from "react";
import Select from "react-select";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const PageM6 = () => {
  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2} columns={16} sx={{height: "70vh", width: "100vw"}}>
        <Grid xs={8}>
          <Box sx={{ bgcolor: "#ffff", height: "100%" }} />
        </Grid>
        <Grid xs={8}>
          <Box sx={{ bgcolor: "#ffff", height: "100%" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default PageM6;
