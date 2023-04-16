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

      <Box sx={{ margin: "1.875rem 0rem" }}>
        <Card sx={{ backgroundColor: "green" }}>
          <Typography
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: 600,
              fontSize: "1.5625rem",
              textTransform: "uppercase",
              padding: ".375rem 0rem",
            }}
          >
            {location.state ? location.state.from : "payment method"}
          </Typography>
        </Card>

        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.25rem",
            paddingBottom: "1.25rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: ".625rem",
              width: "50%",
            }}
          >
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: "64px", bgcolor: "grey.400" }}
            />
            <Box
              sx={{
                display: "flex",
                columnGap: "1.875rem",
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
                  rowGap: ".625rem",
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
