import React, { useState } from "react";
import WheatImg from "../wheatimg.jpg";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Badge,
  IconButton,
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
        variant="overline"
        lineHeight={2.5}
        sx={{ fontSize: "15px", paddingLeft: "5px"}}
        >
          {props.weight}kg
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
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600",marginBottom:"12px" }}
        >
          quantity
        </Typography>

        <StyledBadge
          style={{ position: "sticky" }}
          badgeContent={props.userQuantity}
          color="success"
        >
          <ShoppingCartIcon style={{ fill: "#000000", fontSize: "40px" }} />
        </StyledBadge>
      </CardActions>

      <CardActions
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
        >
          buyer price
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <Paper elevation={5} style={{padding:"10px 20px" , fontWeight:"600",fontSize: "18px" }}>
          ₹ {props.userPrice}
          </Paper>
        </Box>
      </CardActions>
    </Card>
  );
}

export default NegotiationBox1;
