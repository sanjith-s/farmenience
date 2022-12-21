import React from "react";
import farm_land from "./farm_land.jpg";
import sunset from "./sunset.jpg";
import Menubar from "./components/menubar";
import Card from "@mui/material/Card";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import {
  Container,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  CssBaseline,
  Box,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { CollectionsBookmark } from "@mui/icons-material";

function PageM9() {
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
        <CardActions>
          <CardMedia
            sx={{
              height: "500px",
              // width: "40%",
              display: "flex",
              flexDirection: "column",
              rowGap: "2px",
              position: "relative",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "50%",
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
                position: "absolute",
                height: "50%",
                borderRadius: "10px",
                width: "500px",
                top: "10px",
                left: "10px",
              }}
              src={sunset}
              alt=" sunset "
            ></img>
            <IconButton
              style={{ position: "absolute", top: "-14px", left: "-14px" }}
              aria-label="collectionsBookmark"
            >
              <PhotoLibraryIcon
                style={{ fontSize: "50px", color: "#1c315e" }}
              />
            </IconButton>
          </CardMedia>
        </CardActions>
      </Card>
    </Box>
  );
}

export default PageM9;
