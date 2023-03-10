import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material/";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Menubar() {
  const [theme, setTheme] = useState("default");
  const onClickHandler = (e) => {
    setTheme("#16e575");
  };
  return (
    <AppBar position="relative" sx={{ bgcolor: "#48f559" }}>
      <Toolbar
        style={{
          color: "#000000",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "25px" }}>
          <IconButton>
            <HomeRoundedIcon fontSize="large" style={{ fill: "#000000" }} />
          </IconButton>
          <Typography variant="h5">
            <Button
              sx={{ color: "#000000", fontSize: "18px", fontWeight: "600" }}
            >
              Track Orders
            </Button>
          </Typography>
          <Typography variant="h5">
            <Button
              sx={{ color: "#000000", fontSize: "18px", fontWeight: "600" }}
            >
              View Requests{" "}
            </Button>
          </Typography>
          <Typography variant="h5">
            <Button
              sx={{ color: "#000000", fontSize: "18px", fontWeight: "600" }}
            >
              Enter Details
            </Button>
          </Typography>
        </Box>
        <IconButton>
          <NotificationsIcon fontSize="large" style={{ fill: "#000000" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Menubar;
