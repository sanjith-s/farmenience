import React from "react";
import { Link, useLocation } from "react-router-dom";
import lineGraph from "./lineGraph.png";

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
import profilePhoto from "./face1.jpg";
import Page10Nav from "./components/page10Nav";
import Chart from "./components/chart";

function PageM10() {
    return (
        <Container
            style={{
                padding: "15px 0px",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                rowGap: "15px",
            }}
        >
            <CssBaseline />
            <Box>
                <Page10Nav title="buyer dashboard" />
            </Box>
            <Box
                sx={{
                    position: "relative ",
                    // width: "500px",
                    backgroundColor: "#86fe9ede",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "30px 0px",
                    border: "1px solid #000",
                    borderRadius: "4px",
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
                            width: "600px"
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
                                borderRadius: "5px",
                                borderBottomLeftRadius: "0px",
                                borderBottomRightRadius: "0px",
                            }}
                        />
                    </FormControl>
                </Box>
                <Button
                    variant="contained"
                    color="success"
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        fontWeight: "600",
                        fontSize: "15px",
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
                                fontSize: "16px",
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
