import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton, Typography, Box, CssBaseline } from "@mui/material";

function Page10Nav(props) {
  return (
    <Box
      sx={{
        bgcolor: "#74e81c",
        padding: ".3125rem",
        borderRadius: ".3125rem",
        display: "flex",
        justifyContent: "center",

        position: "relative",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          position: "absolute",
          left: "1.25rem ",
          top: ".4375rem",
          marginTop: "0rem",
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
            fontSize: "1.5625rem",
            marginTop: ".4375rem",
          }}
        >
          {props.title}
        </Typography>
      </Box>
    </Box>
  );
}
export default Page10Nav;
