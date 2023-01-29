import React, { useState, useCallback } from "react";
import { createTheme, Pivot, PivotItem, ThemeProvider } from "@fluentui/react";
import Calendar from "./Allviews";
import Box from "@mui/material/Box";
import List from "./list";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
const data = [
  {
    title: "Gas Kugelspeicher",
    startDate: "2023-01-27T01:30:00",
    endDate: "2023-01-28T02:00:00",
  },
  {
    id: 27,
    title: "Kessel 1 FW Teil",
    startDate: "2021-10-06T02:30:00",
    endDate: "2021-10-06T15:00:00",
  },
  {
    id: 28,
    title: "FW Netz US/West",
    startDate: "2021-10-07T00:30:00",
    endDate: "2021-10-07T01:00:00",
  },
  {
    id: 42,
    title: "80/40 Red.",
    startDate: "2021-10-05T22:00:00",
    endDate: "2021-10-07T21:00:00",
  },
];

const myTheme = createTheme({
  palette: {
    themePrimary: "#0078d4",
    themeLighterAlt: "#eff6fc",
    themeLighter: "#deecf9",
    themeLight: "#c7e0f4",
    themeTertiary: "#71afe5",
    themeSecondary: "#2b88d8",
    themeDarkAlt: "#106ebe",
    themeDark: "#005a9e",
    themeDarker: "#004578",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
});

export default function App(props) {
  const [datas, setData] = useState(data);
  const [open, setOpen] = React.useState(false);
  var today = "";
  var endDay = "";
  const [value, setValue] = React.useState(today);
  const [value2, setValue2] = React.useState(endDay);
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
    const sd = new Date(s[4], s[5], s[6], s[8], s[9]);
    const ed = new Date(e[4], e[5], e[6], e[8], e[9]);
    const newEvent = [
      {
        startDate: sd.toISOString(),
        endDate: ed.toISOString(),
        title: document.getElementById("e_name").value,
      },
      ...datas,
    ];
    newEvent[0].title += "  [ " + sd.toLocaleTimeString() + " ]";
    setData(newEvent);
    // console.log(datas);
    handleClose();
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 700,
        overflow: "auto",
        position: "absolute",
      }}
    >
      <Grid sx={{ width: "100%", margin: 1 }}>
        <Button
          sx={{ width: "48%", margin: 1 }}
          style={{ backgroundColor: "green" }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Event
        </Button>
        <Button
          sx={{ width: "48%", margin: 1 }}
          style={{ backgroundColor: "red" }}
          variant="contained"
          onClick={() => {
            props.closeToggle(false);
          }}
        >
          Close
        </Button>
      </Grid>
      <ThemeProvider applyTo="body" theme={myTheme}>
        {/* <Stack sx={{ width: "100%" }}></Stack> */}
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

        <Pivot>
          <PivotItem headerText="Calendar">
            <Calendar data={datas} />
          </PivotItem>
          <PivotItem headerText="List">
            <List data={datas} />
          </PivotItem>
        </Pivot>
      </ThemeProvider>
    </Box>
  );
}
