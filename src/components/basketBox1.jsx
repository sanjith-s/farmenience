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
        padding: "20px",
        margin: "8px 0px",
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={WheatImg}
        sx={{
          width: "150px",
          border: "3px solid #285430",
          borderRadius: "3px",
        }}
      />

      <CardContent
        style={{
          lineHeight: "0px",
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
          sx={{ fontSize: "15px", paddingLeft: "5px" }}
        >
          {props.quantity}kg
        </Typography>
        <Box>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{ fontSize: "24px", fontWeight: "600" }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "20px" }} />
            {props.discountPrice}
          </Typography>
          <Typography
            variant="overline"
            lineHeight={0.2}
            sx={{
              textDecoration: "line-through",
              fontSize: "15px",
              paddingLeft: "10px",
            }}
          >
            <CurrencyRupeeIcon style={{ fontSize: "13px" }} />
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
            <CurrencyRupeeIcon style={{ fontSize: "18px" }} />
            {props.discountAmount} off
          </Typography>
        </Box>
      </CardContent>

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
          <Box sx={{ padding: "10px" }}>
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
