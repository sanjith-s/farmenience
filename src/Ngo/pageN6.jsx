import React from "react";
import '../css/pageN6.css';
import Swal from 'sweetalert2'
import farmImg from "../images/farm_land.jpg";
import { Container, Button, Dialog, DialogTitle, DialogActions, Box, Stack, Divider } from "@mui/material";
import Request from "../RequestsDetails";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllRequest() {
  const [listOfRequests, setListOfRequests] = useState([
    {
      _id: 34,
      date: "22/2/2023",
      time: "03:00AM",
      reason: "Discuss about funding",
      details: "Red Soil land",
      crops: "rice,wheat",
      status: "Good"
    }
  ]);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navigate = useNavigate();

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get('http://localhost:5000/getmeet', { headers: { tokenstring: token } }).
      then((response) => {
        setListOfRequests(response.data.message);
        console.log(response.data.message)
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Network Connection!',
          })
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Error',
          })
          navigate('../login')
        }
      })
  }, []);
  return (
    <div className="">
      <br />
      <p className="total-req-count">You Have {listOfRequests.length} Request</p>
      {listOfRequests.map((request, index) => {
        return (
          <>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={0}
              sx={{ height: "70vh", width: "vw", marginTop: "1.25rem" }}
            >
              <Container
                sx={{
                  bgcolor: "#D9D9D9;",
                  height: "100%",
                  width: "60vw",
                  borderRadius: "3.125rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Request
                  reqId={request._id}
                  meetDate={request.date}
                  meetTime={request.time}
                  meetReason={request.reason}
                  soilDetails={request.details}
                  cropsGrowing={request.crops}
                  itemQuantity={request._id}
                  status={request.status}
                  newDate={request.requestdate}
                  newTime={request.requesttime}
                />
              </Container>
              <Container
                disableGutters={true}
                sx={{
                  bgcolor: "#ffff",
                  height: "80%",
                  width: "30vw",
                  borderRadius: "3.125rem",
                  paddingLeft: "0rem",
                  paddingRight: "0rem",
                  display: "flex",
                  marginTop: "1.875rem",
                  justifyItems: "center",
                }}
              >
                <img
                  src={farmImg}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "3.125rem",
                  }}
                />
              </Container>
            </Stack>
            <hr />
          </>
        );
      })}

      <Box textAlign="center" padding={"1.25rem"}>
        <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
          Home Page
        </Button>
      </Box>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Please check network connection
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose1}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Login Error
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose2}>Ok</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
export default AllRequest;
