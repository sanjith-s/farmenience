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
          lineHeight={2.5}
          sx={{ fontSize: "0.938rem", paddingLeft: "0.313rem" }}
        >
          {props.quantity}kg
        </Typography>
        <Box>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{ fontSize: "1.125rem", fontWeight: "600" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "1rem" }} />
            {props.discountPrice}
          </Typography>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{
              textDecoration: "line-through",
              fontSize: "0.813rem",
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
            sx={{ fontWeight: "600" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "1.063rem" }} />
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
          sx={{ textTransform: "uppercase", fontWeight: "600" }}
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

export default NegotiationBox1;
