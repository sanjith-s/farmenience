import "./css/signup.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import Cookies from "js-cookie";
import { Box, Button, Typography, Input, InputAdornment, IconButton, Dialog, DialogTitle, DialogActions } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { baseURL } from '../src/constants';

function Login() {
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPwd] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

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
  
  const handleChange = (event) => {
    setEmail(document.querySelector("#email").value);
    setPwd(document.querySelector("#pwd").value);
  };
  const submit = (event) => {
    event.preventDefault();
    let emailChk = 0;
    let passChk = 1;
    if (validator.isEmail(email)) emailChk = 1;
    if (!emailChk) {
      setOpen1(true);
      return;
    }
    if (!passChk) {
      setOpen2(true);
      return;
    }
    setOpen3(true);
  };

  const LogMeIn = (em, pass) => {
    Axios.post(`${baseURL}/login`, {
      email: em,
      password: pass,
    })
      .then((response) => {
        if (response.data.message == "Successful") {
          setOpen4(true);
          Cookies.set("token", response.data.token, { expires: 1 });
          if (response.data.details[0].typeOfAcc == "Farmer") {
            navigate("/N9");
          }
          else if(response.data.details[0].typeOfAcc == "NGO")
          {
            navigate("/N10");
          } 
          else {
            navigate("/homepage2");
          }
        } else {
          setOpen5(true);
        }
      })
      .catch((response) => {
        alert(response.response.data.message);
        if (response.response.data.message === "Error in login") {
          navigate("/logoutALL", { state: { email: em } });
        }
      });
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToHomepage = () => {
    navigate("/signup");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box sx={{ margin: "30px" }}>
      <form
        onSubmit={submit}
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "30px",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            style={{ textTransform: "uppercase", textAlign: "center" }}
          >
            login page
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "30px",
            width: "fit-content",
          }}
        >
          <Box sx={{ display: "flex", columnGap: "30px" }}>
            <Typography
              style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
            >
              email
            </Typography>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </Box>

          <Box
            sx={{ display: "flex", columnGap: "30px", alignSelf: "flex-start" }}
          >
            <Typography
              style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
            >
              password
            </Typography>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="pwd"
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={() => LogMeIn(email, password)}
        >
          login
        </Button>
      </form>

      <Box sx={{ position: "absolute", bottom: "110px", left: "20px" }}>
        <Button
          variant="contained"
          onClick={goToSignup}
          style={{ backgroundColor: "green" }}
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Typography style={{ color: "white" }}>signup</Typography>
          </Link>
        </Button>
      </Box>

      <Box sx={{ position: "absolute", bottom: "110px", right: "20px" }}>
        <Button
          variant="contained"
          onClick={goToHomepage}
          style={{ backgroundColor: "green" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography style={{ color: "white", fontWeight: "600" }}>
              back to homepage
            </Typography>
          </Link>
        </Button>
      </Box>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Invalid email address
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
          Invalid password
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
          Validation Successful
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
          Login Successful
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
          Error in logging in
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose5}>Ok</Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}

export default Login;
