import React, { useState } from "react";
import WheatImg from "../wheatimg.jpg";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";

function BasketBox1(props) {
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
        margin: "0.5rem 0rem",
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={WheatImg}
        sx={{
          width: "9.375rem",
          border: "0.188rem solid #285430",
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
          sx={{ textTransform: "uppercase", fontWeight: "37.5rem" }}
        >
          {props.iName}
        </Typography>
        <Typography
          variant="overline"
          lineHeight={2.5}
          sx={{ fontSize: "0.938rem", paddingLeft: "0.313rem" }}
        >
          {props.quantity}kg
        </Typography>
        <Box>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{ fontSize: "1.5rem", fontWeight: "37.5rem" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "1.25rem" }} />
            {props.discountPrice}
          </Typography>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{
              textDecoration: "line-through",
              fontSize: "0.938rem",
              paddingLeft: "0.625rem",
            }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "0.813rem" }} />
            {props.actualPrice}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            color="green"
            lineHeight={2.5}
            sx={{ fontWeight: "37.5rem" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "1.125rem" }} />
            {props.discountAmount} off
          </Typography>
        </Box>
      </CardContent>

      <CardActions
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          rowGap: "1.875rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          lineHeight={0.2}
          sx={{ textTransform: "uppercase", fontWeight: "37.5rem" }}
        >
          quantity
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <IconButton
            style={{ backgroundColor: "#cccccc" }}
            color="success"
            size="large"
            onClick={increment}
          >
            <AddIcon />
          </IconButton>
          <Box sx={{ padding: "0.625rem" }}>
            <Typography variant="h6">{counter}</Typography>
          </Box>
          <IconButton
            style={{ backgroundColor: "#cccccc" }}
            color="success"
            size="large"
            onClick={decrement}
          >
            <HorizontalRuleIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default BasketBox1;
