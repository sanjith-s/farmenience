import React from "react";
import Axios from "axios"
import { useState, useRef } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

//import Crop from "./components/cropML";

const CropRec = () => {

  const [nitrogen, setNitrogen] = useState(0);
  const [phosphorous, setPhosphorous] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [ph, setPh] = useState(0);
  const [rainfall, setRainfall] = useState(0);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  function CheckNitrogen() {
    if (nitrogen > 0 && nitrogen <= 100) {
      CheckPhosphorous();
    }

    else {
      setOpen1(true);
    }
  }

  function CheckPhosphorous() {
    if (phosphorous > 0 && phosphorous <= 100) {
      CheckPotassium();
    }

    else {
      setOpen2(true);
    }
  }

  function CheckPotassium() {
    if (potassium > 0 && potassium <= 100) {
      CheckTemp();
    }

    else {
      setOpen3(true);
    }
  }

  function CheckTemp() {
    if (temp > 0 && temp <= 50) {
      CheckHumidity();
    }

    else {
      setOpen4(true);
    }
  }

  function CheckHumidity() {
    if (humidity > 0 && nitrogen <= 100) {
      CheckPH();
    }

    else {
      setOpen5(true);
    }
  }

  function CheckPH() {
    if (ph > 0 && ph <= 14) {
      CheckRainfall();
    }

    else {
      setOpen6(true);
    }
  }

  function CheckRainfall() {
    if (rainfall > 0 && rainfall <= 1000) {
      PredictCrop();
    }

    else {
      setOpen7(true);
    }
  }

  function PredictCrop() {
    Axios.post("http://localhost:5000/ml_model/crop_recomendation", {
      N: nitrogen,
      P: phosphorous,
      K: potassium,
      temperature: temp,
      humidity: humidity,
      ph: ph,
      rainfall: rainfall,
    })
      .then((response) => {
        // if (response.data.message == "Success") {
        //   navigate("/login");
        // }
        // alert(1)
        alert(response.data)
      })
      .catch((res, err) => {
        alert(2)
        alert(res.response.data.message);
      });
  }

  return (
    <div style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <b><span text-align="center" className="title">Find out the most suitable crop to grow in your farm</span></b>
      <Stack
        sx={{ height: "70vh", width: "vw", marginTop: "30px" }}
      >
        <Container
          sx={{
            bgcolor: "#D9D9D9;",
            height: "auto",
            width: "60vw",
            borderRadius: "50px",
            display: "flex",
            flex: "100%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "25px"
            //overflow: "auto"
          }}
        >
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
            onChange={(e) => { setPhosphorous(e.target.value) }}
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
        </Container>
      </Stack>
      <Box textAlign="center" padding={"200px 250px 50px 250px"}>
        <Button variant="contained" onClick={CheckNitrogen} sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
          Predict
        </Button>
      </Box>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Nitrogen value is invalid
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Phosphorous value is invalid
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose2}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Potassium value is invalid
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose3}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Temperature value is invalid
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose4}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open5}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Humidity value is invalid
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose5}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open6}
        onClose={handleClose6}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          pH value is invalid
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose6}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open7}
        onClose={handleClose7}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Rainfall value is invalid
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose7}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CropRec;
