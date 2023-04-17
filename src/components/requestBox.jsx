import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/queryBox.css";
import {
  Card
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

  console.log("requestBox:")

  const data = props.data;
  Object.assign(props.data, { "index": `${props.key}` });
  console.log(props.data);

  return (
    <div>
      <Card id="card-n1">
        <div className="query-card">
          <h3 className="query-card__title">{props.itemName}</h3>
          <div className="query-card__info">
            <p className="query-card__id">Request ID: {props.reqId}</p>
            <p className="query-card__date">Name: {props.name}</p>
            <p className="query-card__date">Phone Number: {props.phoneNo}</p>
            <p className="query-card__date">Quantity: {props.itemQuantity}</p>
          </div>
          <div className="query-card__actions">
            <div>
              <button onClick={viewRequest} className="query-card__button query-card__button--respond">
                <Link
                  to="/M2"
                  state={{
                    from: "Request details",
                    data: props.data,
                  }}
                  style={{ textDecoration: "none" }}
                >
                  View Request </Link>
              </button>
            </div>

          </div>
        </div>
      </Card>
    </div>
    /*     <Card
         boxShadow = {15}
         style={{
            padding: "15px",
            width: "450px",
            borderRadius: "5px", 
          }}
        >
          <CardContent
            style={{
              boxShadow:15,
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
                  data: data,
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
        </Card> */
  );
}
export default BuyerRequest;
