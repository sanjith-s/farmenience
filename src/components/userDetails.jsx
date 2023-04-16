import React, { useState } from "react";
import { Box, Card, TextField, Typography, Dialog, DialogTitle, DialogActions,Button } from "@mui/material";

function UserDetails(props) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [address, setAddress] = useState(props.userAddress);
  const addressHandler = (event) => {
    let newAddress = event.target.value;
    if (newAddress.length >= 1)
      setAddress(newAddress);
    else {
      setOpen1(true);
    }
  };

  const [name, setName] = useState(props.userName);
  const nameHandler = (event) => {
    let newName = event.target.value;
    if (newName.length >= 1)
      setName(newName);
    else {
      setOpen2(true);
    }
  };

  const [number, setNumber] = useState(props.userNumber);
  const numberHandler = (event) => {
    let newNumber = event.target.value;
    if (newNumber.length >= 1)
      setNumber(newNumber);
    else {
      setOpen3(true);
    }
  };

  props.onDataHandler(name, address, number);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "1.25rem",
        margin: ".5rem 0rem",
        borderRadius: ".25rem",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "600",
          marginBottom: "0.938rem",
          alignSelf: "center",
        }}
      >
        consumer details
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          width: "100%",
          paddingTop: "1.25rem",
        }}
      >
        <TextField
          type="text"
          onChange={nameHandler}
          id="standard-basic"
          defaultValue={name}
          variant="standard"
          label={
            <Typography
              variant="body1"
              style={{
                textTransform: "uppercase",
                color: "#2e7d32",
              }}
            >
              name
            </Typography>
          }
        />
        <TextField
          multiline
          fullWidth
          maxRows={2}
          onChange={addressHandler}
          id="standard-basic"
          defaultValue={address}
          variant="standard"
          label={
            <Typography
              variant="body1"
              style={{
                textTransform: "uppercase",
                color: "#2e7d32",
              }}
            >
              address
            </Typography>
          }
        />
        <TextField
          type="tel"
          onChange={numberHandler}
          id="standard-basic"
          defaultValue={number}
          variant="standard"
          label={
            <Typography
              variant="body1"
              style={{
                textTransform: "uppercase",
                color: "#2e7d32",
              }}
            >
              number
            </Typography>
          }
        />
      </Box>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Address field is empty
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
          Name field is empty
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
          Number field is empty
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose3}>Ok</Button>
        </DialogActions>
      </Dialog>

    </Card>
  );
}

export default UserDetails;
