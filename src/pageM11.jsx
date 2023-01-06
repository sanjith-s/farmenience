import React, { useState } from "react";
import "./css/pageM11.css";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
// import MultipleValueTextInput from "react-multivalue-text-input";
import ItemCard from "./components/itemCard";
import { Box, Grid } from "@mui/material";
import MarketCard from "./components/marketCard";
// import img1 from "./product1.jpg";

let count = 6;

const content = [
  {
    product: "promegranate",
    count: 4,
    price: 232,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
  },
  {
    product: "promegranate",
    count: 4,
    price: 232,
  },
];

const PageM11 = () => {
  const handleChange = (event) => {
    setappntdata({ ...appntdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {};

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

  let list = [];
  for (let i = 0; i < count; i++) {
    list.push(<ItemCard />);
  }

  return (
    <div className="box">
      <div className="titlebox">
        <span className="title">Marketplace</span>
      </div>
      <div className="searchCont">
        <div className="sip">
          <input type="text" placeholder="search" className="searchbox" />
        </div>
        <div className="sic">
          <SearchIcon className="sicon" fontSize="medium" />
        </div>
      </div>
      <div className="container">
        <div className="filter-cont">
          <span
            style={{
              color: "black",
              fontSize: "1.5em",
              fontFamily: "Montserrat",
            }}
          >
            Filter By
          </span>
        </div>

        {/* <div className="card-cont">{list}</div> */}

        {/* <Box
          sx={{
            width: "100%",
            height: 600,
            flexGrow: 1,
            padding: "20px 0px",
            overflow: "auto",
            position: "relative",
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={5}
            style={{ padding: "0px" }}
          >
            {content.map((item) => (
              <Grid item padding={2} key={item.id}>
                <MarketCard
                  key={item.id}
                  name={item.name}
                  date={item.date}
                  items={item.items}
                  amount={item.amount}
                />
              </Grid>
            ))}
          </Grid>
        </Box> */}

        <Box
          sx={{
            height: "400px",
            overflow: "auto",
            width: "fit-content",
            border: "5px solid",
            borderRadius: "3px",
            backgroundColor: "#bdfbbf",
            margin: "20px",
          }}
        >
          <Box
            sx={{
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr ",
              columnGap: "50px",
              rowGap: "50px",
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
                />
              );
            })}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PageM11;
