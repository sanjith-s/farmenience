import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";

const PageN10a = () => {
  const handleChange = (event) => {};

  const handleSubmit = () => {};

  const content = {
    id: "1",
    type: "request",
    name: "Visit to farm",
    date: "16/07/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tortor ligula, in ultricies est maximus nec. Mauris a porta est, ac iaculis ante. Etiam euismod mi sit amet aliquam efficitur. Aenean ante augue, tincidunt sit amet tristique nec, consectetur cursus dui. Cras placerat luctus diam et fringilla. Etiam elit est, efficitur eget ullamcorper nec, efficitur a lacus.",
    attachments: ["Image", "Bill", "PDF"],
  };

  return (
    <Container
      style={{
        padding: "15px 0px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        width: "100%",
        height: "100%",
      }}
    >
      <CssBaseline />

      <Grid
        container
        sx={{
          height: "100%",
          borderRadius: "20px",
          backgroundColor: "#16e575",
        }}
        columnSpacing={2}
      >
        <Grid
          xs={6}
          sx={{
            backgroundColor: "#1eeb69",
            borderTopLeftRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            border: "2px solid black",
            "&:hover": {
              backgroundColor: "white",
            },
            "&:hover .queries-icon": {
              color: "black",
              display: "none",
              transform: "scale(1.1,1.1)",
            },
            "&:hover .queries-text": {
              color: "black",
              transform: "scale(1.1,1.1)",
              display: "inline",
            },
          }}
        >
          <EmailIcon
            sx={{ color: "white", fontSize: "7rem" }}
            className="queries-icon"
          />
          <Typography
            className="queries-text"
            sx={{ color: "white", fontSize: "2rem", display: "none" }}
          >
            Queries
          </Typography>
        </Grid>
        <Grid
          xs={6}
          sx={{
            backgroundColor: "#1eeb69",
            borderTopRightRadius: "20px",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            "&:hover": {
              backgroundColor: "white",
            },
            "&:hover .appointment-icon": {
              color: "black",
              transform: "scale(1.1,1.1)",
              display: "none",
            },
            "&:hover .appointment-text": {
              color: "black",
              transform: "scale(1.1,1.1)",
              display: "inline",
            },
          }}
        >
          <CalendarMonthIcon
            sx={{ color: "white", fontSize: "7rem" }}
            className="appointment-icon"
          />
          <Typography
            className="appointment-text"
            sx={{ color: "white", fontSize: "2rem", display: "none" }}
          >
            Appointments
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "#1eeb69",
            borderBottomLeftRadius: "20px",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            "&:hover": {
              backgroundColor: "white",
            },
            "&:hover .profile-icon": {
              color: "black",
              transform: "scale(0.8,0.8)",
              display: "none"
            },
            "&:hover .profile-text": {
              color: "black",
              transform: "scale(1.1,1.1)",
              display: "inline",
            },
            width: "100%"
          }}
        >
          <AccountCircleIcon
            sx={{ color: "white", fontSize: "7rem" }}
            className="profile-icon"
          />
          <Typography
            className="profile-text"
            sx={{ color: "white", fontSize: "2rem", display: "none" }}
          >
            Profile
          </Typography>
        </Grid>
        <Grid
          xs={6}
          sx={{
            backgroundColor: "#1eeb69",
            borderBottomRightRadius: "20px",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            "&:hover ": {
              backgroundColor: "white",
            },
            "&:hover .logout-icon": {
              color: "black",
              transform: "scale(1.1,1.1)",
              display: "none",
            },
            "&:hover .logout-text": {
              color: "black",
              transform: "scale(1.1,1.1)",
              display: "inline",
            },
          }}
        >
          <LogoutIcon
            sx={{ color: "white", fontSize: "7rem" }}
            className="logout-icon"
          />
          <Typography
            className="logout-text"
            sx={{ color: "white", fontSize: "2rem", display: "none" }}
          >
            Logout
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageN10a;
