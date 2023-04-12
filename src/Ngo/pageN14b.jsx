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
        <Container style={{ padding: "1.875rem 0rem" }} id="google_translate_element" onClick={(e) => {
            fullAnotherSpeak(e.target.innerText)
        }}>
            <Typography
                variant="h3"
                style={{ textTransform: "uppercase", textAlign: "center" }}
            >
                RESCHEDULE APPOINTMENT
            </Typography>
            <Box className="gx-d-flex justify-content-center"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "0.19rem solid",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "1.25rem",
                    padding: "1.875rem 0rem",
                    backgroundColor: "#7bff96",
                    margin: "1.625rem",
                    borderRadius: "0.5rem",
                }}
            >
                <Box
                    sx={{
                        width: "62.5rem",
                        borderRadius: "0.5rem",
                        border: "0.25rem solid #000",
                        backgroundColor: "#fff",
                    }}
                >
                    <Grid container spacing={2} >
                        <Grid container item xs={6} direction="column" >
                            <CardContent style={{ padding: "0.94rem 1.56rem", borderRadius: "0.5rem" }}>
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
                                                    alignItems: "center",
                                                    margin: "0.125 0rem",
                                                }}
                                            >
                                                <Box padding="1.25rem">
                                                    <Typography
                                                        style={{
                                                            fontWeight: "600",
                                                            fontSize: "1.25rem",
                                                            textTransform: "uppercase",
                                                        }}
                                                    >
                                                        {value}
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        style={{ textTransform: "capitalize" }}
                                                    >
                                                        {itemsValue1[index]}
                                                    </Typography>
                                                </Box>
                                                <Box padding="1.25rem">
                                                    <InputLabel>
                                                        <Typography
                                                            variant="h6"
                                                            style={{
                                                                fontWeight: "600",
                                                                fontSize: "1.25rem",
                                                                textTransform: "uppercase",
                                                                color: "black",
                                                            }}
                                                        >
                                                            Date
                                                        </Typography>
                                                    </InputLabel>
                                                    <FilledInput
                                                        type="date"
                                                        onChange={(event) => {
                                                            setDate(event.target.value);
                                                        }}
                                                        style={{
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
                            <CardContent style={{ padding: "0.94rem 1.56rem", borderRadius: "0.5rem" }}>
                                <Stack>
                                    {itemsName2.map((value, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "grid",
                                                    columnGap: "1.25rem",
                                                    justifyContent: "space-between",
                                                    height: "15.625",
                                                    alignItems: "center",
                                                    margin: "0.125rem 0rem",
                                                }}
                                            >
                                                <Box padding="1.25rem">
                                                    <Typography
                                                        style={{
                                                            fontWeight: "600",
                                                            fontSize: "1.25rem",
                                                            textTransform: "uppercase",
                                                        }}
                                                    >
                                                        {value}
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        style={{ textTransform: "capitalize" }}
                                                    >
                                                        {itemsValue2[index]}
                                                    </Typography>
                                                </Box>
                                                <Box padding="1.25rem">
                                                    <InputLabel>
                                                        <Typography
                                                            variant="h6"
                                                            style={{
                                                                fontWeight: "600",
                                                                fontSize: "1.25rem",
                                                                textTransform: "uppercase",
                                                                color: "black",
                                                            }}
                                                        >
                                                            Time
                                                        </Typography>
                                                    </InputLabel>
                                                    <FilledInput
                                                        type="time"
                                                        onChange={(event) => {
                                                            setTime(event.target.value);
                                                        }}
                                                        style={{
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
                </Box>
                <Box sx={{ display: "flex", columnGap: "3.125rem", justify: "center" }}>
                    <Button onClick={RescheduleAppointment}
                        variant="contained"
                        style={{
                            backgroundColor: "green",
                            fontWeight: "600",
                            fontSize: "1.125rem",
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
