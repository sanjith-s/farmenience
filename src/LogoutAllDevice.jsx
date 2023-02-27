import React from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import Axios from "axios";

const LogoutAllDevice = () => {
    const location = useLocation();
    const navigate=useNavigate();
    function fun()
    {
        Axios.post('http://localhost:5000/logoutAll',{
            email:location.state.email,
          }
          )
          .then((response) => {
            if (response.data.message == "Successful") {
              alert('Logout Successful');
              navigate('../login');
            }
            else
            {
              alert("Error");
            }
          }).
          catch((response)=>{
            alert(response.response.data.message);
          });
    }
    return (
        <div padding="100px">
          
          <Box
          sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
          >
           <Button onClick={fun} variant="contained" className="log-out-btn" endIcon={<LogoutIcon />} 
           sx={{
            backgroundColor:"#FF8787"
           }}
           >
            Logout from all device
           </Button>
           </Box>
        </div>
    );
};


export default LogoutAllDevice;