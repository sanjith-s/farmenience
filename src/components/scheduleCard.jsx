import React from "react";
import Swal from 'sweetalert2'
import dayjs from 'dayjs';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, Divider, Button, TextField, Slide } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { baseURL } from '../constants';
import { PropaneSharp } from "@mui/icons-material";

const ScheduleCard = (props) => {
  const [value, setValue] = React.useState(dayjs('2022-12-20T21:11:54'));
  const navigate = useNavigate();
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
    console.log(Object.values(newValue)[2] + "");
  };

  const [details, setDetails] = useState("");
  const [crops, setCrops] = useState("");
  const [reason, setReason] = useState("");
  const [ngo, setNgo] = useState("Select");
  const [location, setLocation] = useState("");

  const Reset = () => {
    setCrops("");
    setDetails("");
    props.imageReset();
    props.toggle(false);
    setNgo("Select");
    setReason("");
    setValue();
  }

  const postMeet = async () => {
    let token = Cookies.get('token');
    let dateStr = new Date(value);
    console.log(props.imgSrc);

    await Axios.post(`${baseURL}/postmeet`, {
      date: dateStr.toLocaleDateString(),
      time: dateStr.toTimeString(),
      details: details,
      crops: crops,
      reason: reason,
      ngotype: ngo,
      location: location,
      image: props.imgSrc
    }, { headers: { tokenstring: token } }).
      then(async (response) => {
        console.log(response);
        if (response.data.message === 'Meet Added, Waiting for NGO Reply') {
          await Swal.fire({
            icon: 'success',
            title: 'Meet Added !!',
            text: 'Waiting for NGO Reply',
          })
          navigate('../N6');
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
          navigate('../login')
        }
        else {
          alert(res.response.data.message);
        }
      })
  }

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DesktopDatePicker
          label="Meet Date"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{
            backgroundColor: "#C4E1C5",
            borderBottomColor: "black",
            width: "70%",
          }} />}
        />
        <TimePicker
          label="Meet Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{
            backgroundColor: "#C4E1C5",
            borderBottomColor: "black",
            width: "70%",
          }} />}
        />
      </LocalizationProvider>
      <TextField
        id="filled-basic"
        label="Soil Details"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        inputProps={{
          maxLength: 100,
          minLength: 1
        }}
        onChange={(e) => { setDetails(e.target.value) }}
        value={details}
      />
      <TextField
        id="filled-basic"
        label="Crops growing"
        variant="filled"
        color="success"
        onChange={(e) => { setCrops(e.target.value) }}
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        inputProps={{
          maxLength: 100,
          minLength: 1
        }}
        value={crops}
      />
      <TextField
        id="filled-basic"
        onChange={(e) => { setReason(e.target.value) }}
        label="Reason for meet"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        inputProps={{
          maxLength: 80,
          minLenght: 1
        }}
        value={reason}
      />
      <TextField
        id="filled-basic"
        label="Location"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        inputProps={{
          maxLength: 100,
          minLength: 1
        }}
        onChange={(e) => { setLocation(e.target.value) }}
        value={location}
      />
      <Box sx={{
        backgroundColor: "#C4E1C5",
        borderBottomColor: "black",
        width: "70%",
      }}>
        <FormControl fullWidth>
          <InputLabel id="r1">Type of NGO</InputLabel>
          <Select
            labelId="r1"
            id="r2"
            value={ngo}
            label="Select"
            onChange={(e) => { setNgo(e.target.value) }}
          >
            <MenuItem value={'Select'}>Select</MenuItem>
            <MenuItem value={'NGO'}>NGO</MenuItem>
            <MenuItem value={'Non-NGO'}>Non-NGO</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        display="flex"
        justifyContent="center"
      >
      </Stack>
      <Box textAlign="center" padding={"1.25rem"}>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }} onClick={Reset}>
          Reset To Old Values
        </Button><br /><br />
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }} onClick={async () => {
          await Swal.fire({
            icon: 'info',
            title: 'Please confirm the details ...',
            html: "<b>Meet Date and Time: </b> " + Date(Object.values(value)[2]) + "<br /><br />" + "<b>Soil Details: </b>" + details + "<br /><br />" + "<b>Reason: </b>" + reason + "<br /><br />" + "<b>NGO: </b>" + ngo + "<br /><br />",
          });
          postMeet();
        }}>
          Submit
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default ScheduleCard;
