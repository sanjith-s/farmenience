import * as React from "react";
import { styled, darken, alpha, lighten } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import classNames from "clsx";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui";
import { Button } from "@mui/material";

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Tune } from "@mui/icons-material";

const classes = {
  cell: `table-cell`,
  content: `table-content`,
  text: `table-text`,
  sun: `table-sun`,
  cloud: `table-cloud`,
  rain: `table-rain`,
  sunBack: `table-sunBack`,
  cloudBack: `table-cloudBack`,
  rainBack: `table-rainBack`,
  opacity: `table-opacity`,
  appointment: `table-appointment`,
  apptContent: `table-apptContent`,
  flexibleSpace: `table-flexibleSpace`,
  flexContainer: `table-flexContainer`,
  tooltipContent: `table-tooltipContent`,
  tooltipText: `table-tooltipText`,
  title: `table-title`,
  icon: `table-icon`,
  circle: `table-circle`,
  textCenter: `table-textCenter`,
  dateAndTitle: `table-dateAndTitle`,
  titleContainer: `table-titleContainer`,
  container: `table-container`
};

const getBorder = (theme) =>
  `1px solid ${
    theme.palette.mode === "light"
      ? lighten(alpha(theme.palette.divider, 1), 0.88)
      : darken(alpha(theme.palette.divider, 1), 0.68)
  }`;

const DayScaleCell = (props) => (
  <MonthView.DayScaleCell
    {...props}
    style={{ textAlign: "center", fontWeight: "bold" }}
  />
);

// #FOLD_BLOCK
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${classes.cell}`]: {
    color: "#78909C!important",
    position: "relative",
    userSelect: "none",
    verticalAlign: "top",
    padding: 0,
    height: 80,
    borderLeft: getBorder(theme),
    "&:first-of-type": {
      borderLeft: "none"
    },
    "&:last-child": {
      paddingRight: 0
    },
    "tr:last-child &": {
      borderBottom: "none"
    },
    "&:hover": {
      backgroundColor: "white"
    },
    "&:focus": {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      outline: 0
    }
  }
}));
// #FOLD_BLOCK
const StyledDivText = styled("div")(() => ({
  [`&.${classes.text}`]: {
    padding: "0.5em",
    textAlign: "center"
  }
}));
// #FOLD_BLOCK
const StyledAppointmentsAppointment = styled(Appointments.Appointment)(() => ({
  [`&.${classes.appointment}`]: {
    borderRadius: "10px",
    "&:hover": {
      opacity: 0.6
    }
  }
}));

// #FOLD_BLOCK
const StyledToolbarFlexibleSpace = styled(Toolbar.FlexibleSpace)(() => ({
  [`&.${classes.flexibleSpace}`]: {
    flex: "none"
  },
  [`& .${classes.flexContainer}`]: {
    display: "flex",
    alignItems: "center"
  }
}));
// #FOLD_BLOCK
const StyledAppointmentsAppointmentContent = styled(
  Appointments.AppointmentContent
)(() => ({
  [`&.${classes.apptContent}`]: {
    "&>div>div": {
      whiteSpace: "normal !important",
      lineHeight: 1.2
    }
  }
}));

var appointments = [
  {
    startDate: new Date(2023, 6, 23, 9, 30),
    endDate: new Date(2023, 6, 23, 11, 30),
    title: "Meeting with client"
  },
  {
    startDate: new Date(2023, 5, 28, 9, 30),
    endDate: new Date(2023, 5, 28, 11, 30),
    title: "Budget Planning"
  },
  {
    startDate: new Date(2023, 6, 9, 12, 0),
    endDate: new Date(2023, 6, 9, 13, 0),
    title: "Recruiting farmers",
    des:"checking 1 2 3"
  },
  {
    startDate: new Date(2023, 6, 18, 14, 30),
    endDate: new Date(2023, 6, 18, 15, 30),
    title: "Purchasing seeds"
  },
  {
    startDate: new Date(2023, 6, 9, 11, 0),
    endDate: new Date(2023, 6, 9, 12, 0),
    title: "NGO Meet"
  }
];
// #FOLD_BLOCK
function addTime() {
for (let index = 0; index < appointments.length; index++) {
  const element = appointments[index];
  element.title += " [ "+element.startDate.toLocaleTimeString() + " ]";
}
}
 addTime();
function useTimeout(callback, delay) {
  const timeoutRef = React.useRef(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);
  return timeoutRef;
};

const CellBase = React.memo(
  ({
    startDate,
    formatDate,
    otherMonth
    // #FOLD_BLOCK
  }) => {
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
      ? { day: "numeric", month: "long" }
      : { day: "numeric" };
    return (
      <StyledTableCell
        tabIndex={0}
        className={classNames({
          [classes.cell]: true,
          [classes.opacity]: otherMonth
        })}
      >
        <StyledDivText className={classes.text}>
          {formatDate(startDate, formatOptions)}
        </StyledDivText>
      </StyledTableCell>
    );
  }
);

const TimeTableCell = CellBase;

const Appointment = ({ ...restProps }) => (
  <StyledAppointmentsAppointment
    {...restProps}
    className={classes.appointment}
  />
);

const AppointmentContent = ({ ...restProps }) => (
  <StyledAppointmentsAppointmentContent
    {...restProps}
    className={classes.apptContent}
  />
);



const FlexibleSpace = ({ ...restProps }) => (
  <StyledToolbarFlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <div className={classes.flexContainer}>
      <Typography variant="h5" style={{ marginLeft: "10px" }}>
        Your Schedules
      </Typography>
    </div>
  </StyledToolbarFlexibleSpace>
);



export default function Demo(props) {
    const [datas, setData] = useState(appointments);
    const [open, setOpen] = React.useState(false);
    const [load,setLoad] = useState(true);
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
      const newEvent = {
        startDate: new Date(s[4],s[5],s[6],s[8],s[9]),
        endDate: new Date(e[4],e[5],e[6],e[8],e[9]),
        title: document.getElementById("e_name").value
      };
      newEvent.title += "  [ "+ newEvent.startDate.toLocaleTimeString()+" ]";
      setLoad(!load);
      appointments.push(newEvent);
      setData(appointments);
      handleClose();
    }
    return (
      <Paper>
        <div>
        {load ? (<Button variant="contained" onClick={handleClickOpen}>Add Event</Button>) : null}
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
         {load ? (<Scheduler data={datas}>  
          <EditingState  />
          <ViewState defaultCurrentDate="2023-01-26" />
          <MonthView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />
          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <Toolbar flexibleSpaceComponent={FlexibleSpace} />
          <DateNavigator />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm />
          <DragDropProvider />
        </Scheduler> ) : (<Demo />)}
      </Paper>
    );
  };