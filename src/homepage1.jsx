import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Homepage1 = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1.875rem",
      }}
    >
      <Box sx={{ marginTop: "1.875rem", textAlign: "center" }}>
        <Typography variant="h4" style={{ textTransform: "uppercase" }}>
          Homepage Before Login
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "1.875rem",
        }}
      >
        <Button variant="contained">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Typography style={{ color: "white", fontWeight: "600" }}>
              signup
            </Typography>
          </Link>
        </Button>

        <Button variant="contained">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography style={{ color: "white", fontWeight: "600" }}>
              login
            </Typography>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage1;
