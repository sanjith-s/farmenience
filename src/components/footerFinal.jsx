import React from 'react'
import { Link, useLocation } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
    Input,
    InputAdornment,
    IconButton,
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
} from "@mui/material";
import { TextField } from '@mui/material';
import "../css/footer.css";

const Footer = () => {

    const [open1, setOpen1] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [open1x, setOpen1x] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
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
        <Container style={{ padding: "30px 0px" }}>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "3px solid",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px 0px",
                    backgroundColor: "#7bff96",
                    margin: "0px",
                    borderRadius: "8px",
                    height: "100%",
                    width: "100%",
                    background: "rgba(22, 229, 117, 1)"
                }}
            >
                <Grid container>
                    <Grid container item xs={5} direction="column" className="foot-body">
                        <CardContent style={{ borderRadius: "8px" }}>
                            <Stack>
                                {/* {itemsName1.map((value, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                columnGap: "20px",
                                                justifyContent: "space-between",
                                                height: "50px",
                                                alignItems: "center",
                                                margin: "2px 0px",
                                            }}
                                        >
                                            <Typography
                                                style={{
                                                    fontWeight: "600",
                                                    fontSize: "20px",
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
                                    );
                                })} */}
                                <Box className="foot-items" sx={{ display: "flex" }}>
                                    <LocationOnIcon className="foot-items-logo" />
                                    <Typography sx={{ fontSize: "18px" }}>
                                        Sardar Patel Road, Guindy, Chennai<br />Tamilnadu, India<br />Pincode: 600025
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", marginTop: "20px" }}>
                                    <PhoneIcon className="foot-items-logo" />
                                    <Typography sx={{ fontSize: "18px" }}>
                                        +91 99999 99999
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", marginTop: "20px" }}>
                                    <EmailIcon className="foot-items-logo" />
                                    <Typography sx={{ fontSize: "18px" }}>
                                        farmenience23@gmail.com
                                    </Typography>
                                </Box>

                            </Stack>
                        </CardContent>
                    </Grid>

                    <Grid container item xs={7} direction="column" >
                        <CardContent style={{ padding: "15px 25px", borderRadius: "8px" }}>
                            <Stack>
                                <Box sx={{ display: "flex", marginTop: "20px" }}>
                                    <Typography sx={{ fontSize: "18px" }}>
                                        <b>ABOUT THE COMPANY</b><br />Farmenience is a website that is built to make farming convenient and economical for the farmers. We are providing solutions to the existing problems in the field of agriculture to make India a healthier economy. {<Link href="N1">{'CLick me to know more'}</Link>}
                                    </Typography>
                                </Box>
                                <Box className="iconFlex" sx={{ display: "flex", marginTop: "20px" }}>
                                    <FacebookIcon /><TwitterIcon /><LinkedInIcon /><InstagramIcon />
                                </Box>
                            </Stack>
                        </CardContent>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer