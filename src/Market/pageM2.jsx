import React, { useEffect } from "react";
import SellerNegotiate from "../components/sellerNegotiate";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import wheat from "../wheatimg.jpg";
import { useState } from "react";
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

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  // }

  // const fullAnotherSpeak = (text) => {
  //   responsiveVoice.speak(text, "Tamil Male");
  // }

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
  //   document.body.appendChild(addScript);
  // }, []);

  const location = useLocation();

  const content = location.state ? location.state.data : data;
  const ids = location.state ? location.state.reg : data;
  
  return (
    <Box sx={{ margin: "40px", justifyContent: "center",
     alignItems: "center", backgroundColor: "white" }}>

      <Typography
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: "2.25rem",
          marginBottom: "1.25rem",
          fontFamily: "Satoshi",
          border: ".1875rem solid",
          borderRadius: "1.25rem",
          width: "10em",
          backgroundColor: "lightskyblue"
        }}
      >
        {location.state ? location.state.from : "seller"}
      </Typography>
      <Box className="gx-d-flex justify-content-center"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box onClick={(e) => {
            fullAnotherSpeak(e.target.innerText)
          }}
          sx={{
            width: "95%",
            display: "flex",
            flexDirection: "column",
            rowGap: "2.5rem",
            boxShadow: 20,
          }}
        >
          <Box>
            <SellerNegotiate
              name={content.name}
              phno={content.phoneNumber}
              iquantity={content.quantity}
              address={content.address}
              iname={content.itemName}
              iprice={content.price}
              regno={ids}
              img={content.img}
              all = {content}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PageM2;
