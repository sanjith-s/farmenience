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


const queryDetails = (props) => {
    console.log(props.query.oldQuery)
    return (
        <>
        
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
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query._id}
        />
        <br />
        <TextField
            id="filled-basic"
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query.subject}
        />
        <br />
        <TextField
            id="filled-basic"
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query.description}
        />
        <br />
        <TextField
            id="filled-basic"
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query.status}
        />
        <br />
        <TextField
            id="filled-basic"
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query.response}
        />
        <br />
        <TextField
            id="filled-basic"
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query.createdAt}
        />
        <br />
        <TextField
            id="filled-basic"
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query.updatedAt}
        />
        <br />
        <TextField
            id="filled-basic"
            variant="filled"
            color="success"
            sx={{
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "70%",
            }}
            value={props.query.responser}
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
        </>
        
    );
};

export default queryDetails;
