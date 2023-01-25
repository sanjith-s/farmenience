import { green, deepOrange, lightBlue } from '@mui/material/colors';

export const tasks = [
  {
    title: 'Recall Rebate Form',
    priorityId: 2,
    startDate: '2018-04-17T09:30',
    endDate: '2018-04-17T10:00',
  },
  {
    title: 'Create New Shipping Return Labels',
    priorityId: 3,
    startDate: '2018-04-19T13:00',
    endDate: '2018-04-19T14:30',
  },
  {
    title: 'Update Sales Strategy Documents',
    priorityId: 1,
    startDate: '2018-04-18T11:00',
    endDate: '2018-04-18T11:30',
  },
  {
    title: 'Website Re-Design Plan',
    priorityId: 2,
    startDate: '2018-04-27T09:30',
    endDate: '2018-04-27T11:30',
    allDay: true,
  },
  {
    title: 'Book Flights to San Fran for Sales Trip',
    priorityId: 2,
    startDate: '2018-04-27T12:00',
    endDate: '2018-04-27T13:00',
  }
];

export const priorities = [
  { id: 1, text: 'Low Priority', color: green },
  { id: 2, text: 'Medium Priority', color: lightBlue },
  { id: 3, text: 'High Priority', color: deepOrange },
];

export const owners = [
  {
    text: 'Andrew Glover',
    id: 1,
    color: '#7E57C2',
  }, {
    text: 'Arnie Schwartz',
    id: 2,
    color: '#FF7043',
  }, {
    text: 'John Heart',
    id: 3,
    color: '#E91E63',
  }, {
    text: 'Taylor Riley',
    id: 4,
    color: '#E91E63',
  }, {
    text: 'Brad Farkus',
    id: 5,
    color: '#AB47BC',
  }, {
    text: 'Arthur Miller',
    id: 6,
    color: '#FFA726',
  },
];
