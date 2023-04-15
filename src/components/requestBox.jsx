import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/queryBox.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

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
          Name
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
          {props.name}
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
          Phone Number
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
          {props.phoneNo}
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
          Item Name
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
          {props.itemName}
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
        <Button
          style={{
            backgroundColor: "green",
            border: "2px solid #000000",
            marginTop: "15px",
          }}
          onClick={viewRequest}
        >
          <Link
            to="/M2"
            state={{
              from: "Request details",
              data: props.data,
            }}
            style={{ textDecoration: "none" }}
          >
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              view request
            </Typography>
          </Link>
        </Button>
      </CardActions>
    </Card> */
  );
}
export default BuyerRequest;
