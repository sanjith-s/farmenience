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

function BasketBox3(props) {
  const FormHandler = (event) => {
    props.onPaymentHandler(event.target.value);
  };
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
        <FormControl onClick={FormHandler}>
          <RadioGroup>
            <FormControlLabel
              value="upi payment"
              control={<Radio required={true} />}
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
              value="net banking"
              control={<Radio required={true}/>}
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
              value="credit/debit card"
              control={<Radio required={true} />}
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
              control={<Radio required={true} />}
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
              value="crypto payment"
              control={<Radio required={true} />}
              label={
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "26px",
                    padding: "10px 0px",
                  }}
                >
                  crypto payment
                </Typography>
              }
            />
            <FormControlLabel
              value="cash on delivery"
              control={<Radio required={true} />}
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
