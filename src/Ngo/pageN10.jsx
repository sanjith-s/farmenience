import * as React from 'react';
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
        <Stack direction="column" spacing={2}>
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
    </>
  );
}

export default PageN10