import React from "react";
import farm_land from "./farm_land.jpg";
import sunset from "./sunset.jpg";
import Menubar from "./components/menubar";
import Card from "@mui/material/Card";
import { CardMedia, CardContent, Typography, CssBaseline } from "@mui/material";
import Divider from "@mui/material/Divider";

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
    <div>
      <CssBaseline />
      <Menubar />
      <Card sx={{ display: "flex", padding: "20px", columnGap: "10px" }}>
        <CardMedia
          sx={{
            height: "500px",
            width: "65%",
            display: "flex",
            flexDirection: "column",
            rowGap: "2px",
          }}
        >
          <img
            style={{ height: "50%", borderRadius: "10px" }}
            src={farm_land}
            alt="farm_land "
          ></img>
          <Divider flexItem />
          <img
            style={{ height: "50%", borderRadius: "10px" }}
            src={sunset}
            alt=" sunset "
          ></img>
        </CardMedia>
        <Divider orientation="vertical" flexItem />
        <CardContent
          sx={{
            bgcolor: "#d9d9d9",
            borderRadius: "10px",
            width: "35%",
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
      </Card>
    </div>
  );
}

export default PageM9;
