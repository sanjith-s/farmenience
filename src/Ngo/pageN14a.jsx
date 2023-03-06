import React from "react";
import Swal from 'sweetalert2'
import { Link, useLocation } from "react-router-dom";
import file from "../images/farm_land.jpg";
import {
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

const itemsName1 = [
  "Appointment ID",
  "Appointment Name",
  "Soil Details",
  "Crop Details",
  "Client Name", 
  "Date", 
  "Time", 
  "Location"
];

const itemsName2 = [];

const itemsValue1 = [
  1,
  "To know pH level of soil",
  "Alluvial Soil",
  "Wheat, Sugarcane",
  "Mohan", 
  "29 November 2022" ,
  "10:30 PM", 
  "Chennai"
];

const itemsValue2 = [];

const PageM19 = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open1x, setOpen1x] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen1 = () => {
    Swal.fire({
      title: 'Do you want to delete the appointment?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Deleted!',
      })
      }
    })
  };

  const handleClickOpen1x = () => {
    setOpen1x(true);
  };

  const handleClickOpen2 = () => {
    Swal.fire({
      icon: 'success',
      title: 'Appointment Accepted !!'
    })
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose1x = () => {
    setOpen1x(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose11x = () => {
    setOpen1(false);
    setOpen1x(false);
  };

  return (
    <Container style={{ padding: "1.875rem 0rem" }}>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        VIEW APPOINTMENTS
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "0.19rem solid",
          justifyContent: "center",
          rowGap: "1.25rem",
          padding: "1.875rem 1.875rem",
          paddingRight:"0",
          backgroundColor: "#7bff96",
          margin: "1.625rem",
          borderRadius: "0.5rem",
        }}
      >
        <Stack direction={"row"}>
        <Box
          sx={{
            borderRadius: "0.5rem",
            border: "0.25rem solid #000",
            backgroundColor: "#fff",
            width:"100%"
          }}
        >
            <Grid container item xs={12} direction="column">
              <CardContent
                style={{ padding: "0.94rem", borderRadius: "0.5rem" }}
              >
                <Stack>
                  {itemsName1.map((value, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          columnGap: "1.25rem",
                          justifyContent: "space-between",
                          height: "3.125rem",
                          alignItems: "center",
                          margin: "0.125rem 0rem 0 0 0",
                        }}
                      >
                        <Typography
                          style={{
                            fontWeight: "600",
                            fontSize: "1.25rem",
                            textTransform: "uppercase",
                          }}
                        >
                          {value}
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{ textTransform: "capitalize" }}
                        >
                          {itemsValue1[index]}
                        </Typography>
                      </Box>
                    );
                  })}
                </Stack>
              </CardContent>
          </Grid>
        </Box>
        <Box>
        <Stack spacing={2} display="flex" justifyContent={"center"} alignContent="center" alignItems={"center"} >
        <img
              src={file}
              style={{
                width: "90%",
                height: "90%",
                marginLeft:"2%",
                objectFit: "fill",
                borderRadius: "3.125rem",
              }}
            /><br />
            <Stack direction={"column"} spacing={4}>
                   <Button
                   onClick={handleClickOpen1}
                   variant="contained"
                   style={{
                     backgroundColor: "green",
                     fontWeight: "600",
                     fontSize: "1.25rem",
                   }}
                 >
                   DELETE
                   </Button>
                   <Button
                    onClick={handleClickOpen2}
                    variant="contained"
                    style={{
                      backgroundColor: "green",
                      fontWeight: "600",
                      fontSize: "1.125rem",
                    }}
                  >
                    ACCEPT
                  </Button>
                    <Button
                       onClick={handleClickOpen3}
                       variant="contained"
                       style={{
                         color:"white",
                         backgroundColor: "green",
                         fontWeight: "600",
                         fontSize: "1.125rem",
                       }}
                     >
                       <Link to="/N14b" style={{ textDecoration: "none",color:"white" }}>                         
                           Reschedule
                       </Link>
                     </Button>
            </Stack>
            </Stack>
            </Box>
        </Stack>
        <Box sx={{ display: "flex", columnGap: "3.125rem", padding: "0rem 18.75rem" }}>
          
          <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Do you want to delete the appointment ?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose1}>No</Button>
              <Button onClick={handleClickOpen1x} autoFocus>
                {" "}
                Yes
                <Dialog
                  open={open1x}
                  onClose={handleClose11x}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Appointment Deleted"}
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={handleClose11x}>
                      <Link to="/N14" style={{ textDecoration: "none" }}>
                        <Typography
                          style={{
                            color: "blue",
                            fontWeight: "600",
                            fontSize: "1rem",
                          }}
                        >
                          Ok
                        </Typography>
                      </Link>
                    </Button>
                  </DialogActions>
                </Dialog>
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Appointment Accepted"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose2}>
                <Link to="/N14" style={{ textDecoration: "none" }}>
                  <Typography
                    style={{
                      color: "blue",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    Ok
                  </Typography>
                </Link>
              </Button>
            </DialogActions>
          </Dialog>
          
        </Box>
      </Box>
    </Container>
  );
};

export default PageM19;
