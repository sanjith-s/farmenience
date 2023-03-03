import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom/dist";

function Query(props) {
  const navigate = useNavigate();
  const submitResponse = () => {
    let token = Cookies.get('token');
    Axios.put('http://localhost:5000/respondquery', {
      id: props.queryID,
      response: response
    }, { headers: { tokenstring: token } }).
      then((response) => {
        if (response.data.message === 'Reponse Submitted Successfully') {
          navigate('../N10');
        }
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          alert(res.response.data.message);
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          navigate('../login');
        }
        else {
          alert(res.response.data.message);
        }
      })
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const [response,setResponse]=React.useState("");
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
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
          onClick={handleClickOpen}
        >
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Respond Query
            </Typography>
        </Button>
      </CardActions>
    </Card>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Response Submit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>{setResponse(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitResponse}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Query;
