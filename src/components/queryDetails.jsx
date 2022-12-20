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

const SellItemCard = () => {
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
                label="Query ID"
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
                label="Query Subject"
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
                label="Description"
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
                label="Status"
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
                label="Response"
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
                label="Date of Submission"
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
                label="Date of Response"
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
                label="Details"
                variant="filled"
                color="success"
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
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

export default SellItemCard;
