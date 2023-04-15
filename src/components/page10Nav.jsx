import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton, Typography, Box, CssBaseline } from "@mui/material";

function Page10Nav(props) {
  return (
    <Box
      sx={{
        bgcolor: "#74e81c",

        padding: "5px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",

        position: "relative",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          position: "absolute",
          left: "20px ",
          top: "7px",
          marginTop: "0px",
        }}
      >
        <IconButton color="success">
          <ArrowBackIosIcon style={{ color: "#ffffff" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "block",
        }}
      >
        <Typography
          color="#ffffff"
          style={{
            textTransform: "uppercase",
            fontWeight: "500",
            fontSize: "25px",
            marginTop: "7px",
          }}
        >
          {props.title}
        </Typography>
      </Box>
    </Box>
  );
}
export default Page10Nav;
