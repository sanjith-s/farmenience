import "./../css/navbar.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Calendar from "./calender";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";

function NavbarBeforeLogin() {    
  return (
      <div className="navbar">
        <div className="nav-items item1">
          <a href="" className="nav-links">
            <img src="" className="cmp-logo" />
          </a>
        </div>
        <div className="nav-items item2">
          <a href="" className="nav-links  nav-brand">
            FARMENiENCE
          </a>
        </div>
        <div className="nav-items item3">
          <a href="/" className="nav-links">
            ABOUT US
          </a>
        </div>
        <Button variant="contained" href="../login">Login</Button>
      </div>
  );
}

export default NavbarBeforeLogin;
