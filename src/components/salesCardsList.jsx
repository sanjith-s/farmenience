// import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import SalesCard from "./salesCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function SalesCardsList(props) {
  if (props.cards.length === 0) {
    return <h2> N0 Sales Cards </h2>;
  }
  return (
    <Box sx={{ flexGrow: 1, padding: "20px 0px" }}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        {props.cards.map((item) => (
          <Grid item padding={3} key={item.id}>
            <SalesCard
              key={item.id}
              name={item.name}
              date={item.date}
              items={item.items}
              amount={item.amount}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SalesCardsList;
