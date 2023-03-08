import * as React from 'react';
import '../css/pageN10.css';
import Swal from 'sweetalert2';
import AspectRatio from '@mui/joy/AspectRatio';
import "./Pagen10.css";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useEffect, useState } from "react";
import { Typography, Grid, Box, Tabs, Tab, Button, Dialog, DialogTitle, DialogActions } from "@mui/material";

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
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const queries = [
    "Fund Request by Farmer jon ...",
    "Land Assistance by Farmer kesan ...",
    "Fund extension requestt by farmer..",
    "Finance Assistance reg..."
]
const Appoinments = [
    "Appointment at Kancheepuram ...",
    "Meeting in Koyambedu market ...",
    "Meeting regarding soil problem ...",
]
function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-head" >
                <Tabs TabIndicatorProps={{style: {background:'#348467'}}} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={<span className='lab-text'>Latest Queries</span>} {...a11yProps(0)} />
                    <Tab label={<span className='lab-text'>Upcoming Appointments</span>} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='shower'>
                    {queries.map((que,ind) => {
                        return (<div className='texts-box'>
                            <a className='links' href="/n11">
                                <span className='b-text'>{que}</span>
                            </a>
                        </div>)
                    })}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='shower'>
                    {Appoinments.map(que => {
                        return (<div className='texts-box'>
                            <a className='links' href="/n13">
                                <span className='b-text'>{que}</span>
                            </a>

                        </div>)
                    })}
                </div>
            </TabPanel>
        </Box>
    );
}





function OneBox(props) {
    return (
        <a href={props.link}>
            <AspectRatio
                ratio="4/4"
                className="boxes"
                sx={{
                    width: 200,
                    padding: "1%",
                    background: "radial-gradient(#ADCF9F, #36AE7C)",
                    borderRadius: 'md',
                    textAlign: "center",
                    color: "#276548",
                    overflow: "hidden",
                    boxShadow: "0.31rem 0.31rem 0.125rem 0.063rem #ADCF9F",
                    "&:hover": {
                        background: "radial-gradient(#96e0db,#96e0db, #36AE7C)",
                        fontSize: "1.44rem",
                        border: "0.125rem solid #44b68a",
                        borderBottom: "0.25rem solid black",
                        borderTop: "15.875 solid black",
                        animationPlayState: "paused",
                        width: 200
                    }
                }}
            >
                <span className='in-text' >
                    {props.name}
                </span>
            </AspectRatio>
        </a>
    )
}

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



const PageN10 = () => {
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
          setOpen3(true);
          Cookies.remove('token')
          navigate('../login');
        }
        else {
          setOpen4(true);
        }
        console.log(response);
      }).
      catch((response) => {
        if (response.response.data.message === "Token not found" || response.response.data.message === "Logout Fail, Please Logout Again") {
          setOpen5(true);
          navigate('../login');
        }
        if (response.response.data.message === "Invalid token") {
          setOpen6(true);
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

  const buttons = [
    <Button onClick={() => {
      navigate('../N11')
    }}>
      View Queries
    </Button>,
    <Button onClick={() => {
      navigate('../N12')
    }}>
      View Appoinments
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
        {/* <Stack direction="column" spacing={2}>
          <Typography variant="h5" component="h1">Your Profile</Typography>
          <Stack direction="row" spacing={3}>
            <Stack direction="column" spacing={1}>
              <Avatar
                alt=""
                src=""
                sx={{ width: 134, height: 134 }}
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

        } */}

<div style={{ padding: "0 4% 0 4%" }}>
            <div style={{ textAlign: "center" }}>
                <h1 className='head-text'>Welcome back, NGO</h1>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
                <Box
                    sx={{ width: '100%', border: "" }}
                >
                    <Grid container rowSpacing={2} columnSpacing={3}>
                        <Grid item xs={3} className="box2">
                            <OneBox name={"View Appointments"} link={"/n13"} />
                        </Grid>
                        <Grid item xs={3} className="box2">
                            <OneBox name={"View Queries"} link={"/n11"} />
                        </Grid>
                        <Grid item xs={5}>
                            <AspectRatio
                                ratio="3/1"
                                sx={{
                                    width: 600,
                                    padding: "1%",
                                    borderRadius: 'md',
                                    textAlign: "center",
                                    color: "#276548",
                                    overflow: "hidden",
                                }}
                            >
                                <BasicTabs />
                            </AspectRatio>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>



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
    </>
  );
}

export default PageN10