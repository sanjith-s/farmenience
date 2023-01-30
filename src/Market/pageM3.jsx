import React from "react";
import SalesCardsList from "../components/salesCardsList";
import SalesItemsList from "../components/salesItemsList";
import { CssBaseline, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const salesDetails = [
  {
    id: "1",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Metta1",
    paymentMode: "Safe Payment",
    transactionID: "xxxyyyzzz",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "carrot","apple"],
    amount: 343,
    address : "Room No: 10 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "2",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Metta2",
    paymentMode: "Safe Payment",
    transactionID: "xxxyyyzzz",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "beans","carrot"],
    amount: 343,
    address : "Room No: 20 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "3",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Metta3",
    paymentMode: "Safe Payment",
    transactionID: "xxxyyyzzz",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "fibre","apple"],
    amount: 343,
    address : "Room No: 30 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "4",
    orderDate: "21/12/2022",
    deliveryDate: "27/12/2022",
    clientName: "Metta4",
    paymentMode: "Safe Payment",
    transactionID: "xxxyyyzzz",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "ragi","apple"],
    amount: 343,
    address : "Room No: 40 , Kurinji Hostel , CEG , Anna University",
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
