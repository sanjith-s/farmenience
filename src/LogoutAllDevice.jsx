import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Axios from "axios";
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';

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
    <div padding="100px">

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button onClick={fun} variant="contained" className="log-out-btn" endIcon={<LogoutIcon />}
          sx={{
            backgroundColor: "#FF8787"
          }}
        >
          Logout from all device
        </Button>
      </Box>
    </div>
  );
};


export default LogoutAllDevice;