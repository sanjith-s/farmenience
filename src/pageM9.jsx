import React from "react";
import Menubar from "./components/menubar";
import ImageSlider from "./components/imageSlider";
import Card from "@mui/material/Card";
import {
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  CssBaseline,
  Box,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";

const orders = [
  {
    id: 1,
    items: ["onions", "tomato"],
  },
  {
    id: 2,
    items: ["potato", "ginger"],
  },
  {
    id: 3,
    items: ["garlic", "cucumber"],
  },
  {
    id: 4,
    items: ["garlic", "cucumber"],
  },
  {
    id: 5,
    items: ["garlic", "cucumber"],
  },
  {
    id: 6,
    items: ["garlic", "cucumber"],
  },
];

function PageM9() {
  return (
    <Box style={{ boxSizing: "borderBox" }}>
      <CssBaseline />
      <Menubar />
      <Card
        sx={{
          display: "flex",
          padding: "20px",
          columnGap: "10px",
          flexDirection: "row",
        }}
      >
        <CardContent
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "10px",
            // width: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
            overflow: "auto",
            position: "relative",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "large" }}
            textAlign="center"
            padding="20px"
          >
            ORDERS PLACED
          </Typography>
          <Divider flexItem />

          {orders.map((order, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: "20px 5px",
                  backgroundColor: " #eeeeee",
                  width: "100%",
                  margin: "10px 0px",
                  borderRadius: "10px",
                }}
              >
                <Typography textAlign="center" variant="h6">
                  Order ID : {order.id}
                </Typography>
                <Typography textAlign="center" variant="h6">
                  items: {order.items.toString().toLocaleUpperCase()} etc.
                </Typography>
              </div>
            );
          })}
        </CardContent>

        <Divider orientation="vertical" flexItem />
        <ImageSlider />
        {/* <CardActions
          style={{
            position: "sticky",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{
              height: "100%",
              position: "relative",
            }}
          >
            <img
              style={{
                zIndex: 99,
                position: "absolute",
                height: "250px",
                borderRadius: "10px",
                width: "500px",
                top: "25px",
                left: "25px",
              }}
              src={farm_land}
              alt="farm_land "
            ></img>

            <img
              style={{
                zIndex: 98,
                position: "absolute",
                height: "250px",
                borderRadius: "10px",
                width: "500px",
                top: "50px",
                left: "50px",
              }}
              src={sunset}
              alt=" sunset "
            ></img>
            <img
              style={{
                zIndex: 97,
                position: "absolute",
                height: "250px",
                borderRadius: "10px",
                width: "500px",
                top: "75px",
                left: "75px",
              }}
              src={himalaya}
              alt=" himalaya"
            ></img>
            <img
              style={{
                zIndex: 96,
                position: "absolute",
                height: "250px",
                borderRadius: "10px",
                width: "500px",
                top: "100px",
                left: "100px",
              }}
              src={green_land}
              alt="green_land"
            ></img>
            <IconButton
              style={{
                zIndex: 100,
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
              aria-label="collectionsBookmark"
            >
              <PhotoLibraryIcon
                style={{ fontSize: "50px", color: "#1c315e" }}
              />
            </IconButton>
          </CardMedia>
        </CardActions> */}
      </Card>
    </Box>
  );
}

export default PageM9;
