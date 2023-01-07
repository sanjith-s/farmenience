import React from "react";
import Card from "@mui/material/Card";

import {
  CardContent,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function BasketBox3() {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "18px",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontWeight: "600",
          textTransform: "uppercase",
        }}
      >
        payment methods
      </Typography>
      <CardContent style={{ width: "70%", justifySelf: "flex-start" }}>
        <FormControl>
          <RadioGroup>
            <FormControlLabel
              value="upi"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "26px",
                    padding: "10px 0px",
                  }}
                >
                  upi
                </Typography>
              }
            />
            <FormControlLabel
              value="netBanking"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "26px",
                    padding: "10px 0px",
                  }}
                >
                  net banking
                </Typography>
              }
            />
            <FormControlLabel
              value="card"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "26px",
                    padding: "10px 0px",
                  }}
                >
                  credit/debit card
                </Typography>
              }
            />
            <FormControlLabel
              value="postpaid"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "26px",
                    padding: "10px 0px",
                  }}
                >
                  postpaid
                </Typography>
              }
            />
            <FormControlLabel
              value="crypto"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "26px",
                    padding: "10px 0px",
                  }}
                >
                  crypto wallet
                </Typography>
              }
            />
            <FormControlLabel
              value="cashOnDelivery"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "26px",
                    padding: "10px 0px",
                  }}
                >
                  cash on delivery
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default BasketBox3;
