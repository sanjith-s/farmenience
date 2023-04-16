import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Axios from "axios"
import "../css/button.css"

function BuyerRequest(props) {
  const viewRequest = () => {
    const [buyerRequestDetails, setBuyerRequestDetails] = useState([]);

    Axios.post("http://localhost:9091/api/admin/deleteitem", {
      itemID: id,
    }).then((response) => {
      console.log(response);
      if (response.data == "success") {
        setBuyerRequestDetails(response.data);
        navigate("/pageM3");
      }
    });
  };

  return (
    <Card
      style={{
        padding: ".9375rem",
        width: "28.125rem",
        borderRadius: ".3125rem",
        border: ".125rem solid #000000",
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
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#16e575",
            borderRadius: ".1875rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Request ID
        </Typography>
        <Typography
          style={{
            width: "55%",
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: ".1875rem",
          }}
        >
          {props.reqId}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: ".625rem .3125rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#16e575",
            borderRadius: ".1875rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Name
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
          {props.name}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: ".625rem .3125rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#16e575",
            borderRadius: ".1875rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Phone Number
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
          {props.phoneNo}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: ".625rem .3125rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: ".3125rem .3125rem .3125rem .625rem",
            backgroundColor: "#16e575",
            borderRadius: ".1875rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Item Name
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
          {props.itemName}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "1.25rem",
          padding: ".625rem .3125rem",
          borderBottom: ".125rem solid",
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
          Quantity
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
        <Button
          variant="contained"
          color="success"
          onClick={viewRequest}
        >
          <Link
            to="/M2"
            state={{
              from: "Request details",
              data: props.data,
              reg: props.reqId
            }}
            style={{ textDecoration: "none" }}
          >
            <Typography>
              view request
            </Typography>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
export default BuyerRequest;
