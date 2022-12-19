// import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import SalesCard from "./salesCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";

function SalesCardsList(props) {
  if (props.cards.length === 0) {
    return <h2> N0 Sales Cards </h2>;
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
      <Grid container direction="column" alignItems="center" spacing={5}>
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
