import React, { useState } from "react";
import PropTypes from "prop-types";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  WeekView,
  DayView,
  Appointments,
  AllDayPanel,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  TodayButton,
  ConfirmationDialog,
  CurrentTimeIndicator,
  DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui";

function Calendar(props) {
  const { data, onCurrentDateChange, onCommitChanges } = props;

  const [currentViewName, setCurrentViewName] = useState("Month");

  return (
    <Scheduler data={data}>
      <ViewState
        currentViewName={currentViewName}
        onCurrentViewNameChange={setCurrentViewName}
        onCurrentDateChange={onCurrentDateChange}
      />
      <EditingState onCommitChanges={onCommitChanges} />
      <ConfirmationDialog />
      <DayView startDayHour={0.0} endDayHour={24.0} cellDuration={60} />
      <WeekView startDayHour={0.0} endDayHour={24.0} cellDuration={60} />
      <MonthView startDayHour={0.0} endDayHour={24.0} />
      <Appointments />
      <AllDayPanel />
      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <ViewSwitcher />
      <AppointmentTooltip showOpenButton showCloseButton showDeleteButton />
      <DragDropProvider />
      <CurrentTimeIndicator
        shadePreviousCells={true}
        shadePreviousAppointments={true}
        updateInterval={10000}
      />
      <AppointmentForm />
    </Scheduler>
  );
}

Calendar.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onCurrentDateChange: PropTypes.func.isRequired,
  onCommitChanges: PropTypes.func.isRequired
};

Calendar.defaultProps = {
  data: []
};

export default Calendar;
