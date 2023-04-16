import React from "react";
import {
  Box,
  CardContent,
  Stack,
  Typography,
  Button,
  Container,
} from "@mui/material";

const itemsName = [
  "name of the product",
  "quantity",
  "pricing",
  "specific type",
  "location",
];

const itemsValue = ["rice", "5kg", "5000", "agro corps", "chennai"];

const PageM19 = () => {
  return (
    <Container style={{ padding: "1.875rem 0rem" }}>
      <Typography
        variant="h3"
        style={{ textTransform: "uppercase", textAlign: "center" }}
      >
        marketplace
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
        <Typography variant="h4" style={{ textTransform: "uppercase" }}>
          Confirmation
        </Typography>
        <Box
          sx={{
            width: "25rem",
            borderRadius: ".5rem",
            border: ".25rem solid #000",
            backgroundColor: "#fff",
          }}
        >
          <CardContent style={{ padding: ".9375rem 1.5625rem", borderRadius: ".5rem" }}>
            <Stack>
              {itemsName.map((value, index) => {
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
                      {itemsValue[index]}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", columnGap: "4.375rem" }}>
          <Button
             variant="contained"
             color="success"
          >
            edit
          </Button>
          <Button
            variant="contained"
            color="success"
          >
            publish
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PageM19;
