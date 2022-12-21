import React from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { FormLabel } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Fab from "@mui/material/Fab";

const cropML = () => {
    return (
        <React.Fragment>
            <Stack
                direction="row"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
            </Stack>
            <TextField
                id="filled-basic"
                label="Nitrogen"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                label="Phosphorus"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                label="Potassium"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                label="pH Level"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                label="Rainfall (in mm)"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                label="State"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                label="City"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                display="flex"
                justifyContent="center"
            >
            </Stack>
        </React.Fragment>
    );
};

export default cropML;
