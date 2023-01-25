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

const appointments = [
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
    title: "Recruiting farmers"
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
for (let index = 0; index < appointments.length; index++) {
  const element = appointments[index];
  element.title += " [ "+element.startDate.toLocaleTimeString() + " ]";
}
// #FOLD_BLOCK
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
    const [data, setData] = useState(appointments);
    return (
      <Paper>
        <Scheduler data={data}>
          <EditingState  />
          <ViewState defaultCurrentDate="2023-07-17" />
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
          <AppointmentTooltip showCloseButton  />
          <AppointmentForm />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  };