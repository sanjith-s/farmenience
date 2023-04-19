import React from "react";
import Axios from "axios";
import { useState } from "react";
import { CssBaseline, Container, Button, Box, TextField, Stack, Divider, Typography } from "@mui/material";
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';

const CropRec = () => {
  const [nitrogen, setNitrogen] = useState(0);
  const [phosphorous, setPhosphorous] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [ph, setPh] = useState(0);
  const [rainfall, setRainfall] = useState(0);

  async function CheckNitrogen() {
    if (nitrogen > 0 && nitrogen <= 100) {
      CheckPhosphorous();
    }

    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nitrogen value is invalid!',
      })
    }
  }

  async function CheckPhosphorous() {
    if (phosphorous > 0 && phosphorous <= 100) {
      CheckPotassium();
    }

    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Phosphorous value is invalid!',
      })
    }
  }

  async function CheckPotassium() {
    if (potassium > 0 && potassium <= 100) {
      CheckTemp();
    }

    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Potassium value is invalid!',
      })
    }
  }

  async function CheckTemp() {
    if (temp > 0 && temp <= 50) {
      CheckHumidity();
    }

    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Temperature value is invalid!',
      })
    }
  }

  async function CheckHumidity() {
    if (humidity > 0 && nitrogen <= 100) {
      CheckPH();
    }

    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Humidity value is invalid!',
      })
    }
  }

  async function CheckPH() {
    if (ph > 0 && ph <= 14) {
      CheckRainfall();
    }

    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'pH value is invalid!',
      })
    }
  }

  async function CheckRainfall() {
    if (rainfall > 0 && rainfall <= 1000) {
      PredictCrop();
    }

    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rainfall value is invalid!',
      })
    }
  }

  async function PredictCrop() {
    await Axios.post(`${baseURL}/ml_model/crop_recomendation`, {
      N: nitrogen,
      P: phosphorous,
      K: potassium,
      temperature: temp,
      humidity: humidity,
      ph: ph,
      rainfall: rainfall,
    })
      .then(async (response) => {
        console.log(response);
        await Swal.fire({
          icon: 'info',
          title: "Crop recommended is: " + response.data
        })
      })
      .catch(async (res, err) => {
        console.log(response);
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.response.data.message,
        })
      });
  }

  return (
    <div style={{ boxSizing: "borderBox", padding: "1.25rem" }}>
      <CssBaseline />
      <Typography fontWeight={700} fontSize={50} sx={{
        alignItems: "center",
        // marginLeft: "37.5rem"
        textAlign:"center"
      }}>Find suitable crop to grow</Typography>      <Stack
        sx={{ height: "70vh", width: "vw", marginTop: "1.875rem" }}
      >
        <Box
          sx={{
            // bgcolor: "#D9D9D9;",1
            height: "auto",
            width: "auto",
            borderRadius: "20px",
            display: "flex",
            // flex: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.563rem",
          }}
        >
          <Stack
            direction="row"
            sx={{
              // width: "100%",
              // display: "flex", 
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
              backgroundColor: "#ffff",
              borderBottomColor: "black",
              width: "50%",
              
            }}
          />
          <br />
          <TextField
            id="filled-basic"
            type="number"
            label="Phosphorus"
            variant="filled"
            color="success"
            onChange={(e) => { setPhosphorous(e.target.value) }}
            sx={{
              backgroundColor: "#ffff",
              borderBottomColor: "black",
              width: "50%",
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
              backgroundColor: "#ffff",
              borderBottomColor: "black",
              width: "50%",
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
              backgroundColor: "#ffff",
              borderBottomColor: "black",
              width: "50%",
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
              backgroundColor: "#ffff",
              borderBottomColor: "black",
              width: "50%",
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
              backgroundColor: "#ffff",
              borderBottomColor: "black",
              width: "50%",
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
              backgroundColor: "#ffff",
              borderBottomColor: "black",
              width: "50%",
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
        </Box>
      </Stack>
      <Box textAlign="center" padding={"5rem 15.625rem 3.125rem 15.625rem"}>
        <Button variant="contained" onClick={CheckNitrogen} sx={{ bgcolor: "#67d111",color:"white", margin: "auto" ,"&:hover": {backgroundColor: "#5ec45a", }}}>
          Predict
        </Button>
      </Box>
    </div>
  );
};

export default CropRec;