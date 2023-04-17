import React, { useState } from "react";
import farmLand from "../images/farm_land.jpg";
import himalaya from "../images/himalaya.jpg";
import sunset from "../images/sunset.jpg";
import greenLand from "../images/green_land.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

const imageCollection = [
  {
    label: "farm_land",
    imgPath: farmLand,
  },
  {
    label: "himalaya",
    imgPath: himalaya,
  },
  {
    label: "sunset",
    imgPath: sunset,
  },
  {
    label: "green_land",
    imgPath: greenLand,
  },
];

function ImageSlider() {
  const imageCollectionSize = imageCollection.length;
  const [index, setIndex] = useState(0);
  const slideNext = () => {
    setIndex((prev) => prev + 1);
  };
  const slidePrev = () => {
    setIndex((prev) => prev - 1);
  };
  return (
    <CardContent>
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "37.5rem",
          textAlign: "center",
        }}
      >
        CURRENT OFFERS
      </Typography>
      <CardMedia>
        <Box
          sx={{
            width: "31.25rem",
            height: "18.75rem",
            border: "18.75rem solid",
            borderRadius: "0.313rem",
            animation: "slide",
            animationDuration: "6000",
          }}
        >
          <img
            src={imageCollection[index].imgPath}
            alt={imageCollection[index].label}
            style={{
              height: "100%",
              width: "100%",
              display: "block",
              overflow: "hidden",
              transition: "1s ease",
            }}
          />
        </Box>
        <CardActions
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={slideNext}
            disabled={index === imageCollectionSize - 1}
            color="success"
            style={{ backgroundColor: "#d9d9d9" }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={slidePrev}
            disabled={index === 0}
            color="success"
            style={{ backgroundColor: "#d9d9d9" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </CardActions>
      </CardMedia>
    </CardContent>
  );
}

export default ImageSlider;
