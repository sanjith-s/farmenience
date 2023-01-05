import React from "react";
import SellerNegotiate from "./components/sellerNegotiate";
import { Box } from "@mui/material";

const content = [
  {
    name: "Consumer name",
    phno: 2484930933,
    address: "no 323 , some street,  town, chennai-23232",
    itemName: "wheat",
    itemQuantity: "3 ",
    itemPrice: 250,
    regNo: "23.42.424",
  },
  {
    name: "Consumer name",
    phno: 2484930933,
    address: "no 323 , some street,  town, chennai-23232",
    itemName: "wheat",
    itemQuantity: 3,
    itemPrice: 350,
    regNo: "23.42.425",
  },
];

const PageM2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "35px",
      }}
    >
      <Box
        sx={{
          border: "5px solid ",
          width: "95%",
          padding: "25px",
          height: "525px",
          overflow: "scroll",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          backgroundColor: "#ccc",
        }}
      >
        {content.map((id, key) => {
          return (
            <Box>
              <SellerNegotiate
                key={key}
                name={id.name}
                phno={id.phno}
                iquantity={id.itemQuantity}
                address={id.address}
                iname={id.itemName}
                iprice={id.itemPrice}
                regno={id.regNo}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default PageM2;
