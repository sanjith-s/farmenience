import React from 'react'
// import { Link, useLocation } from "react-router-dom";
import Link from '@mui/material/Link';
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

    return (
        <Container maxWidth={false} disableGutters>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // border: "3px solid",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7bff96",
                    // borderRadius: "8px",
                    height: "100%",
                    width: "100%",
                    background: "rgba(22, 229, 117, 1)"
                }}
            >
                <Grid container>
                    <Grid container item xs={5} direction="column" className="foot-body">
                        <CardContent style={{ borderRadius: "8px" }}>
                            <Stack>
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
                                        <b>ABOUT THE COMPANY</b><br />Farmenience is a website that is built to make farming convenient and economical for the farmers. We are providing solutions to the existing problems in the field of agriculture to make India a healthier economy.<br /> {<Link href="../M17">{'Click me to know more'}</Link>}
                                    </Typography>
                                </Box>
                                <Box className="iconFlex" sx={{ display: "flex", marginTop: "20px" }}>
                                    <Link href="https://www.facebook.com/"><FacebookIcon /></Link>
                                    <Link href="https://www.twitter.com/"><TwitterIcon /></Link>
                                    <Link href="https://www.linkedin.com/"><LinkedInIcon /></Link>
                                    <Link href="https://www.instagram.com/"><InstagramIcon /></Link>
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