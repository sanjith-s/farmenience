import React from "react";
import { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  InputAdornment,
  FormControl,
  FilledInput,
  InputLabel,
  Typography,
  Box,
  Button,
  ButtonGroup,
} from "@mui/material";

function CropCard() {
  const [cropName, setCropName] = useState("");
  const [harvestDate, setHarvestDate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [quotedAmount, setQuotedAmount] = useState(0);
  const [cultivation, setCultivation] = useState("");

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <Box
        style={{
          width: "43.75rem",
          border: ".5rem solid green",
          padding: "1.875rem",
          borderRadius: ".3125rem",
          borderTopLeftRadius: "3.125rem",
          borderBottomRightRadius: "3.125rem",
          backgroundColor: "lightgreen",
          marginTop: ".9375rem",
        }}
      >
        <Box>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                crop name
              </Typography>
            </InputLabel>
            <FilledInput
              type="text"
              onChange={(event) => {
                setCropName(event.target.value);
              }}
              style={{
                borderRadius: ".3125rem",
                borderBottomLeftRadius: "0rem",
                borderBottomRightRadius: "0rem",
              }}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                harvest date
              </Typography>
            </InputLabel>
            <FilledInput
              onChange={(event) => {
                setHarvestDate(event.target.value);
              }}
              style={{
                borderRadius: ".3125rem",
                borderBottomLeftRadius: "0rem",
                borderBottomRightRadius: "0rem",
              }}
              placeholder="dd/mm/yyyy"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                quantity required
              </Typography>
            </InputLabel>
            <FilledInput
              endAdornment={
                <InputAdornment position="end">
                  <Typography
                    variant="h6"
                    style={{
                      textTransform: "uppercase",
                      color: "darkgreen",
                      fontWeight: "600",
                    }}
                  >
                    kg
                  </Typography>
                </InputAdornment>
              }
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
              style={{
                borderRadius: ".3125rem",
                borderBottomLeftRadius: "0rem",
                borderBottomRightRadius: "0rem",
              }}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth variant="filled">
            <InputLabel>
              <Typography
                variant="h6"
                style={{
                  textTransform: "uppercase",
                  color: "darkgreen",
                  fontWeight: "600",
                }}
              >
                quoted amount
              </Typography>
            </InputLabel>
            <FilledInput
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <CurrencyRupeeIcon style={{ color: "darkgreen" }} />
                </InputAdornment>
              }
              onChange={(event) => {
                setQuotedAmount(event.target.value);
              }}
              style={{
                borderRadius: ".3125rem",
                borderBottomLeftRadius: "0rem",
                borderBottomRightRadius: "0rem",
              }}
            />
          </FormControl>
        </Box>
        <Box
          style={{
            display: "flex",
            padding: ".625rem",
            borderBottom: ".0625rem solid",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <InputLabel>
            <Typography
              variant="h6"
              style={{
                textTransform: "uppercase",
                color: "darkgreen",
                fontWeight: "600",
              }}
            >
              organic cultivation
            </Typography>
          </InputLabel>
          <ButtonGroup
            variant="contained"
            color="success"
            onChange={(event) => {
              setCultivation(event.target.value);
            }}
          >
            <Button style={{ fontWeight: "600", fontSize: "1rem" }}>
              {" "}
              yes{" "}
            </Button>
            <Button style={{ fontWeight: "600", fontSize: "1rem" }}>
              {" "}
              no{" "}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}

export default CropCard;
