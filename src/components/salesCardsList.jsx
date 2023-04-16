// import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import SalesCard from "./salesCard";
import {Box,Grid,Typography} from "@mui/material";



function SalesCardsList(props) {
  var items = props.all;
  console.log(items);
  if (!props.isFilt) {
    items = props.all;
  }
  if (props.isFilt && props.cards.length === 0) {
    return <Typography style={{textAlign:"center",marginTop:"1.875rem",fontSize:"1.75rem",textTransform:"uppercase"}}> No Items found </Typography>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: 600,
        flexGrow: 1,
        padding: "1.25rem 0rem",
        overflow: "auto",
        position: "relative",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={5}
        style={{ padding: "0rem" }}
      >
        {items.map((item) => (
          <Grid item padding={2} key={item.saleID}>
            <SalesCard
              key={item.saleID}
              name={item.clientName}
              ordDate={item.orderDate}
              delDate={item.deliveryDate}
              items={item.items}
              data={item}
              // onDeleteHandler={props.onDeleteHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SalesCardsList;
