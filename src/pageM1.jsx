import React from "react";
import RequestBox from "./components/requestBox";
import { Container, Box, Grid } from "@mui/material";

import "./css/pageM1.css";
import { Typography } from "@material-ui/core";

const AllRequests = [
  {
    reqId: "XXXXXXX",
    name: "YYYYYYY",
    phoneNo: 9789656573,
    itemName: "Mango",
    itemQuantity: 10,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
  {
    reqId: "XXXXXXX",
    name: "YYYYYYY",
    phoneNo: 9789656573,
    itemName: "Mango",
    itemQuantity: 10,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
  {
    reqId: "JJKKKK",
    name: "KHBKJBSK",
    phoneNo: 8737628723,
    itemName: "Tomato",
    itemQuantity: 7,
  },
];

function PageM1() {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px 0px",
        marginBottom: "40px",
      }}
    >
      <Box sx={{ padding: "20px 0px" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "600", textTransform: "uppercase" }}
        >
          you have {AllRequests.length} requests{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "500px",
          overflow: "auto",
          width: "fit-content",
          border: "5px solid",
          borderRadius: "3px",
          backgroundColor: "#bdfbbf",
        }}
      >
        <Box
          sx={{
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "50px",
            rowGap: "50px",
          }}
        >
          {AllRequests.map((req, index) => {
            return (
              <RequestBox
                key={index + 1}
                reqId={req.reqId}
                name={req.name}
                phoneNo={req.phoneNo}
                itemName={req.itemName}
                itemQuantity={req.itemQuantity}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
export default PageM1;
