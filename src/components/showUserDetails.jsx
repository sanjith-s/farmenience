import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

function ShowUserDetails(props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "1.25rem",
        margin: ".5rem 0rem",
        borderRadius: ".25rem",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "600",
          alignSelf: "center",
        }}
      >
        Receiver Details
      </Typography>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: ".3125rem",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", columnGap: "1.25rem", margin: ".3125rem 0rem" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              width: "20%",
            }}
          >
            fullname
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              width: "70%",
            }}
          >
            {props.userName}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", columnGap: "1.25rem", margin: ".3125rem 0rem" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              width: "20%",
            }}
          >
            phone number
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              width: "70%",
            }}
          >
            {props.userNumber}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", columnGap: "1.25rem", margin: ".3125rem 0rem" }}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              width: "20%",
            }}
          >
            residential address
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "1.125rem",
              overflow: "auto",
              width: "80%",
            }}
          >
            {props.userAddressLine1},<br/> {props.userAddressLine2}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ShowUserDetails;
