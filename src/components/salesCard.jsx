import React from "react";
import { CardContent, Typography } from "@mui/material";
// import { createTheme } from "@mui/material";
// import Box from "@mui/material/Box";

function SalesCard(props) {
  const date = props.date.toLocaleDateString();

  return (
    <>
      <Stack>
        <CardContent>
          <Typography paragraph>Name</Typography>
          <Typography paragraph>{props.name}</Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph>Date</Typography>
          <Typography paragraph>{props.date}</Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph>Items</Typography>
          <Typography paragraph>{props.items}</Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph>Amount</Typography>
          <Typography paragraph>{props.amount}</Typography>
        </CardContent>
      </Stack>
    </>

    // <li className="salesCard">
    //   <div>
    //     <div className="card">
    //       <p className="key"> name :</p>
    //       <p className="value"> {props.name} </p>
    //     </div>
    //     <div className="card">
    //       <p className="key"> date :</p>
    //       <p className="value"> {date} </p>
    //     </div>
    //     <div className="card">
    //       <p className="key"> items :</p>
    //       <p className="value"> {props.items.toString()} </p>
    //     </div>
    //     <div className="card">
    //       <p className="key"> amount :</p>
    //       <p className="value"> Rs. {props.amount} </p>
    //     </div>
    //   </div>
    //   <div>
    //     <button className="card-button"> view sale </button>
    //   </div>
    // </li>
  );
}

export default SalesCard;
