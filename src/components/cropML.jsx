import React, { useState } from "react";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const cropML = () => {
    const [nitrogen, setNitrogen] = useState(0);
    const [phosphorus, setPhosphorus] = useState(0);
    const [potassium, setPotassium] = useState(0);
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [ph, setPh] = useState(0);
    const [rainfall, setRainfall] = useState(0);

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
                type="number"
                label="Nitrogen"
                variant="filled"
                color="success"
                onChange={(e) => { setNitrogen(e.target.value) }}
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                type="number"
                label="Phosphorus"
                variant="filled"
                color="success"
                onChange={(e) => { setPhosphorus(e.target.value) }}
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                type="number"
                label="Potassium"
                variant="filled"
                color="success"
                onChange={(e) => { setPotassium(e.target.value) }}
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                type="number"
                label="Temperature (in °C)"
                variant="filled"
                color="success"
                onChange={(e) => { setTemp(e.target.value) }}
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                type="number"
                label="Humidity (in %)"
                variant="filled"
                color="success"
                onChange={(e) => { setHumidity(e.target.value) }}
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                type="number"
                label="ph Value of Soil"
                variant="filled"
                color="success"
                onChange={(e) => { setPh(e.target.value) }}
                sx={{
                    backgroundColor: "#C4E1C5",
                    borderBottomColor: "black",
                    width: "70%",
                }}
            />
            <br />
            <TextField
                id="filled-basic"
                type="number"
                label="Rainfall (in mm)"
                variant="filled"
                color="success"
                onChange={(e) => { setRainfall(e.target.value) }}
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
