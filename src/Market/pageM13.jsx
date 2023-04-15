import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  Box,
  Container,
  CssBaseline,
  Skeleton,
} from "@mui/material";

function PageM13() {
  const location = useLocation();
  return (
    <Container>
      <CssBaseline />

      <Box sx={{ margin: "30px 0px" }}>
        <Card sx={{ backgroundColor: "green" }}>
          <Typography
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: 600,
              fontSize: "25px",
              textTransform: "uppercase",
              padding: "6px 0px",
            }}
          >
            {location.state ? location.state.from : "payment method"}
          </Typography>
        </Card>

        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              width: "50%",
            }}
          >
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: "4rem", bgcolor: "grey.400" }}
            />
            <Box
              sx={{
                display: "flex",
                columnGap: "30px",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="circular"
                width={100}
                height={100}
                animation="wave"
                sx={{ bgcolor: "grey.400" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Skeleton
                  variant="rounded"
                  width={200}
                  animation="wave"
                  sx={{ bgcolor: "grey.400" }}
                />
                <Skeleton
                  variant="rounded"
                  width={200}
                  animation="wave"
                  sx={{ bgcolor: "grey.400" }}
                />
              </Box>
            </Box>
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={120}
              sx={{ bgcolor: "grey.400" }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={120}
              sx={{ bgcolor: "grey.400" }}
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default PageM13;
