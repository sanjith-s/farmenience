import React, { useState } from "react";
import WheatImg from "../wheatimg.jpg";

import UnpublishedIcon from '@mui/icons-material/Unpublished';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Badge,
  Paper
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    width: "30px",
    height: "30px",
    fontSize: "20px",
    fontWeight: "600",
    borderRadius: "20px",
  },
}));

function NegotiationBox1(props) {
  let [counter, setcounter] = useState(1);
  let increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter >= 2 ? counter - 1 : (counter = 1));
  };

  props.onCounterHandler(counter, props.index);

  return (
    <Card
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "1.25rem",
        margin: "0.375rem 0rem",
      }}
    >
      <CardMedia
        component="img"
        height="8.75rem"
        image={WheatImg}
        sx={{
          width: "11.875rem",
          border: "0.25rem solid #285430",
          borderRadius: "0.188rem",
        }}
      />

      <CardContent
        style={{
          lineHeight: "0rem",
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
        >
          {props.iName}
        </Typography>
        <Typography
          variant="overline"
          sx={{
            fontSize: "22px", fontWeight: "500"
          }}
        >
          ₹ {props.actualPrice}
        </Typography>

        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600", marginBottom: "12px" }}
        >
          quantity : {props.userQuantity} KG
        </Typography>
      </CardContent>
      
      <CardActions
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="success"
          style={{
            display: "flex",
            columnGap: "0.625rem",
            padding: "0.625rem",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          {props.flag == 1 ? (
            <UnpublishedIcon/>
          ) : (
            <PublishedWithChangesIcon />
          )}

          {props.flag == 1
            ? "Not yet seen"
            : "Revised by Seller"}
        </Button>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
        >
          Seller's price : ₹ {props.userPrice}
        </Typography>
        </Box>
      </CardActions>

    </Card>
  );
}

export default NegotiationBox1;
