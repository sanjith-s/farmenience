import * as React from 'react';
import '../css/pageN9.css';
import Swal from 'sweetalert2'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PageN7 from "../Ngo/pageN7";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";

const handleClose1 = () => {
  setOpen1(false);
};

const handleClose2 = () => {
  setOpen2(false);
};

const handleClose3 = () => {
  setOpen3(false);
};

const handleClose4 = () => {
  setOpen4(false);
};

const handleClose5 = () => {
  setOpen5(false);
};

const handleClose6 = () => {
  setOpen6(false);
};

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
  const history = useNavigate();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get('http://localhost:5000/profile', { headers: { tokenstring: token } }).
      then((response) => {
        setProfile(response.data.message);
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
      })
  }, []);
  function logout() {
    let token = Cookies.get('token')
    Axios.get('http://localhost:5000/logout', { headers: { tokenstring: token } }
    )
      .then((response) => {
        if (response.data.message == "Logout Successful") {
          Swal.fire({
            icon: 'success',
            title: 'Logout Successful'
          })
          Cookies.remove('token')
          navigate('../login');
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
          })
        }
        console.log(response);
      }).
      catch((response) => {
        if (response.response.data.message === "Token not found" || response.response.data.message === "Logout Fail, Please Logout Again") {
          Swal.fire({
            icon: 'warning',
            title: 'Please Login, Before Logout !!',
          })
          navigate('../login');
        }
        if (response.response.data.message === "Invalid token") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Expired, Please Login Again !!',
          })
          navigate('../login');
        }
      });
  }
  const handlePath = () => {
    history("/n7");
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var allQueries = [{
    querySub: "Increase the culltivation of paddy"
  }, {
    querySub: "Request for funding"
  }, {
    querySub: "Meet to discuss about the culltivation"
  }];

  var allAppointments = [{
    date: "22/12/2022",
    time: "11:30 AM",
    venue: "XYZ Park",
  }, {
    date: "25/12/2022",
    time: "12:30 PM",
    venue: "Forum Mall, Chennai"
  }]
  const buttons = [
    <Button onClick={() => {
      navigate('../N1')
    }}>
      View Queries
    </Button>,
    <Button onClick={() => {
      navigate('../N6')
    }}>
      View Appoinments
    </Button>,
    <Button onClick={() => {
      navigate('../N7')
    }}>
      New Query
    </Button>,
    <Button onClick={() => {
      navigate('../N4')
    }}>
      New Appoinment
    </Button>,
    <Button onClick={logout}>LogOut</Button>
  ]
  const characteristics = Object.entries(profile).map((key, i) => {
    return (
      <div key={i}>
        <br></br>
        <span>{key[0]}</span> : <h2>{key[1]}</h2>
        <br></br>
      </div>
    );
  });

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          display: 'flex',
          marginTop: "2%",
          '& > *': {
            m: 1,
          },
        }}
      >
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" component="h1">Your Profile</Typography>
          <Stack direction="row" spacing={3}>
            <Stack direction="column" spacing={1}>
              <Avatar
                alt=""
                src=""
                sx={{ width: "134px", height: "134px" }}
              />
              <Stack>
                <Typography variant='h6'>User name</Typography>
                <Typography variant='h7'>Farmer</Typography>
              </Stack>
            </Stack>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
              variant="text"
            >
              {buttons}
            </ButtonGroup>
          </Stack>
        </Stack>
        {

          characteristics

        }

        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Please check network connection
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
            Login Error
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
            Logout Successful
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose3}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open4}
          onClose={handleClose4}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Error
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose4}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open5}
          onClose={handleClose5}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Please login, before logout
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose5}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={open6}
          onClose={handleClose6}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Login expired, please login again
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose6}>Ok</Button>
          </DialogActions>
        </Dialog>

      </Box>

      {/* <Box sx={{ width: '100%' }}>
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
      <Box textAlign="center" padding={"20px"}>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A",color:"black" }} onClick={handlePath}>
          Make a New Query
        </Button>
      </Box>
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
      <Box textAlign="center" padding={"20px"}>
        <Button variant="contained" sx={{ bgcolor: "#1FE57A",color:"black" }} onClick={()=>{history("/n4")}}>
          Create a new Appointment
        </Button>
      </Box>
      </TabPanel>
    </Box> */}
    </>
  );
}
