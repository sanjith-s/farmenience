import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import {
    Box,
    Typography,
} from "@mui/material";

const Logout = () => {
    // const navigate = useNavigate();
    // function fun() {
    //     Axios.post('http://localhost:5000/logoutAll', {
    //         email: location.state.email,
    //     }
    //     )
    //         .then((response) => {
    //             if (response.data.message == "Successful") {
    //                 alert('Logout Successful');
    //                 navigate('../login');
    //             }
    //             else {
    //                 alert("Error");
    //             }
    //         }).
    //         catch((response) => {
    //             alert(response.response.data.message);
    //         });
    // }
    
    return (
        <Box>
            <Box
                sx={{
                    margin: "1.875rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "2.5rem",
                }}
            >
                <Typography
                    variant="h4"
                    style={{ textAlign: "center" }}
                >
                    Thank you for using our website !
                </Typography>
            </Box>

            <Box
                sx={{
                    margin: "1.875rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "2.5rem",
                }}
            >
                <Typography
                    variant="h4"
                    style={{ textAlign: "center" }}
                >
                    We hope you had a pleasant experience !
                </Typography>
            </Box>
        </Box>
    );
};

export default Logout;