import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton, Typography, Box, CssBaseline, Tooltip } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function NegotNav({ handleClick }) {
  return (
    <Box
      sx={{
        bgcolor: "green",
        padding: ".3125rem",
        borderRadius: ".3125rem",
        display: "flex",
        justifyContent: "center",

        position: "relative",
      }}
    >
      <CssBaseline />
      <Box sx={{ position: "absolute", left: "1.25rem ", top: ".4375rem" }}>
        <Tooltip title="Negotiate Price">
          <IconButton color="success" onClick={()=>handleClick(2)}>
            <MonetizationOnIcon style={{ color: "#ffffff" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit Quantity">
          <IconButton color="success" onClick={()=>handleClick(1)}>
            <ShoppingBasketIcon style={{ color: "#ffffff" }} />
          </IconButton>
        </Tooltip>

      </Box>

      <Box
        sx={{
          display: "block",
        }}
      >
        <Typography
          color="#ffffff"
          style={{
            textTransform: "uppercase",
            fontWeight: "500",
            fontSize: "1.75rem",
          }}
        >
          My negotiation
        </Typography>
      </Box>
    </Box>
  );
}
export default NegotNav;
