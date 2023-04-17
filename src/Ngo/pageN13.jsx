import React from "react";
import AppointmentList from "../components/AppointmentList";
import { Typography, Box, Card } from "@mui/material";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from '../constants';

function PageN13() {
    const [data, setData] = useState([]);

    useEffect(() => {
        let token = Cookies.get('token');
        Axios.get(`${baseURL}/getmeets`, { headers: { tokenstring: token } }).
            then((response) => {
                setData(response.data.message);
            })
            .catch(async (res) => {
                if (res.response.data.message === 'Error in connection') {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please Check Network Connection!',
                    })
                }
                else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Login Error',
                    })
                    navigate('../login')
                }
            })
    }, []);

    return (
        <>
        <Box className="query-list">
            <h2 className="query-list__heading">You have {data.length } appointments</h2>
            {
                <AppointmentList data={data} />
            }
        </Box>
            
          </>
/*         <Card
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
        </Card> */
    );
}

export default PageN13;
