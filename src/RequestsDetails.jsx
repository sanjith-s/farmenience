<<<<<<< HEAD
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
    {
      props.status==='Waiting for NGO'?<></> :
      <>
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
      </>
    }
    
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
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Cookies from 'js-cookie';
import Axios from "axios";
import Swal from 'sweetalert2';
import { baseURL } from '../constants';

function BuyerRequestDetails(props) {
  let navigate = useNavigate();

  const acceptMeet = async () => {
    let token = Cookies.get('token');
    await Axios.patch(`${baseURL}/acceptmeetbyfarmer/${props.reqId}`, {
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        if (response.data.message === 'You Accepted the Meet') {
          await Swal.fire({
            icon: 'success',
            title: 'Appointment Accepted !!'
          })
          navigate('../N9');
        }
      })
      .catch(async (res) => {
        if (res.response.data.message === 'Error in connection') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Network Connection!',
          })
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Error!',
          })
          navigate('../login')
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.response.data.message,
          })
        }
      })
  }

  const cancelMeet = async () => {
    let token = Cookies.get('token');
    await Axios.patch(`${baseURL}/notacceptmeetbyfarmer/${props.reqId}`, {
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        if (response.data.message === 'Not Accepted New Schedule Meet') {
          await Swal.fire({
            icon: 'info',
            title: 'Appointment Not Accepted !!'
          })
          navigate('../N9');
        }
      })
      .catch(async (res) => {
        if (res.response.data.message === 'Error in connection') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Network Connection!',
          })
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Error!',
          })
          navigate('../login')
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.response.data.message,
          })
        }
      })
  }

  return (
    <Card
      style={{
        padding: "0.94rem",
        width: "80%",
        marginLeft: "10%",
        borderRadius: "0.31rem",
        border: "0.125rem solid #000000",
      }}
    >
      {
        props.status === 'Waiting for NGO' || props.status === 'Meet Accepted' ? <></> :
          <>
            <Button
              style={{
                backgroundColor: "#1fe57a",
                color: "#000000",
                fontWeight: "600",
                fontSize: "1rem",
                border: "0.125rem solid #000000",
                marginTop: "0.94rem",
              }}
              onClick={() => {
                acceptMeet()
              }}
            >
              Accept
            </Button>
            <Button
              style={{
                backgroundColor: "#1fe57a",
                color: "#000000",
                fontWeight: "600",
                fontSize: "1rem",
                border: "0.125rem solid #000000",
                marginTop: "0.94rem",
              }}
              onClick={() => {
                cancelMeet()
              }}
            >
              Cancel
            </Button>
          </>
      }

      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: "0.625rem 0.31rem",
          borderTop: "0.125 solid",
          columnGap: "1.25rem",
        }}
      >

        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Request ID
        </Typography>
        <Typography
          style={{
            width: "55%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.reqId}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Reason
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.meetReason}
        </Typography>
      </CardContent>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          MeetDate
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.status !== 'Waiting for NGO' && props.status !== 'Meet Accepted' ? props.newDate : props.meetDate}
        </Typography>
      </CardContent>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Meet Time
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.status !== 'Waiting for NGO' && props.status !== 'Meet Accepted' ? props.newTime : props.meetTime}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          soil Details
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.soilDetails}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.625rem 0.31rem",
          columnGap: "1.25rem",
        }}
      >
        <Typography
          style={{
            width: "45%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#16e575",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          crops Growing
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
          }}
        >
          {props.cropsGrowing}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "1.25rem",
          padding: "0.625rem 0.31rem",
          borderBottom: "0.125rem solid",
        }}
      >
        <Typography
          style={{
            width: "45%",
            backgroundColor: "#16e575",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            borderRadius: "0.19rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Quantity
        </Typography>
        <Typography
          style={{
            width: "55%",
            paddingLeft: "0.625rem",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.19rem",
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
export default BuyerRequestDetails;
>>>>>>> 6c45c4c132144d50d8712ce5248f784a5efb2244
