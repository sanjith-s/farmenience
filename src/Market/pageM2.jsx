import React from "react";
import SellerNegotiate from "../components/sellerNegotiate";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import wheat from "../wheatimg.jpg";
const data = {
  name: "Consumer name",
  phno: 1000000000,
  address: "consumer address ",
  itemName: "product",
  itemQuantity: 0,
  itemPrice: 0,
  regNo: "xxx.yyy.zzz",
  img: wheat,
};

const PageM2 = () => {
  const location = useLocation();

  const content = location.state ? location.state.data : data;

  return (
    <Box sx={{ margin: "40px", justifyContent: "center",
     alignItems: "center", backgroundColor: "white" }}>
      <Typography
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: "36px",
          margin: "20px",
          fontFamily: "Satoshi",
          /* border: "3px solid", */
          borderRadius: "5px",
          width: "10em",
          backgroundColor: "lightskyblue"
        }}
      >
        {location.state ? location.state.from : "seller"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            boxShadow: 20,
          }}
        >
          <Box>
            <SellerNegotiate
              name={content.name}
              phno={content.phno}
              iquantity={content.itemQuantity}
              address={content.address}
              iname={content.itemName}
              iprice={content.itemPrice}
              regno={content.regNo}
              img={content.img}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PageM2;
