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
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
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
  const [open1, setOpen1] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const displayPrice = () => {
    setOpen1(true);
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
        padding: "3.125rem 0rem",
        borderRadius: ".75rem",
        columnGap: "3.125rem",
        backgroundColor: "cornsilk",
        border: ".125rem solid",
      }}
    >
      <Box
        sx={{
          width: "25rem",
          borderRadius: ".5rem",
          border: ".1875rem solid #888",
          backgroundColor: "#fff",
        }}
      >
        <CardContent style={{ padding: ".9375rem 1.5625rem" }}>
          <Stack>
            {itemsName.map((value, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    columnGap: "1.25rem",
                    justifyContent: "space-between",
                    height: "3.125rem",
                    alignItems: "center",
                    margin: ".125rem 0rem",
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: "600",
                      fontSize: "1.25rem",
                      textTransform: "uppercase",
                      color: "#000",
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
          rowGap: "1.875rem",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: "3.125rem",
            justifyContent: "space-between",
            height: "3.125rem",
            alignItems: "center",
            margin: ".125rem 0rem",
            borderBottom: ".125rem solid",
          }}
        >
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "1.375rem",
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
            rowGap: "2.5rem",
            backgroundColor: "#fff",
            padding: "1.25rem",
            borderRadius: ".5rem",
            border: ".1875rem solid #888",
          }}
        >
          <Typography
            color="initial"
            id="price-entry-title"
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "1.75rem",
            }}
          >
            Enter the price
          </Typography>

          <Box
            sx={{
              padding: "1.25rem",
              display: "flex",
              columnGap: "1.25rem",
              alignItems: "center",
              borderRadius: ".25rem",
              backgroundColor: "white",
            }}
          >
            <FormControl
              style={{
                position: "sticky",
                borderRadius: ".25rem",
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

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          The price is {price}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Negotiate;
