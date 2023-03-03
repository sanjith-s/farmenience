import React from "react";
import Details from "./components/NGOProfileComp";
import { Box, Typography } from "@mui/material";

const content = [
  {
    Name: "Product 1",
    Quantity: 24,
    Type: "Type 1",
    Buyer: "Harshit",
    Address: "Chennai",
    Price: 1234,
  },
];

const NGOProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "35px",
      }}
    >
      <Typography
        id="title"
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "600px",
          fontSize: "45px",
          marginBottom: "20px",
        }}
      >
        Negotiate Prices
      </Typography>
      <Box
        sx={{
          border: "6px solid",
          width: "95%",
          padding: "25px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          backgroundColor: "#86fe9ede",
        }}
      >
        {content.map((id, key) => {
          return (
            <Box>
              <Details
                key={key}
                name={id.Name}
                price={id.Price}
                quantity={id.Quantity}
                buyer={id.Buyer}
                type={id.Type}
                address={id.Address}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NGOProfile;