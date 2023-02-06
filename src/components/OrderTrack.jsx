import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
const OrderTrack = (props) => {

  return (
    <Card
        style={{
            padding: "15px",
        width: "450px",
        borderRadius: "5px",
        border: "2px solid #000000",
        // display: "flex"
        }}
    >
       <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: "10px 5px",
          borderTop: "2px solid",
          columnGap: "20px",
        }}
      > 
      <Typography
          style={{
            width: "45%",
            backgroundColor: "#16e575",
            padding: "5px 5px 5px 10px",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Order Number
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "10px",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#c4e1c5",
            borderRadius: "3px",
          }}
        >
          {props.orderNum}
        </Typography>
        <Typography
          style={{
            width: "45%",
            backgroundColor: "#16e575",
            padding: "5px 5px 5px 10px",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Destination
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "10px",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#c4e1c5",
            borderRadius: "3px",
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