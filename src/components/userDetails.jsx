import React, { useState } from "react";
import { Box, Card, TextField, Typography } from "@mui/material";

function UserDetails(props) {
  const [address, setAddress] = useState(props.userAddress);
  const addressHandler = (event) => {
    let newAddress = event.target.value;
    setAddress(newAddress);
  };

  const [name, setName] = useState(props.userName);
  const nameHandler = (event) => {
    let newName = event.target.value;
    setName(newName);
  };

  const [number, setNumber] = useState(props.userNumber);
  const numberHandler = (event) => {
    let newNumber = event.target.value;
    setNumber(newNumber);
  };

  props.onDataHandler(name, address, number);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "20px",
        margin: "8px 0px",
        borderRadius: "4px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "600",
          marginBottom: "15 px",
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
