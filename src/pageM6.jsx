import React from "react";

import { useState, useRef } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const PageM6 = () => {
  return (
    <div style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <span className="title">Schedule meet with NGO</span>
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
          <TextField
            id="filled-basic"
            label="Product Name"
            variant="filled"
            color="success"
            sx={{
              backgroundColor: "#C4E1C5",
              borderBottomColor: "black",
              width: "70%",
            }}
          />
          <TextField
            id="filled-basic"
            label="Price"
            variant="filled"
            color="success"
            InputProps={{
              endAdornment: <InputAdornment position="end">₹</InputAdornment>,
            }}
            sx={{
              backgroundColor: "#C4E1C5",
              borderBottomColor: "black",
              width: "70%",
            }}
          />
          <TextField
            id="filled-basic"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            label="Quantity"
            variant="filled"
            color="success"
            sx={{
              backgroundColor: "#C4E1C5",
              borderBottomColor: "black",
              width: "70%",
            }}
          />
          <TextField
            id="filled-basic"
            label="Type"
            variant="filled"
            color="success"
            sx={{
              backgroundColor: "#C4E1C5",
              borderBottomColor: "black",
              width: "70%",
            }}
          />
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            display="flex"
            justifyContent="center"
          >
            <Button variant="contained" sx={{ bgcolor: "#1FE57A" }}>
              Add Item
            </Button>
            <Button variant="contained" sx={{ bgcolor: "#1FE57A" }}>
              Delete Item
            </Button>
          </Stack>
        </Container>
        <Container sx={{ bgcolor: "#ffff", height: "100%", width: "40vw" }} />
      </Stack>
      <Box textAlign="center">
        <Button variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default PageM6;
