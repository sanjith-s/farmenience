import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/pageM18.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import { Box, Button, Typography, Dialog, DialogTitle, DialogActions } from "@mui/material";

const Homepage2 = () => {
  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  function logout() {
    let token = Cookies.get("token");
    Axios.get("http://localhost:5000/logout", {
      headers: { tokenstring: token },
    })
      .then((response) => {
        if (response.data.message == "Logout Successful") {
          setOpen1(true);
          Cookies.remove("token");
          navigate("../login");
        } else {
          setOpen2(true);
        }
        console.log(response);
      })
      .catch((response) => {
        if (
          response.response.data.message === "Token not found" ||
          response.response.data.message === "Logout Fail, Please Logout Again"
        ) {
          setOpen3(true);
          navigate("../login");
        }
        if (response.response.data.message === "Invalid token") {
          setOpen4(true);
          navigate("../login");
        }
      });
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>
      <Box sx={{ marginTop: "30px", textAlign: "center" }}>
        <Typography variant="h4" style={{ textTransform: "uppercase" }}>
          Homepage after Login
        </Typography>
      </Box>

      <Button
        onClick={logout}
        variant="contained"
        style={{
          alignSelf: "center",
        }}
      >
        <Typography style={{ color: "white", fontWeight: "600" }}>
          logout
        </Typography>
      </Button>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Logout Successful
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Error in logging out
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose2}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Please login, before logout
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose3}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Login expired, please login again
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose4}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Homepage2;
