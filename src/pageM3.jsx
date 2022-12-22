import React from "react";
import SalesCardsList from "./components/salesCardsList";
import SalesItemsList from "./components/salesItemsList";
import { CssBaseline, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

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

function PageM3(props) {
  // SALES DATA :-----------------------------------------------------------------------

  // ------------------------------------------------------------------------------------
  return (
    <Container style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ display: "block", padding: "10px", fontWeight: "600" }}
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
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            rowGap: "20px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              alignSelf: "flex-start",
              marginTop: "15px",
              lineHeight: "0px",
            }}
          >
            Filter by
          </Typography>
          <Divider flexItem />
          <Box>
            <Typography
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "32px",
              }}
            >
              items
            </Typography>
            <SalesItemsList cards={salesItems} items={salesDetails} />
          </Box>

          <Box sx={{ paddingTop: "20px", width: "75%" }}>
            <Typography
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "32px",
              }}
            >
              date
            </Typography>
            <Box component="div">
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  columnGap: "3px",
                  justifyContent: "space-between",
                  padding: "20px 0px",
                  fontWeight: "600",
                }}
              >
                From :
                <input
                  style={{
                    width: "75%",
                    border: "2px solid ",
                    borderRadius: "4px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                  type="date"
                ></input>
              </Typography>

              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  columnGap: "3px",
                  justifyContent: "space-between",
                  padding: "20px 0px",
                  fontWeight: "600",
                }}
              >
                To :
                <input
                  style={{
                    width: "75%",
                    cursor: "pointer",
                    border: "2px solid ",
                    borderRadius: "4px",
                    textTransform: "uppercase",
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
            padding: "20px 0px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" sx={{ padding: "0px 20px" }}>
            Filtered details
          </Typography>
          <Divider flexItem />
          <SalesCardsList cards={salesDetails} />
        </Box>
      </Stack>
    </Container>
  );
}

export default PageM3;
