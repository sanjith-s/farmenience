import React, { useState } from "react";
import WheatImg from "../wheatimg.jpg";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function BasketBox2(props) {
  return (
    <Card
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "20px",
        margin: "10px 0px",
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
          diplay: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormLabel
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography style={{ textTransform: "uppercase" }}>
              choose a delivery slot
            </Typography>
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="sunday"
              control={<Radio />}
              label={
                <Typography style={{ textTransform: "uppercase" }}>
                  sun
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
            <FormControlLabel
              value="monday"
              control={<Radio />}
              label={
                <Typography style={{ textTransform: "uppercase" }}>
                  mon
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
            <FormControlLabel
              value="tuesday"
              control={<Radio />}
              label={
                <Typography style={{ textTransform: "uppercase" }}>
                  tues
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
            <FormControlLabel
              value="wedday"
              control={<Radio />}
              label={
                <Typography style={{ textTransform: "uppercase" }}>
                  wed
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
            <FormControlLabel
              value="thursday"
              control={<Radio />}
              label={
                <Typography style={{ textTransform: "uppercase" }}>
                  thurs
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
            <FormControlLabel
              value="friday"
              control={<Radio />}
              label={
                <Typography style={{ textTransform: "uppercase" }}>
                  fri
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
            <FormControlLabel
              value="satday"
              control={<Radio />}
              label={
                <Typography style={{ textTransform: "uppercase" }}>
                  sat
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
          </RadioGroup>
        </FormControl>
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormLabel
            style={{
              width: "fit-content",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography style={{ textTransform: "uppercase" }}>
              slot timings
            </Typography>
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="foornoon"
              control={<Radio />}
              label={
                <Typography
                  style={{ textTransform: "uppercase", wordSpacing: "3px" }}
                >
                  9:00 am to 12:00 pm
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
            <FormControlLabel
              value="monday"
              control={<Radio />}
              label={
                <Typography
                  style={{ textTransform: "uppercase", wordSpacing: "3px" }}
                >
                  1:30 pm to 5:30 pm
                </Typography>
              }
              style={{ width: "fit-content" }}
            />
          </RadioGroup>
        </FormControl>
      </CardActions>
    </Card>
  );
}

export default BasketBox2;
