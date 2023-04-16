import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
const OrderTrack = (props) => {

  return (
    <Card
        style={{
            padding: ".9375rem",
        width: "28.125rem",
        borderRadius: ".3125rem",
        border: ".125rem solid #000000",
        // display: "flex"
        }}
    >
       <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: ".625rem .3125rem",
          borderTop: ".125rem solid",
          columnGap: "1.25rem",
        }}
      > 
      <Typography
          style={{
            width: "45%",
            backgroundColor: "#16e575",
            padding: ".3125rem .3125rem .3125rem .625rem",
            borderRadius: ".1875rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Order Number
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: ".625rem",
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: ".1875rem",
          }}
        >
          {props.orderNum}
        </Typography>
        <Typography
          style={{
            width: "45%",
            backgroundColor: "#16e575",
            padding: ".3125rem .3125rem .3125rem .625rem",
            borderRadius: ".1875rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Destination
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: ".625rem",
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: ".1875rem",
          }}
        >
          {props.destination}
        </Typography>
      </CardContent>
      <CardContent sx={{
          display: "flex",
          justifyContent: "flex-end"
        }}>
          <Button>
            Track
          </Button>
        </CardContent>
    </Card>
  );
}

export default OrderTrack