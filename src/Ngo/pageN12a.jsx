import React from 'react'
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Box,
  CardContent,
  Stack,
  Typography,
  Button,
  Container,
  TextField
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

const PageN12 = () => {

  const [open1, setOpen1] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1x, setOpen1x] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);


  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClickOpen1x = () => {
    setOpen1x(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
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
        VIEW QUERIES
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: ".1875rem solid",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "1.25rem",
          padding: "1.875rem 0rem",
          backgroundColor: "#7bff96",
          margin: "1.625rem",
          borderRadius: ".5rem",
        }}
      >
        <Box
          sx={{
            width: "62.5rem",
            borderRadius: ".5rem",
            border: ".25rem solid #000",
            backgroundColor: "#fff",
          }}
        >
          <Grid container spacing={2} >
            <Grid container item xs={6} direction="column" >
              <CardContent style={{ padding: ".9375rem 1.5625rem", borderRadius: ".5rem" }}>
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
                          margin: ".125rem 0rem",
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
            {/* <Dialog
              open={open}
              keepMounted
              onClose={() => { setOpen(false) }}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>Response to Ramesh</DialogTitle>
              <DialogContent>
                <Stack spacing={3}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="message"
                    label="Response message"
                    multiline
                    rows={4}
                    defaultValue="Enter Reponse message here"
                  />
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                <Button onClick={() => { setOpen(false) }}>Send</Button>
              </DialogActions>
            </Dialog> */}

            <Grid container item xs={6} direction="column" >
              <CardContent style={{ padding: ".9375rem 1.5625rem", borderRadius: ".5rem" }}>
                <Stack>
                  {itemsName2.map((value, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          columnGap: "1.25rem",
                          justifyContent: "space-between",
                          height: "3.125rem",
                          alignItems: "center",
                          margin: ".125rem 0rem",
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
        <Dialog
          open={open2}
          onClose={() => { setOpen2(false) }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            {"Sender Details"}
          </DialogTitle>
          <DialogContent>
            <Stack direction="row" spacing={2}>
              <Typography variant="h6">
                {"Ramesh"}
              </Typography>
              <Button>Show Profile</Button>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { setOpen2(false) }}>Close</Button>
          </DialogActions>
        </Dialog>
        <Box sx={{ display: "flex", columnGap: "3.125rem" }}>
          <Button onClick={handleClickOpen1}
            variant="contained"
            style={{
              backgroundColor: "green",
              fontWeight: "600",
              fontSize: "1.125rem",
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
          <Button onClick={handleClickOpen2}
            variant="contained"
            style={{
              backgroundColor: "green",
              fontWeight: "600",
              fontSize: "1.125rem",
            }}
          >
            SENDER DETAILS
          </Button>

          <Button onClick={() => { setOpen(true) }}
            variant="contained"
            style={{
              backgroundColor: "green",
              fontWeight: "600",
              fontSize: "1.125rem",
            }}
          >
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Respond
            </Typography>
          </Button>
         
        </Box>
      </Box>
    </Container>
  );
};

export default PageN12;