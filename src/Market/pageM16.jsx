import React from "react";
import Negotiate from "../components/negotitate_price";
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
  {
    Name: "Product 2",
    Quantity: 40,
    Type: "Type 2",
    Buyer: "Sanjith",
    Address: "Chennai",
    Price: 4254,
  },
  {
    Name: "Product 3",
    Quantity: 48,
    Type: "Type 3",
    Buyer: "Kumar",
    Address: "madurai",
    Price: 7890,
  },
];

const PageM16 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2.1875rem",
      }}
    >
      <Typography
        id="title"
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "37.5rem",
          fontSize: "2.8125rem",
          marginBottom: "1.25rem",
        }}
      >
        Negotiate Prices
      </Typography>
      <Box
        sx={{
          border: ".375rem solid",
          width: "95%",
          padding: "1.5625rem",
          borderRadius: ".5rem",
          display: "flex",
          flexDirection: "column",
          rowGap: "1.875rem",
          backgroundColor: "#86fe9ede",
        }}
      >
        {content.map((id, key) => {
          return (
            <Box>
              <Negotiate
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

export default PageM16;
