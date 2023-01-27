import React from "react";
import { Link } from "react-router-dom";
import "./css/pageM18.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import { Box, Button, Typography } from "@mui/material";

const Homepage2 = () => {
  const navigate = useNavigate();
  function logout() {
    let token = Cookies.get("token");
    Axios.get("http://localhost:5000/logout", {
      headers: { tokenstring: token },
    })
      .then((response) => {
        if (response.data.message == "Logout Successful") {
          alert("Logout Successful");
          Cookies.remove("token");
          navigate("../login");
        } else {
          alert("Error");
        }
        console.log(response);
      })
      .catch((response) => {
        if (
          response.response.data.message === "Token not found" ||
          response.response.data.message === "Logout Fail, Please Logout Again"
        ) {
          alert("Please login, before logout");
          navigate("../login");
        }
        if (response.response.data.message === "Invalid token") {
          alert("Login expried , please login again");
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
    </Box>
  );
};

export default Homepage2;
