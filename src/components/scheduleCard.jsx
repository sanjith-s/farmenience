import React from "react";
import dayjs, { Dayjs } from 'dayjs';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { InputAdornment } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Fab from "@mui/material/Fab";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom/dist";
 
const ScheduleCard = (props) => {
  const [value, setValue] = React.useState(dayjs('2022-12-20T21:11:54'));
  const navigate=useNavigate();
  const handleChange = (newValue) => {
  setValue(newValue);
  };
  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  const [details,setDetails]=React.useState("");
  const [crops,setCrops]=React.useState("");
  const [reason,setReason]=React.useState("");
  const [ngo,setNgo]=useState("Select");
  const Reset = () => {
    setCrops("");
    setDetails("");
    props.imageReset();
    props.toggle(false);
    setNgo("Select");
    setReason("");
    setValue();
  }
  const postMeet = () => {
    let token=Cookies.get('token') ;
    let dateStr =new Date(value);
    Axios.post('http://localhost:5000/postmeet',{
      date:dateStr.toLocaleDateString(),
      time:dateStr.toTimeString(),
      details:details,
      crops:crops,
      reason:reason,
      ngotype:ngo,
  },{headers: { tokenstring: token } }).
    then((response)=>{
      console.log(response);
      if(response.data.message==='Meet Added, Waiting for NGO Reply')
      {
        alert('Meet Added, Waiting for NGO Reply');
        navigate('../N6');
      }
    })
    .catch((res)=>{
      if(res.response.data.message==='Error in connection')
      {
        alert('Please Check Network');
      }
      else if(res.response.data.message==='Token not found'||res.response.data.message==='Invalid token'||res.response.data.message==='Session Logged Out , Please Login Again')
      {
        alert('Login error');
        navigate('../login')
      }
      else
      {
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
        onChange={(e)=>{setDetails(e.target.value)}} 
        value={details}
      />
      <TextField
        id="filled-basic"
        label="Crops growing"
        variant="filled"
        color="success"
        onChange={(e)=>{setCrops(e.target.value)}} 
        // InputProps={{
        //   endAdornment: <InputAdornment position="end">₹</InputAdornment>,
        // }}
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        value={crops}
      />
      <TextField
        id="filled-basic"
        // InputProps={{
        //   endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        // }}
        onChange={(e)=>{setReason(e.target.value)}} 
        label="Reason for meet"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
        value={reason}
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
          onChange={(e)=>{setNgo(e.target.value)}} 
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
      <Box textAlign="center" padding={"20px"}>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }} onClick={Reset}>
          Reset To Old Values
        </Button><br /><br />
        <Button variant="contained" sx={{ bgcolor: "#1FE57A" }} onClick={postMeet}>
          Submit
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default ScheduleCard;
