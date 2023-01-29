import React from "react";
import RequestBox from "../components/requestBox";
import { Box, Typography } from "@mui/material";
import wheat from "../wheatimg.jpg";
import carrot from "../carrot.jpg";

const content = [
  {
    name: "Consumer name",
    phno: 2484930933,
    address: "no 323 , some street,  town, chennai-23232",
    itemName: "wheat",
    itemQuantity: "3 ",
    itemPrice: 250,
    regNo: "23.42.424",
    img: wheat,
  },
  {
    name: "Consumer name",
    phno: 134132414,
    address: "no 323 , some street,  some town, mumbai-23232",
    itemName: "carrot",
    itemQuantity: 3,
    itemPrice: 350,
    regNo: "23.42.425",
    img: carrot,
  },
  {
    name: "Consumer name",
    phno: 2484930933,
    address: "no 323 , some street,  town, chennai-23232",
    itemName: "wheat",
    itemQuantity: "3 ",
    itemPrice: 250,
    regNo: "23.42.424",
    img: wheat,
  },
  {
    name: "Consumer name",
    phno: 134132414,
    address: "no 323 , some street,  some town, mumbai-23232",
    itemName: "carrot",
    itemQuantity: 3,
    itemPrice: 350,
    regNo: "23.42.425",
    img: carrot,
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
          you have {content.length} requests{" "}
        </Typography>
      </Box>
      <Box
        sx={{
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
          {content.map((req, index) => {
            return (
              <RequestBox
                key={index + 1}
                reqId={req.regNo}
                name={req.name}
                phoneNo={req.phno}
                itemName={req.itemName}
                itemQuantity={req.itemQuantity}
                data={req}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
export default PageM1;
