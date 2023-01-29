import React from 'react'
import { Link, useLocation } from "react-router-dom";
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
  "Query ID",
  "Query Type",
  "Description",
  "Date",
];

const itemsName2 = [
  "Query Name",
  "",
  "",
  "",
];

const itemsValue1 = ["lorem ipsum", "lorem ipsum", "lorem ipsum", "29 November 2022"];
const itemsValue2 = ["lorem ssss", "", "", ""];

const PageN12a = () => {

  const [open1, setOpen1] = React.useState(false);
  const [open1x, setOpen1x] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClickOpen1x = () => {
    setOpen1x(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
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
    <Container style={{ padding: "30px 0px" }}>
    <Typography
      variant="h3"
      style={{ textTransform: "uppercase", textAlign: "center" }}
    >
      VIEW QUERIES
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "3px solid",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "20px",
        padding: "30px 0px",
        backgroundColor: "#7bff96",
        margin: "26px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          width: "1000px",
          borderRadius: "8px",
          border: "4px solid #000",
          backgroundColor: "#fff",
        }}
      >
        <Grid container spacing={2} >
          <Grid container item xs={6} direction="column" >
            <CardContent style={{ padding: "15px 25px", borderRadius: "8px" }}>
              <Stack>
                {itemsName1.map((value, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        columnGap: "20px",
                        justifyContent: "space-between",
                        height: "50px",
                        alignItems: "center",
                        margin: "2px 0px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
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
          <Grid container item xs={6} direction="column" >
            <CardContent style={{ padding: "15px 25px", borderRadius: "8px" }}>
              <Stack>
                {itemsName2.map((value, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        columnGap: "20px",
                        justifyContent: "space-between",
                        height: "50px",
                        alignItems: "center",
                        margin: "2px 0px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          textTransform: "uppercase",
                        }}
                      >
                        {value}
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ textTransform: "capitalize" }}
                      >
                        {itemsValue2[index]}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </CardContent>
          </Grid>
        </Grid>

      </Box>
      <Box sx={{ display: "flex", columnGap: "50px" }}>
        <Button onClick={handleClickOpen1}
          variant="contained"
          style={{
            backgroundColor: "green",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          DELETE
        </Button>
        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to delete the query ?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose1}>No</Button>
            <Button onClick={handleClickOpen1x} autoFocus> Yes
              <Dialog
                open={open1x}
                onClose={handleClose11x}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Query Deleted"}
                </DialogTitle>
                <DialogActions>
                  <Button onClick={handleClose11x}>
                    <Link
                      to="/N12"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        style={{
                          color: "blue",
                          fontWeight: "600",
                          fontSize: "16px",
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
        <Button onClick={handleClickOpen2}
          variant="contained"
          style={{
            backgroundColor: "green",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          SENDER DETAILS
        </Button>
        {/* <Dialog
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
              <Link
                to="/N14"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  style={{
                    color: "blue",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Ok
                </Typography>
              </Link>
            </Button>
          </DialogActions>
        </Dialog> */}
        <Button onClick={handleClickOpen3}
          variant="contained"
          style={{
            backgroundColor: "green",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          <Link
            to="/N12a"
            style={{ textDecoration: "none" }}
          >
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Respond
            </Typography>
          </Link>
        </Button>
      </Box>
    </Box>
  </Container>
);
};

export default PageN12a