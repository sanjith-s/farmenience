import React from "react";
import { CardContent, CardActions, Typography, Button,Stack,Box } from "@mui/material";
import { Link } from "react-router-dom";

function SalesCard(props) {
  // const date = props.date.toLocaleDateString();

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
                  fontSize: "19px",
                  textTransform: "uppercase",
                  padding: "0px",
                }}
              >
                consumer name
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
                  fontSize: "19px",
                  textTransform: "uppercase",
                }}
              >
                ordered date
              </Typography>
              <Typography margin="0px" variant="h6">
                {props.ordDate.toLocaleDateString()}
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
                  fontSize: "19px",
                  textTransform: "uppercase",
                }}
              >
                delivery date
              </Typography>
              <Typography margin="0px" variant="h6">
                {props.delDate.toLocaleDateString()}
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
                  fontSize: "19px",
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
                backgroundColor: "green",
              }}
            >
              <Link
            to="/M4"
            state={{
              from: "sales details",
              data: props.data,
            }}
            style={{ textDecoration: "none" }}
          >
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: "600",
              }}
            >
              view sale
            </Typography>
          </Link>
            </Button>
          </Box>
        </CardActions>
      </Box>
    </React.Fragment>
  );
}

export default SalesCard;
