import React from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Fab from "@mui/material/Fab";

const SellItemCard = () => {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Fab component="span">
          <ArrowBackOutlinedIcon />
        </Fab>
        <Fab component="span">
          <ArrowForwardOutlinedIcon />
        </Fab>
      </Stack>
      <TextField
        id="filled-basic"
        label="Product Name"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <TextField
        id="filled-basic"
        label="Price"
        variant="filled"
        color="success"
        InputProps={{
          endAdornment: <InputAdornment position="end">₹</InputAdornment>,
        }}
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <TextField
        id="filled-basic"
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        label="Quantity"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <TextField
        id="filled-basic"
        label="Type"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        display="flex"
        justifyContent="center"
      >
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }}>
          Add Item
        </Button>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }}>
          Delete Item
        </Button>
      </Stack>
    </React.Fragment>
  );
};

export default SellItemCard;
