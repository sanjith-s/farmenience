import * as React from "react";
import { styled, darken, alpha, lighten } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Calendar from 'react-awesome-calendar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Demo(props) {
  const [events,setEvents] = useState([
  //   {
  //   id: 1,
  //   color: '#fd3153',
  //   from: '2023-05-02T18:00:00+00:00',
  //   to: '2023-05-05T19:00:00+00:00',
  //   title: 'This is an event'
  // }, {
  //   id: 2,
  //   color: '#1ccb9e',
  //   from: '2023-05-01T13:00:00+00:00',
  //   to: '2023-05-05T14:00:00+00:00',
  //   title: 'This is another event'
  // }, {
  //   id: 3,
  //   color: '#3694DF',
  //   from: '2023-05-05T13:00:00+00:00',
  //   to: '2023-05-05T20:00:00+00:00',
  //   title: 'This is also another event'
  // },
  //  {
  //    id:4,
  //    color: 'blue',
  //    from: '2023-01-05T13:00:00+00:00',
  //    to: '2023-01-05T20:00:00+00:00',
  //    title: 'This is also another event'
  //  },
   {
    id:4,
    color: 'blue',
    from: "2023-01-18T21:45:00.000Z",
    to: "2023-01-18T21:50:00.000Z",
    title: 'This is also another event'
  }
  ]);
    const [open, setOpen] = React.useState(false);
    const [load,setLoad] = useState(true);
    const [value, setValue] = React.useState("");
    const [value2, setValue2] = React.useState("");
    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    const handleChange2 = (newValue) => {
      setValue2(newValue);
    };
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const addEvent = () => {
      const s = Object.values(value);
      const e = Object.values(value2);
      const startDate = new Date(s[4],s[5],s[6],s[8],s[9]);
      const endDate = new Date(e[4],e[5],e[6],e[8],e[9]);
      console.log(startDate.toISOString());
      console.log(endDate.toISOString());
      const newEvent = [{
         id: 77,
         color:"blue",
         from:startDate.toISOString(),
         to:endDate.toISOString(),
         title:document.getElementById("e_name").value
      }, ...events]
      setEvents(newEvent);
      console.log(events);
      handleClose();
    }
    return (
      <>
      <Paper>
        <div>
        <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Add New Event</DialogTitle>
         <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
          <TextField
            autoFocus
            margin="dense"
            id="e_name"
            label="Event Name"
            type="text"
            fullWidth
            variant="standard"
          />
        <DesktopDatePicker
          label="Starting Day"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Staring Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Ending Day"
          inputFormat="MM/DD/YYYY"
          value={value2}
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Ending Time"
          value={value2}
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>  
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addEvent}>Add Event</Button>
        </DialogActions>
      </Dialog>
    </div>
    <Button variant="contained" onClick={handleClickOpen}>Add Event</Button>
    <Calendar
    events={events} />
      </Paper>
      
      </>
    );
  };