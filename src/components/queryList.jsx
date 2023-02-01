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

function Query(props) {
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
        padding: "15px",
        width: "450px",
        borderRadius: "5px",
        border: "2px solid #000000",
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
            padding: "5px 5px 5px 10px",
            backgroundColor: "#16e575",
            borderRadius: "3px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Query ID
        </Typography>
        <Typography
          style={{
            width: "55%",
            padding: "5px 5px 5px 10px",
            backgroundColor: "#c4e1c5",
            borderRadius: "3px",
          }}
        >
          {props.queryID}
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
          Query Name
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
          {props.queryName}
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
          Date
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
          {props.date}
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
            to="/N12"
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
    </Card>
  );
}
export default Query;
