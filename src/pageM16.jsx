import React from "react";
import Negotiate from "./components/negotitate_price";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/material";

const content = [
  {
    Name: "Product 1",
    Quantity: 24,
    Type: "Type 1",
    Buyer: "Harshit",
    Address: "Chennai",
    Price: 123456789,
  },
  {
    Name: "Product 2",
    Quantity: 40,
    Type: "Type 2",
    Buyer: "Sanjith",
    Address: "Chennai",
    Price: 425456789,
  },
];

const PageM16 = () => {
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
          fontSize: "52px",
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
          height: "500px",
          overflow: "scroll",
          borderRadius: "8px",
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
