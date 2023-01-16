import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function BuyerRequest(props) {
  let navigate = useNavigate();

  const viewRequest = () => {
    
  };
  
  return (
    <Card
      style={{
        padding: "15px",
        width: "80%",
        marginLeft:"10%",
        borderRadius: "5px",
        border: "2px solid #000000",
      }}
    >
    <Button
          style={{
            backgroundColor: "#1fe57a",
            color: "#000000",
            fontWeight: "600",
            fontSize: "16px",
            border: "2px solid #000000",
            marginTop: "15px",
          }} 
        >
          Accept
        </Button>
        <Button
          style={{
            backgroundColor: "#1fe57a",
            color: "#000000",
            fontWeight: "600",
            fontSize: "16px",
            border: "2px solid #000000",
            marginTop: "15px",
          }}
          onClick={viewRequest}
        >
          update
        </Button>
        <Button
          style={{
            backgroundColor: "#1fe57a",
            color: "#000000",
            fontWeight: "600",
            fontSize: "16px",
            border: "2px solid #000000",
            marginTop: "15px",
          }}
        >
          Cancel
        </Button>
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
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Request ID
        </Typography>
        <Typography
          style={{
            width: "55%",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#c4e1c5",
            borderRadius: "3px",
          }}
        >
          {props.reqId}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 5px",
          columnGap: "20px",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Reason
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
          {props.meetReason}
        </Typography>
      </CardContent>
        
        <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 5px",
          columnGap: "20px",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          MeetDate
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
          {props.meetDate}
        </Typography>
      </CardContent>

        <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 5px",
          columnGap: "20px",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Meet Time
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
          {props.meetTime}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 5px",
          columnGap: "20px",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          soil Details
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
          {props.soilDetails}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 5px",
          columnGap: "20px",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          crops Growing
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
          {props.cropsGrowing}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          padding: "10px 5px",
          borderBottom: "2px solid",
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
          Quantity
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
          {props.itemQuantity}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        
      </CardActions>
    </Card>
  );
}
export default BuyerRequest;
