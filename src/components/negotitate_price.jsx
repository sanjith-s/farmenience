import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  CardActions,
  CardContent,
  Typography,
  Card,
  Stack,
} from "@mui/material";

const itemsName = [
  "product name",
  "quantity",
  "specific type",
  "buyer name",
  "buyer address",
];

const Negotiate = (props) => {
  const [price, setPrice] = useState(0);
  const displayPrice = () => {
    alert("The price is " + price);
  };

  const itemsValue = [
    props.name,
    props.quantity,
    props.type,
    props.buyer,
    props.address,
  ];

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px 0px",
        borderRadius: "12px",
        columnGap: "50px",
        backgroundColor: "#eee",
      }}
    >
      <Box
        sx={{
          width: "400px",
          borderRadius: "8px",
          border: "2px solid #000",
          backgroundColor: "#fff",
        }}
      >
        <CardContent style={{ padding: "15px 25px" }}>
          <Stack>
            {itemsName.map((value, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    columnGap: "20px",
                    justifyContent: "space-between",
                    height: "50px",
                    alignItems: "center",
                    margin: "2px 0px",
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography variant="h6">{itemsValue[index]}</Typography>
                </Box>
              );
            })}
          </Stack>
        </CardContent>
      </Box>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: "50px",
            justifyContent: "space-between",
            height: "50px",
            alignItems: "center",
            margin: "2px 0px",
            borderBottom: "2px solid",
          }}
        >
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "22px",
              textTransform: "uppercase",
            }}
          >
            pricings
          </Typography>
          <Typography variant="h6">₹ {props.price}</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            border: "2px solid #888",
          }}
        >
          <Typography
            color="initial"
            id="price-entry-title"
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "28px",
            }}
          >
            Enter the price
          </Typography>

          <Box
            sx={{
              padding: "20px",
              display: "flex",
              columnGap: "20px",
              alignItems: "center",
              borderRadius: "4px",
              backgroundColor: "white",
            }}
          >
            <FormControl
              style={{
                position: "sticky",
                borderRadius: "4px",
              }}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                type="amount"
                min={props.actualPrice / 2}
                max={props.actualPrice / 2 + props.actualPrice}
                message="hello"
                placeholder={props.discountPrice}
                startAdornment={
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>

            <IconButton>
              <ThumbUpIcon
                variant="contained"
                onClick={() => {
                  displayPrice();
                }}
                style={{ color: "green" }}
              />
            </IconButton>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Negotiate;
