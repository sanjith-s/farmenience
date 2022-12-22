import React from "react";
import { CardContent, CardActions, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function SalesCard(props) {
  const date = props.date.toLocaleDateString();

  return (
    <React.Fragment>
      <Box
        padding="2px"
        margin="0px"
        sx={{
          width: "400px",
          bgcolor: "#e2f3eb;",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
        }}
      >
        <CardContent style={{ padding: "15px" }}>
          <Stack style={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                width: "100%",
                height: "60px",
                borderRadius: "4px ",
                padding: "0px 10px",
                alignItems: "center",
                margin: "2px 0px",
              }}
            >
              <Typography
                variant="h7"
                style={{
                  margin: "0px",
                  fontWeight: "600",
                  fontSize: "20px",
                  textTransform: "uppercase",
                  padding: "0px",
                }}
              >
                Name
              </Typography>
              <Typography margin="0px" variant="h6">
                {props.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "100%",
                alignItems: "center",
                height: "60px",
                borderRadius: "4px ",
                padding: "0px 10px",
                margin: "2px 0px",
              }}
            >
              <Typography
                margin="0px"
                paragraph
                variant="h7"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  textTransform: "uppercase",
                }}
              >
                Date
              </Typography>
              <Typography margin="0px" variant="h6">
                {date}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "100%",
                alignItems: "center",
                height: "60px",
                borderRadius: "4px ",
                padding: "0px 10px",
                margin: "2px 0px",
              }}
            >
              <Typography
                margin="0px"
                paragraph
                variant="h7"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Items
              </Typography>
              <Typography margin="0px" variant="h6">
                {props.items.toString()}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "100%",
                alignItems: "center",
                height: "60px",
                borderRadius: "4px ",
                padding: "0px 10px",
                margin: "2px 0px",
              }}
            >
              <Typography
                margin="0px"
                paragraph
                variant="h7"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  textTransform: "uppercase",
                }}
              >
                Amount
              </Typography>
              <Typography margin="0px" variant="h6">
                {props.amount}
              </Typography>
            </Box>
          </Stack>
        </CardContent>

        <CardActions
          sx={{
            alignSelf: "center",
            display: "inline",
            margin: "0px",
            marginBottom: "15px",
            padding: "0px",
          }}
        >
          <Box
            textAlign="center"
            margin="0px"
            padding="0px"
            sx={{ display: "inline" }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#1FE57A",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "0px",
                padding: "25px 20px 20px 20px",
              }}
            >
              View Sale
            </Button>
          </Box>
        </CardActions>
      </Box>
    </React.Fragment>
  );
}

export default SalesCard;
