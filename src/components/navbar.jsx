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
import Link from '@mui/material/Link';

const drawerBleeding = 70;

const Root = styled("div")(({ theme }) => ({
  height: "6%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 0,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 2,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(100% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
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
          <a href="/" className="nav-links" color="black">
            HOME
          </a>
        </div>

        <Button className="dropbtn" variant="text" sx={{ color: "black" }} onClick={toggleDrawer(true)}>Show My schedules</Button>
        
        <div class="dropdown">
          <Button className="dropbtn">
            OPTIONS
          </Button>
          <div class="dropdown-content">
            <Link href='../N1'>View Queries</Link>
            <Link href='../N13'>View Appointments</Link>
            <Link href='../N7'>Create New Query</Link>
            <Link href='../N4'>Create New Appointment</Link>
          </div>
        </div>
        
        <div className="nav-items item5">
          <a href="" className="nav-links">
            <AccountCircleRoundedIcon fontSize="large" />
          </a>
        </div>
      </div>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
        <Calendar closeToggle={setOpen} />
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
