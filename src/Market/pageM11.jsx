import React, { useState } from "react";
import MarketCard from "../components/marketCard";
import {
  Card,
  Typography,
  Button,
  CardActions,
  CardActionArea,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Box,
  Container,
  CssBaseline,
  Divider,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";

const content = [
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
    rate: 3,
  },
];

const PageM11 = () => {
  const handleChange = (event) => {
    setappntdata({ ...appntdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => { };

  const [ngoType, setNgoType] = useState([]);
  const handleNGOtype = (option) => {
    setNgoType(option);
    setappntdata({ ...appntdata, ngoType: ngoType.value });
  };
  const [appntdata, setappntdata] = useState({
    meetdate: "",
    image: "",
    soil: "",
    crops: "",
    reason: "",
    ngoType: "",
  });

  return (
    <div style={{
    }}>
      <Container
        className="check"
        sx={{
          padding: "15px 0px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        <CssBaseline />
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          market place
        </Typography>
        <CardActions
          style={{
            width: "100%",
          }}
        >
          <FormControl
            style={{
              width: "100%",
              height: "3rem",
            }}
          >
            <Input
              style={{
                height: "2.5rem",
                fontSize: "1.5625rem",
              }}
              id="input-with-icon-adornment"
              placeholder="Search here"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "green", fontSize: "2.1875rem" }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <MicIcon style={{ color: "green", fontSize: "2.1875rem" }} />
                  </IconButton>
                  <IconButton>
                    <PhotoCameraIcon
                      style={{ color: "green", fontSize: "2.1875rem" }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </CardActions>

        <CardActions
          style={{
            width: "100%",
            borderRadius: "8px",
            padding: "0px",
          }}
        >
          <CardActionArea style={{ width: "100%" }}>
            <Button
              style={{
                display: "flex",
                columnGap: "20px",
                color: "green",
                width: "100%",
                alignItems: "center",
              }}
            >
              <SortIcon />
              <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
                sort
              </Typography>
            </Button>
          </CardActionArea>
          <Divider orientation="vertical" />
          <CardActionArea style={{ width: "100%" }}>
            <Button
              style={{
                display: "flex",
                columnGap: "20px",
                color: "green",
                alignItems: "center",
                width: "100%",
              }}
            >
              <FilterListIcon />
              <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
                filter
              </Typography>
            </Button>
          </CardActionArea>
        </CardActions>
        <Divider orientation="horizontal" />

        <Box
          sx={{
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            columnGap: "35px",
            rowGap: "38px",
          }}
        >
          {content.map((val, index) => {
            return (
              <MarketCard
                key={index + 1}
                image={val.image}
                productName={val.product}
                sellerCount={val.count}
                price={val.price}
                stars={val.rate}
              />
            );
          })}
        </Box>
      </Container>
    </div>
  );
};

export default PageM11;
