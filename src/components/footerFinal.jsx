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
        <Container maxWidth={false} disableGutters style={{position:""}}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#7bff96",
                    height: "100%",
                    width: "100%",
                    background: "rgba(22, 229, 117, 1)"
                }}
                
            >
                <Grid container sx={{padding:"5px",paddingBottom:"0px"}} spacing={2}>
                    <Grid item sm={5} md={5} xs={12} direction="column" className="foot-body">
                        <CardContent style={{ borderRadius: "8px" }}>
                            <Stack style={{display:"flex",flexDirection:"column",rowGap:"15px"}}>
                                <Box className="foot-items" sx={{ display: "flex" }}>
                                    <LocationOnIcon className="foot-items-logo" style={{fill:"#333"}}  />
                                    <Typography sx={{ fontSize: "18px", fontFamily: "Roboto" }}>
                                        Sardar Patel Road, Guindy, Chennai<br />Tamilnadu, India<br />Pincode: 600025
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <PhoneIcon className="foot-items-logo" style={{fill:"#333"}} />
                                    <Typography sx={{ fontSize: "18px", fontFamily: "Roboto" }}>
                                        +91 99999 99999
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <EmailIcon className="foot-items-logo" style={{fill:"#333"}} />
                                    <Typography sx={{ fontSize: "18px", fontFamily: "Roboto" }}>
                                        farmenience23@gmail.com
                                    </Typography>
                                </Box>

                            </Stack>
                        </CardContent>
                    </Grid>

                    <Grid item sm={7} md={7} xs={12} direction="column" >
                        <CardContent style={{  borderRadius: "8px" }}>
                            <Stack>
                                <Box sx={{ display: "flex"}}>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Roboto" }}>
                                        ABOUT THE COMPANY
                                    </Typography>
                                </Box>
                                <Box className="regular" sx={{ display: "flex", marginTop: "20px" }}>
                                    <Typography className="regular" sx={{ fontSize: "16px" } } >
                                        Farmenience is a website that is built to make farming convenient and economical for the farmers. We are providing solutions to the existing problems in the field of agriculture to make India a healthier economy.<br /> {<Link href="../M17">{'Click me to know more'}</Link>}
                                    </Typography>
                                </Box>
                                <Box className="iconFlex" sx={{ display: "flex", marginTop: "20px",justifyContent:"center",columnGap:"20px" }}>
                                    <Link href="https://www.facebook.com/"><FacebookIcon style={{fill:"#333"}} /></Link>
                                    <Link href="https://www.twitter.com/"><TwitterIcon style={{fill:"#333"}} /></Link>
                                    <Link href="https://www.linkedin.com/"><LinkedInIcon style={{fill:"#333"}} /></Link>
                                    <Link href="https://www.instagram.com/"><InstagramIcon style={{fill:"#333"}} /></Link>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer;