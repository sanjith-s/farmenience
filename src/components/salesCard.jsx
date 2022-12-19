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
          height: 270,
          bgcolor: "#D9D9D9;",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <CardContent padding="0px" margin="0px">
          <Stack padding="0px" margin="0px">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography paragraph variant="h7">
                Name
              </Typography>
              <Typography paragraph>{props.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography paragraph variant="h7">
                Date
              </Typography>
              <Typography paragraph>{date}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography paragraph variant="h7">
                {" "}
                Items
              </Typography>
              <Typography paragraph>{props.items.toString()}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography paragraph variant="h7">
                Amount
              </Typography>
              <Typography paragraph>{props.amount}</Typography>
            </Box>
          </Stack>
        </CardContent>

        <CardActions
          padding="0px"
          margin="0px"
          sx={{
            alignSelf: "center",
            display: "inline",
            margin: "0px",
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
