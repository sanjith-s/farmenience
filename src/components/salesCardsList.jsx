// import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import SalesCard from "./salesCard";
import {Box,Grid,Typography} from "@mui/material";



function SalesCardsList(props) {
  if (props.cards.length === 0) {
    return <Typography style={{textAlign:"center",marginTop:"30px",fontSize:"28px",textTransform:"uppercase"}}> select item from filter </Typography>;
  }
  return (
    <Box
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
        {props.cards.map((item) => (
          <Grid item padding={2} key={item.id}>
            <SalesCard
              key={item.id}
              name={item.clientName}
              ordDate={item.orderDate}
              delDate={item.deliveryDate}
              items={item.items}
              data={item}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SalesCardsList;
