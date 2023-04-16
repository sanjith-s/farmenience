import React from "react";
import { Link, useLocation } from "react-router-dom";
import lineGraph from "../images/lineGraph.png";

import {
    InputAdornment,
    FormControl,
    FilledInput,
    InputLabel, Button,
    Container,
    Typography,
    CssBaseline,
    Box,
    Card,
    CardMedia,
} from "@mui/material";
import profilePhoto from "../images/face1.jpg";
import file from "../images/farm_land.jpg";
import Page10Nav from "../components/page10Nav";
import Chart from "../components/chart";

function PageM10() {
    return (
        <Container
            style={{
                padding: ".9375rem 0rem",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                rowGap: ".9375rem",
            }}
        >
            <CssBaseline />
            <Box>
                <Page10Nav title="buyer dashboard" />
            </Box>
            <Box
                sx={{
                    position: "relative ",
                    // width: "31.25rem",
                    backgroundColor: "#86fe9ede",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "1.875rem 0rem",
                    border: ".0625rem solid #000",
                    borderRadius: ".25rem",
                }}
            >
                <Box
                    sx={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <FormControl fullWidth variant="filled" style={{
                            width: "37.5rem"
                        }}>
                        <InputLabel>
                            <Typography
                                variant="h6"
                                style={{
                                    color: "darkgreen",
                                    fontWeight: "600",
                                }}
                            >
                                Enter Appointment ID
                            </Typography>
                        </InputLabel>
                        <FilledInput
                            type="text"
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            style={{
                                borderRadius: ".3125rem",
                                borderBottomLeftRadius: "0rem",
                                borderBottomRightRadius: "0rem",
                            }}
                        />
                    </FormControl>
                </Box>
                <Button
                    variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                        backgroundColor:"#ffff00",
                      } }}
                    style={{
                        position: "absolute",
                        bottom: ".625rem",
                        right: ".625rem",
                    }}
                >
                    <Link
                        to="/N14a"
                        state={{
                            from: "market list",
                        }}
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            style={{
                                color: "#ffffff",
                                fontWeight: "600",
                                fontSize: "1rem",
                            }}
                        >
                            SEARCH
                        </Typography>
                    </Link>
                </Button>
            </Box>
            
        </Container>
    );
}

export default PageM10;
