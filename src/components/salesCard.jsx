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
          width: 300,
          maxHeight: 360,
          bgcolor: "#e2f3eb;",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
        }}
      >
        <CardContent padding="0px" margin="0px">
          <Stack padding="0px" margin="0px">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                borderBottomColor: "black",
                width: "100%",
                alignItems: "center",
                padding: "10px 5px",
                borderRadius: "2 px",
                margin: "2px 0px",
              }}
            >
              <Typography margin="0px" paragraph variant="h7">
                Name
              </Typography>
              <Typography margin="0px" paragraph>
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
                padding: "10px 5px",
                borderRadius: "2 px",
                margin: "2px 0px",
              }}
            >
              <Typography margin="0px" paragraph variant="h7">
                Date
              </Typography>
              <Typography margin="0px" paragraph>
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
                padding: "10px 5px",
                borderRadius: "2 px",
                margin: "2px 0px",
              }}
            >
              <Typography margin="0px" paragraph variant="h7">
                {" "}
                Items
              </Typography>
              <Typography margin="0px" paragraph>
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
                padding: "10px 5px",
                borderRadius: "2 px",
                margin: "2px 0px",
              }}
            >
              <Typography margin="0px" paragraph variant="h7">
                Amount
              </Typography>
              <Typography margin="0px" paragraph>
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
              margin="0px"
              padding="0px"
              sx={{ bgcolor: "#1FE57A" }}
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
