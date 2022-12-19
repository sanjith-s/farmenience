import React from "react";
import SalesCardsList from "./components/salesCardsList";
import SalesItemsList from "./components/salesItemsList";
import { CssBaseline, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function PageM3(props) {
  // SALES DATA :-----------------------------------------------------------------------

  const salesDetails = [
    {
      id: "1",
      name: "Metta",
      date: new Date(2022, 4, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
    {
      id: "2",
      name: "surendhar",
      date: new Date(2022, 4, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
    {
      id: "3",
      name: "Metta Surendhar",
      date: new Date(2022, 4, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
    {
      id: "4",
      name: "Surendhar Metta ",
      date: new Date(2022, 5, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
    {
      id: "5",
      name: "Surendhar Metta ",
      date: new Date(2022, 5, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
    {
      id: "6",
      name: "Surendhar Metta ",
      date: new Date(2022, 5, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
  ];

  const salesItems = [
    "Rice",
    "Jute",
    "Fibre",
    "Wheat",
    "Millet",
    "Peanut",
    "Cashew",
  ];

  // ------------------------------------------------------------------------------------
  return (
    <Container style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ display: "block", padding: "10px" }}
      >
        SALES DETAILS
      </Typography>

      <Stack
        spacing={4}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="div"
          sx={{
            width: "40%",
            bgcolor: "#cccccc",
            padding: "20px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            rowGap: "20px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "20px", alignSelf: "flex-start" }}
          >
            Filter by
          </Typography>
          <Divider flexItem />
          <Box>
            <Typography variant="h5" textAlign="center">
              ITEMS
            </Typography>
            <SalesItemsList cards={salesItems} items={salesDetails} />
          </Box>

          <Box sx={{ paddingTop: "20px", width: "75%" }}>
            <Typography variant="h5" textAlign="center">
              DATE
            </Typography>
            <Box component="div">
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  columnGap: "3px",
                  justifyContent: "space-between",
                  padding: "20px 0px",
                }}
              >
                From :{" "}
                <input
                  style={{
                    width: "75%",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  type="date"
                ></input>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  columnGap: "3px",
                  justifyContent: "space-between",
                  padding: "20px 0px",
                }}
              >
                To :
                <input
                  style={{
                    width: "75%",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  type="date"
                ></input>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          component="div"
          sx={{
            width: "60%",
            bgcolor: "#aaaaaa",
            padding: "20px ",
            borderRadius: "15px",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
            Filtered details{" "}
          </Typography>
          <Divider flexItem />
          <SalesCardsList cards={salesDetails} />
        </Box>
      </Stack>
    </Container>
  );
}

export default PageM3;
