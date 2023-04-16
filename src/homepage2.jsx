import React from "react";
import "./css/pageM18.css";
import Cookies from "js-cookie";
import Axios from "axios"
import { useNavigate } from "react-router-dom/dist";
import { Box, Button, Typography } from "@mui/material";
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';

const Homepage2 = () => {
  const navigate = useNavigate();

  async function logout() {
    let token = Cookies.get("token");
    await Axios.get(`${baseURL}/logout`, {
      headers: { tokenstring: token },
    })
      .then(async (response) => {
        if (response.data.message == "Logout Successful") {
          await Swal.fire({
            icon: 'success',
            title: 'Logout Successful!',
          })
          Cookies.remove("token");
          navigate("../login");
        } else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error in logging out!',
          })
        }
        console.log(response);
      })
      .catch(async (response) => {
        if (
          response.response.data.message === "Token not found" ||
          response.response.data.message === "Logout Fail, Please Logout Again"
        ) {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please login, before logout!',
          })
          navigate("../login");
        }
        if (response.response.data.message === "Invalid token") {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login expired, please login again!',
          })
          navigate("../login");
        }
      });
  }
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "1.875rem" }}>
      <Box sx={{ marginTop: "1.875rem", textAlign: "center" }}>
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
