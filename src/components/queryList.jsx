import React from "react";
import {
  Card,
  Button,
} from "@mui/material";
import "../css/queryBox.css";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom/dist";

function Query(props) {
  const navigate = useNavigate();
  const submitResponse = async () => {
    let token = Cookies.get('token');
    Axios.put('http://localhost:5000/respondquery', {
      id: props.queryID,
      response: response
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        if (response.data.message === 'Reponse Submitted Successfully') {
          await Swal.fire({
            icon: 'success',
            title: 'Response Submitted Successfully !!',
          })
          navigate('../N10');
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
            text: 'Login Error',
          })
          navigate('../login');
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.response.data.message,
          })
        }
      })
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card id="card-n1">
        <div className="query-card">
          <h3 className="query-card__title">{props.queryName}</h3>
          <div className="query-card__info">
            <p className="query-card__id">Query ID: {props.queryID}</p>
            <p className="query-card__date">Date: {props.date}</p>
          </div>
          <div className="query-card__actions">
            <div>
              <button onClick={handleClickOpen} className="query-card__button query-card__button--respond">
                Respond Query
              </button>
            </div>

          </div>
        </div>
      </Card>
      {/* /*     
    <Card
      style={{
        padding: "0.94rem",
        width: "28.125rem",
        borderRadius: "0.31rem",
        border: "0.125rem solid #000000",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: "0.625rem 0.31rem",
          borderTop: "0.125rem solid",
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
          Query ID
        </Typography>
        <Typography
          style={{
            width: "55%",
            padding: "0.31rem 0.31rem 0.31rem 0.625rem",
            backgroundColor: "#c4e1c5",
            borderRadius: "0.188",
          }}
        >
          {props.queryID}
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
          Query Name
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
          {props.queryName}
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
          Date
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
          {props.date}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      > */ }
      {/*         <Button
          style={{
            backgroundColor: "green",
            border: "0.125rem solid #000000",
            marginTop: "0.94rem",
          }}
          onClick={handleClickOpen}
        >
            <Typography>
              Respond Query
            </Typography>
        </Button>
      </CardActions>
    </Card> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Response Submit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Response"
            fullWidth
            variant="standard"
            onChange={(e) => { setResponse(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" sx={{
            backgroundColor: "#ffdf00", color: "black", "&:hover": {
              backgroundColor: "#ffff00",
            }
          }} >Cancel</Button>
          <Button onClick={submitResponse} variant="contained" sx={{
            backgroundColor: "#ffdf00", color: "black", "&:hover": {
              backgroundColor: "#ffff00",
            }
          }} >Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Query;
