import React from "react";
import Swal from 'sweetalert2'
import dayjs, { Dayjs } from 'dayjs';
import { Grid, TextField } from "@mui/material";
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
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Fab from "@mui/material/Fab";
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const ScheduleCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs('2022-12-20T21:11:54'));
  const navigate = useNavigate();
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
    console.log(Object.values(newValue)[2] + "");
  };
  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  const [details, setDetails] = useState("");
  const [crops, setCrops] = useState("");
  const [reason, setReason] = useState("");
  const [ngo, setNgo] = useState("Select");
  const [location, setLocation] = useState("");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

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
    let token = Cookies.get('token');
    let dateStr = new Date(value);

    Axios.post('http://localhost:5000/postmeet', {
      date: dateStr.toLocaleDateString(),
      time: dateStr.toTimeString(),
      details: details,
      crops: crops,
      reason: reason,
      ngotype: ngo,
      location: location
    }, { headers: { tokenstring: token } }).
      then((response) => {
        console.log(response);
        if (response.data.message === 'Meet Added, Waiting for NGO Reply') {
          Swal.fire({
            icon: 'success',
            title: 'Meet Added !!',
            text: 'Waiting for NGO Reply',
          })
          navigate('../N6');
        }
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
        else {
          alert(res.response.data.message);
        }
      })
  }
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
        // InputProps={{
        //   endAdornment: <InputAdornment position="end">₹</InputAdornment>,
        // }}
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
        // InputProps={{
        //   endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        // }}
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => { setOpen(false) }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are You sure?"}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>Meet Date and TIme</TableCell>
                  <TableCell>{Object.values(value)[2] + ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Soil Details</TableCell>
                  <TableCell>{details}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reason</TableCell>
                  <TableCell>{reason}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NGO</TableCell>
                  <TableCell>{ngo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} rowSpan={2}>
                    <img
                      src={props.imgSrc}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                        borderRadius: "3.125rem",
                      }}
                    /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpen(false) }}>Cancel</Button>
          <Button onClick={postMeet}>CONFIRM</Button>
        </DialogActions>
      </Dialog>
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

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Meet added. Waiting for NGO reply
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
          Please check network connection
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose2}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Login Error
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose3}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ScheduleCard;
