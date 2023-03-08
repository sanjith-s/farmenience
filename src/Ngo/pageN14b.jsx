import React from "react";
import Swal from 'sweetalert2'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import Cookies from 'js-cookie';
import Axios from "axios";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
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



const PageM19 = () => {

    const [open1, setOpen1] = React.useState(false);
    const [open1x, setOpen1x] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [date, setDate] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const id=location.state.id;
    const name=location.state.name;
    const itemsName1 = [
        "Appointment ID",
    ];
    
    const itemsName2 = [
        "Client Name",
    ];
    
    const itemsValue1 = [id];
    const itemsValue2 = [name];
    const handleClickOpen1 = () => {
        Swal.fire({
            title: 'Do you want to reschedule the appointment?',
            html: "<b>Date : </b> " + date + "<br /><br />" + "<b>Time: </b>" + time,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Appointment Rescheduled!',
                })
            }
        })
    };

    const handleClickOpen1x = () => {
        setOpen1x(true);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClickOpen3 = () => {
        setOpen3(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClose1x = () => {
        setOpen1x(false);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };

    const handleClose11x = () => {
        setOpen1(false);
        setOpen1x(false);
    };

    return (
        <Container style={{ padding: "1.875rem 0rem" }}>
            <Typography
                variant="h3"
                style={{ textTransform: "uppercase", textAlign: "center" }}
            >
                VIEW APPOINTMENTS
            </Typography>
            <Box
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
                    <Button onClick={handleClickOpen1}
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
                    <Dialog
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Do you want to reschedule to\n"} <br />{"Date: "}{date}<br />{"Time: "}{time} {"?"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose1}>No</Button>
                            <Button onClick={handleClickOpen1x} autoFocus> Yes
                                <Dialog
                                    open={open1x}
                                    onClose={handleClose11x}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Appointment Rescheduled"}
                                    </DialogTitle>
                                    <DialogActions>
                                        <Button onClick={handleClose11x}>
                                            <Link
                                                to="/N9"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <Typography
                                                    style={{
                                                        color: "blue",
                                                        fontWeight: "600",
                                                        fontSize: "1rem",
                                                    }}
                                                >
                                                    Ok
                                                </Typography>
                                            </Link>
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>
        </Container >
    );
};

export default PageM19;
