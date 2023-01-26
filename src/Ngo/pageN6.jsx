import React from "react";
import { useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import farmImg from "../images/farm_land.jpg";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Request from "../RequestsDetails";
import Navbar from "../components/navbar";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AllRequest() {
  const [listOfRequests, setListOfRequests] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get('http://localhost:5000/getmeet', { headers: { tokenstring: token } }).
      then((response) => {
        setListOfRequests(response.data.message);
      })
      .catch((res) => {
        if (res.response.data.message === 'Error in connection') {
          alert('Please Check Network');
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          alert('Login error');
          navigate('../login')
        }
      })
  }, [listOfRequests]);
  // const listOfRequests = [
  //   {
  //     meetDate: "2023-01-31",
  //     meetTime: "04:30",
  //     cropsGrowing: "paddy, wheat",
  //     meetReason: "To discuss ab cultivation",
  //     soilDetails: "red soil used to grow sbjkbsjkb",
  //     NGOType: "NGO",
  //     img_src: "",
  //   },
  //   {
  //     meetDate: "2022-11-19",
  //     meetTime: "02:30",
  //     cropsGrowing: "paddy, wheat",
  //     meetReason: "The reason is to discuss about jkcnsjs",
  //     soilDetails: "red soil used to grow sbjkbsjkb",
  //     NGOType: "NGO",
  //     img_src: "",
  //   },
  // ];
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
              sx={{ height: "70vh", width: "vw", marginTop: "20px" }}
            >
              <Container
                sx={{
                  bgcolor: "#D9D9D9;",
                  height: "100%",
                  width: "60vw",
                  borderRadius: "50px",
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
                />
              </Container>
              <Container
                disableGutters={true}
                sx={{
                  bgcolor: "#ffff",
                  height: "80%",
                  width: "30vw",
                  borderRadius: "50px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  display: "flex",
                  marginTop: "30px",
                  justifyItems: "center",
                }}
              >
                <img
                  src={farmImg}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    borderRadius: "50px",
                  }}
                />
              </Container>
            </Stack>
            <hr />
          </>
        );
      })}

      <Box textAlign="center" padding={"20px"}>
        <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
          Home Page
        </Button>
      </Box>
    </div>
  );
}
export default AllRequest;
