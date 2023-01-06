import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function PriceDetails(props) {
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
          alignSelf: "center",
          marginBottom: "20px",
        }}
      >
        price details
      </Typography>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0px",
            width: "70%",
          }}
        >
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
              product name
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
              }}
            >
              {props.productName}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default PriceDetails;
