import React from "react";
import AppointmentList from "../components/AppointmentList";
import { Typography, Box, Card } from "@mui/material";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function N13() {
    const appointmentList = [
        {
            appID: 1,
            appName: "Check Land",
            clientName: "Ram",
            dateTime: "02/02/2023 10:30",
            location: "Chennai"
        },
        {
            appID: 2,
            appName: "pH Test",
            clientName: "Mohan",
            dateTime: "03/02/2023 16:45",
            location: "Mumbai"
        },
        {
            appID: 3,
            appName: "Test of Soil Fertility",
            clientName: "Shyam",
            dateTime: "05/02/2023 11:00",
            location: "Jaipur"
        },
        {
            appID: 4,
            appName: "Applying loan",
            clientName: "Ganesh",
            dateTime: "08/02/2023 08:15",
            location: "Madurai"
        },
        {
            appID: 5,
            appName: "Choosing right irrigation pattern",
            clientName: "Mukesh",
            dateTime: "09/02/2023 13:30",
            location: "Cochin"
        },
    ];
    const [data,setData]=useState([]);

    useEffect(() => {
        let token = Cookies.get('token');
        Axios.get('http://localhost:5000/getmeets', { headers: { tokenstring: token } }).
            then((response) => {
                setData(response.data.message);
            })
            .catch((res) => {
                if (res.response.data.message === 'Error in connection') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please Check Network Connection!',
                    })
                }
                else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Login Error',
                    })
                    navigate('../login')
                }
            })
    }, []);

    return (
        <Card
            style={{
                padding: "1.25rem 0rem 1.875rem 0rem",
                margin: "1.875rem 6.25rem",
                borderRadius: "0.75rem",
                border: "0.125rem solid",
            }}
        >
            <Box>
                <Typography
                    style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        fontSize: "2.375rem",
                        fontWeight: "600",
                    }}
                >
                    APPOINTMENT LIST
                </Typography>
            </Box>
            <br></br>
            <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <AppointmentList data={data} />
            </Box>
        </Card>
    );
}
export default N13;
