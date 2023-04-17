import React, { useState } from "react";
import { Box, Card, TextField, Typography } from "@mui/material";

function UserDetails(props) {
  const [address, setAddress] = useState(props.userAddress);
  const addressHandler = async (event) => {
    let newAddress = event.target.value;
    if (newAddress.length >= 1)
      setAddress(newAddress);
    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Address field is empty",
      })
    }
  };

  const [name, setName] = useState(props.userName);
  const nameHandler = async (event) => {
    let newName = event.target.value;
    if (newName.length >= 1)
      setName(newName);
    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Name field is empty",
      })
    }
  };

  const [number, setNumber] = useState(props.userNumber);
  const numberHandler = async (event) => {
    let newNumber = event.target.value;
    if (newNumber.length >= 1)
      setNumber(newNumber);
    else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Number field is empty",
      })
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
    </Card>
  );
}

export default UserDetails;
