import React, { useEffect } from "react";
import '../css/pageN14.css';
import Swal from 'sweetalert2'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import Cookies from 'js-cookie';
import Axios from "axios";
import {
    Grid,
    Box,
    CardContent,
    Stack,
    Typography,
    Button,
    Container,
    InputLabel,
    FilledInput
} from "@mui/material";
import { baseURL } from '../constants';

const PageN14b = () => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
    }

    const fullAnotherSpeak = (text) => {
        responsiveVoice.speak(text, "Tamil Male");
    }

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
        document.body.appendChild(addScript);
    }, []);

    const [date, setDate] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const name = location.state.name;
    const itemsName1 = [
        "Appointment ID",
    ];

    const itemsName2 = [
        "Client Name",
    ];

    const itemsValue1 = [id];
    const itemsValue2 = [name];

    const RescheduleAppointment = async () => {
        await Swal.fire({
            title: 'Do you want to reschedule the appointment?',
            html: "<b>Date : </b> " + date + "<br /><br />" + "<b>Time: </b>" + time,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let token = Cookies.get('token');
                await Axios.put(`${baseURL}//changeofschedule/${id}`, {
                    time: time,
                    date: date
                }, { headers: { tokenstring: token } }).
                    then((response) => {
                        console.log(response);
                        if (response.data.message === 'Requested for Change the schedule for the Meet') {
                            navigate('../N13');
                        }
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
                                text: 'Login Error!',
                            })
                            navigate('../login')
                        }
                        else {
                            await Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: res.response.data.message,
                            })
                        }
                    })
                await Swal.fire({
                    icon: 'success',
                    title: 'Appointment Rescheduled!',
                })
            }
        })
    };

    return (
<<<<<<< Updated upstream
        <Container style={{ padding: "1.875rem 0rem" }} id="google_translate_element" onClick={(e) => {
            fullAnotherSpeak(e.target.innerText)
        }}>
=======
        <Container  style={{ padding: "1.875rem 0rem" }}>
>>>>>>> Stashed changes
            <Typography
                variant="h3"
                style={{ textAlign: "center" }}
            >
                Reschedule Appointment
            </Typography>
<<<<<<< Updated upstream
            <Box className="gx-d-flex justify-content-center"
=======
            <Box
                /* margin = {5} */
                 ml = {30} mb = {5} mt = {5} mr = {5} 
>>>>>>> Stashed changes
                sx={{
                    width:"700px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 10,
                    /* border: "0.19rem solid", */
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "1.25rem",
                    padding: "10px",
                    backgroundColor: "#ffffff",
                    borderRadius: "0.5rem",
                }}
            >
                    <Grid container spacing={2} >
                        <Grid container item xs={6} direction="column" >
                            <CardContent style={{ padding: "0.94rem 1.56rem", 
                            borderRadius: "0.5rem" }}>
                                <Stack>
                                    {itemsName1.map((value, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "grid",
                                                    columnGap: "1.25rem",
                                                    justifyContent: "space-between",
                                                    height: "15.625rem",
                                                    alignItems: "left",
                                                    margin: "0.125 0rem",
                                                }}
                                            >
                                                <Box padding="1.25rem">
                                                    <Typography
                                                    align = "left"
                                                        style={{
                                                            margin:"10px",
                                                            fontSize: "1rem",
                                                            padding: "7px",
                                                            fontWeight:600,
                                                            width:"200px",
                                                            borderRadius:"7px",
                                                        }}
                                                    >
                                                        {value}
                                                    </Typography>
                                                    <Typography
                                                        
                                                        style={{
                                                        margin:"10px",
                                                        fontSize: "1rem",
                                                        padding: "7px",
                                                        background: "#f5f5f5",
                                                        borderRadius: "4px",
                                                         }}
                                                    >
                                                        {itemsValue1[index]}
                                                    </Typography>
                                                </Box>
                                                <Box padding="1.25rem" >
                                                    <InputLabel>
                                                        <Typography
                                                            
                                                            style={{
                                                            margin:"5px",
                                                            fontSize: "1rem",
                                                            padding: "7px",
                                                            fontWeight:600,
                                                            width:"200px",
                                                            borderRadius:"7px",
                                                            color:"black"
                                                            }}
                                                        >
                                                            Date
                                                        </Typography>
                                                    </InputLabel>
                                                    <FilledInput
                                                    align = "left"
                                                        type="date"
                                                        onChange={(event) => {
                                                            setDate(event.target.value);
                                                        }}
                                                        style={{
                                                            margin:"5px",
                                                            borderRadius: "0.31rem",
                                                            borderBottomLeftRadius: "0rem",
                                                            borderBottomRightRadius: "0rem",
                                                            height: "2.5rem",
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        );
                                    })}
                                </Stack>
                            </CardContent>
                        </Grid>

                        <Grid container item xs={6} direction="column" >
                            <CardContent style={{ padding: "0.94rem 1.56rem", 
                            borderRadius: "0.5rem" }}>
                                <Stack>
                                    {itemsName2.map((value, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "grid",
                                                    columnGap: "1.25rem",
                                                    justifyContent: "space-between",
                                                    height: "15.625rem",
                                                    alignItems: "left",
                                                    margin: "0.125 0rem",
                                                }}
                                            >
                                                <Box padding="1.25rem">
                                                    <Typography
                                                    align = "left"
                                                        style={{
                                                            margin:"10px",
                                                            fontSize: "1rem",
                                                            padding: "7px",
                                                            fontWeight:600,
                                                            width:"200px",
                                                            borderRadius:"7px",
                                                        }}
                                                    >
                                                        {value}
                                                    </Typography>
                                                    <Typography
                                                    style = {{
                                                        margin:"10px",
                                                        fontSize: "1rem",
                                                        padding: "7px",
                                                        background: "#f5f5f5",
                                                        borderRadius: "4px",}}
                                                    >
                                                        {itemsValue2[index]}
                                                    </Typography>
                                                </Box>
                                                <Box padding="1.25rem">
                                                    <InputLabel>
                                                        <Typography
                                                             style={{
                                                                margin:"5px",
                                                                fontSize: "1rem",
                                                                padding: "7px",
                                                                fontWeight:600,
                                                                width:"200px",
                                                                borderRadius:"7px",
                                                                color:"black"
                                                                }}
                                                        >
                                                            Time
                                                        </Typography>
                                                    </InputLabel>
                                                    <FilledInput
                                                    align = "left"
                                                        type="time"
                                                        onChange={(event) => {
                                                            setTime(event.target.value);
                                                        }}
                                                        style={{
                                                            margin:"5px",
                                                            borderRadius: "0.31rem",
                                                            borderBottomLeftRadius: "0rem",
                                                            borderBottomRightRadius: "0rem",
                                                            height: "2.5rem",
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        );
                                    })}
                                </Stack>
                            </CardContent>
                        </Grid>
                    </Grid>

                <Box  sx={{ columnGap: "3.125rem", justify: "center" }}>
                    <Button onClick={RescheduleAppointment}
                        variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                            backgroundColor:"#ffff00",
                          } }}
                        style={{
<<<<<<< Updated upstream
=======
                            margin:"20px",
                            color: "white",
                            backgroundColor: "blue",
                            /* backgroundColor: "green", */
                            fontWeight: "600",
                            fontSize: "1.125rem",
>>>>>>> Stashed changes
                            justify: "center",
                        }}
                    >
                        RESCHEDULE
                    </Button>
                </Box>
            </Box>
        </Container >
    );
};

export default PageN14b;
