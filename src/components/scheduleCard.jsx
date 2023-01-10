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
 
const ScheduleCard = () => {
  const [value, setValue] = React.useState(dayjs('2022-12-20T21:11:54'));
  const handleChange = (newValue) => {
  setValue(newValue);
  };
  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
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
      />
      <TextField
        id="filled-basic"
        label="Crops growing"
        variant="filled"
        color="success"
        InputProps={{
          endAdornment: <InputAdornment position="end">₹</InputAdornment>,
        }}
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
      />
      <TextField
        id="filled-basic"
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        label="Reason for meet"
        variant="filled"
        color="success"
        sx={{
          backgroundColor: "#C4E1C5",
          borderBottomColor: "black",
          width: "70%",
        }}
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
          value={age}
          label="Age"
          onChange={handleChange2}
        >
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
    </React.Fragment>
  );
};

export default ScheduleCard;
