import React from "react";
import { CardContent, CardActions, Typography, Button, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

function SalesCard(props) {
  // const date = props.date.toLocaleDateString();

  // const ordDate = props.ordDate.toLocaleDateString();
  // const delDate = props.delDate.toLocaleDateString();

  return (
    <React.Fragment>
      <Box
        padding=".125rem"
        margin="0rem"
        sx={{
          width: "25rem",
          bgcolor: "#e2f3eb;",
          display: "flex",
          flexDirection: "column",
          borderRadius: ".5rem",
        }}
      >
        <CardContent style={{ padding: ".9375rem" }}>
          <Stack style={{ padding: "0rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#C4E1C5",
                width: "100%",
                height: "3.75rem",
                borderRadius: ".25rem ",
                padding: "0rem .625rem",
                alignItems: "center",
                margin: ".125rem 0rem",
              }}
            >
              <Typography
                variant="h7"
                style={{
                  margin: "0rem",
                  fontWeight: "600",
                  fontSize: "1.1875rem",
                  textTransform: "uppercase",
                  padding: "0rem",
                }}
              >
                consumer name
              </Typography>
              <Typography margin="0rem" variant="h6">
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
                height: "3.75rem",
                borderRadius: ".25rem ",
                padding: "0rem .625rem",
                margin: ".125rem 0rem",
              }}
            >
              <Typography
                margin="0rem"
                paragraph
                variant="h7"
                style={{
                  fontWeight: "600",
                  fontSize: "1.1875rem",
                  textTransform: "uppercase",
                }}
              >
                ordered date
              </Typography>
              <Typography margin="0rem" variant="h6">
                {props.ordDate}
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
                height: "3.75rem",
                borderRadius: ".25rem ",
                padding: "0rem .625rem",
                margin: ".125rem 0rem",
              }}
            >
              <Typography
                margin="0rem"
                paragraph
                variant="h7"
                style={{
                  fontWeight: "600",
                  fontSize: "1.1875rem",
                  textTransform: "uppercase",
                }}
              >
                delivery date
              </Typography>
              <Typography margin="0rem" variant="h6">
                {props.delDate}
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
                height: "3.75rem",
                borderRadius: ".25rem ",
                padding: "0rem .625rem",
                margin: ".125rem 0rem",
              }}
            >
              <Typography
                margin="0rem"
                paragraph
                variant="h7"
                style={{
                  fontWeight: "600",
                  fontSize: "1.1875rem",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Items
              </Typography>
              <Typography margin="0rem" variant="h6">
                {props.items.map((val) => {
                  return (
                    <>
                      {val.name}
                      <br />
                    </>
                  )
                })}
              </Typography>
            </Box>
          </Stack>
        </CardContent>

        <CardActions
          sx={{
            alignSelf: "center",
            display: "inline",
            margin: "0rem",
            marginBottom: ".9375rem",
            padding: "0rem",
          }}
        >
          <Box
            textAlign="center"
            margin="0rem"
            padding="0rem"
            sx={{ display: "inline" }}
          >
            <Button
              variant="contained"
              color="success"
            >

              <Link
                to="/M4"
                state={{
                  from: "sales details",
                  data: props.data,
                  date: [props.ordDate, props.delDate],
                  // onDeleteHandler: [props.onDeleteHandler,] , 
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
