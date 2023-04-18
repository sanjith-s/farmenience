import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Axios from "axios";
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';
import { Typography } from '@material-ui/core';

const LogoutAllDevice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  async function fun() {
    await Axios.post(`${baseURL}/logoutAll`, {
      email: location.state.email,
    }
    )
      .then(async (response) => {
        if (response.data.message == "Successful") {
          await Swal.fire({
            icon: 'success',
            title: 'Logout Successful!',
          })
          Cookies.remove("token");
          localStorage.removeItem("auth");
          localStorage.removeItem("role");
          Cookies.remove("role");
          navigate('../login');
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error!',
          })
        }
      }).
      catch(async (response) => {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.response.data.message,
        })
      });
  }
  return (
    <div align="center" padding="6.25rem">

      <Box
        sx={{
          boxShadow: 15,
          backgroundColor: "#ffffff",
          padding: "10px",
          width: "30%",
          alignItems: "center",
          margin: "50px"
        }}
      >
        <Box><LogoutIcon sx={{ fontSize: 40 }}></LogoutIcon></Box>

        <Box margin={4}>
          <Button onClick={fun} variant="contained" className="log-out-btn"
            sx={{
              backgroundColor: "#138ac5"
            }}
          >
            <Typography sx={{ fontSize: "500px" }}>Logout from all device</Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};


export default LogoutAllDevice;