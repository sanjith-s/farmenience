import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PageN7 from "./pageN7";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  var allQueries = [ {
      querySub:"Increase the culltivation of paddy"
    },{
      querySub:"Request for funding"
    },{
      querySub:"Meet to discuss about the culltivation"
  } ];

  var allAppointments = [ {
    date : "22/12/2022",
    time : "11:30 AM",
    venue: "XYZ Park",
  },{
    date : "25/12/2022",
    time : "12:30 PM",
    venue: "Forum Mall, Chennai"  
  } ]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="View Queries" {...a11yProps(0)} />
          <Tab label="View Upcoming Appointments" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {allQueries.map((Query,index)=>{
                return <Card sx={{ minWidth: 275,marginBottom: 2 }}>
                 <CardContent>
                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Query No : {index+1}
                   </Typography>
                   <Typography variant="body2">
                   {Query.querySub}
                   </Typography>
                 </CardContent>
               </Card>
               })}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {allAppointments.map((Appointment,index)=>{
        return <Card sx={{ minWidth: 275,marginBottom: 2 }}>
                 <CardContent>
                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Appointment no : {index+1}
                   </Typography>
                   <Typography variant="body2">
                   Date : {Appointment.date}
                   </Typography>
                   <Typography variant="body2">
                   Time : {Appointment.time}
                   </Typography>
                   <Typography variant="body2">
                   Venue : {Appointment.venue}
                   </Typography>
                 </CardContent>
               </Card>
      })}
      </TabPanel>
    </Box>
  );
}
