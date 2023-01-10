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
    <Container style={{ padding: "30px 0px" }}>
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
          border: "3px solid",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "20px",
          padding: "30px 0px",
          backgroundColor: "#7bff96",
          margin: "26px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" style={{ textTransform: "uppercase" }}>
          Confirmation
        </Typography>
        <Box
          sx={{
            width: "400px",
            borderRadius: "8px",
            border: "4px solid #000",
            backgroundColor: "#fff",
          }}
        >
          <CardContent style={{ padding: "15px 25px", borderRadius: "8px" }}>
            <Stack>
              {itemsName.map((value, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      columnGap: "20px",
                      justifyContent: "space-between",
                      height: "50px",
                      alignItems: "center",
                      margin: "2px 0px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
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
        <Box sx={{ display: "flex", columnGap: "50px" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "green",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            edit
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "green",
              fontWeight: "600",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            publish
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PageM19;
