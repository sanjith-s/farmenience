import React from "react";
import { Box, Typography } from "@mui/material";

function PriceDetails(props) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0px",
          width: "70%",
          margin: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "8px 0px",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            {props.productName}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            margin: "8px 0px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            mrp
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
            }}
          >
            {props.mrp}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            margin: "8px 0px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            product discount
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
            }}
          >
            {props.discount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PriceDetails;
