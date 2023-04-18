import "./css/signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import Cookies from "js-cookie";
import { Box, Button, Typography, Input, InputAdornment, IconButton, Card, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';
import login1 from "./images/LOGIN.png";
import { useContext } from "react";
import { AuthContext } from "./App";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPwd] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setEmail(document.querySelector("#email").value);
    setPwd(document.querySelector("#pwd").value);
  };

  document.title = "Login - Farmenience";

  const submit = async (event) => {
    event.preventDefault();
    let emailChk = 0;
    let passChk = 1;
    if (validator.isEmail(email)) emailChk = 1;
    if (!emailChk) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email address!',
      })
      return;
    }
    if (!passChk) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid password!',
      })
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Validation Successful!',
    })
  };
  const { auth, setAuth, role, setRole } = useContext(AuthContext);

  const LogMeIn = async (em, pass) => {

    try {
      let response = await Axios.post(`${baseURL}/login`, {
        email: em,
        password: pass,
      });
      if (response.data.message == "Successful") {
        Cookies.set("token", response.data.token, { expires: 1 });
        localStorage.setItem("auth",response.data.token);
        localStorage.setItem("role",response.data.details[0].typeOfAcc);
        await Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
        });
        setAuth(true);
          setRole(response.data.details[0].typeOfAcc);
        if (response.data.details[0].typeOfAcc == "Farmer") {
          Cookies.set("token", response.data.token, { expires: 1 });
        localStorage.setItem("auth",response.data.token);
        localStorage.setItem("role",response.data.details[0].typeOfAcc);
          navigate("/FarmerHomepage");
        }
        else if (response.data.details[0].typeOfAcc == "NGO") {
          Cookies.set("token", response.data.token, { expires: 1 });
        localStorage.setItem("auth",response.data.token);
        localStorage.setItem("role",response.data.details[0].typeOfAcc);
          navigate("/N10");
        }
        else if (response.data.details[0].typeOfAcc == "Retailer") {
          Cookies.set("token", response.data.token, { expires: 1 });
        localStorage.setItem("auth",response.data.token);
        localStorage.setItem("role",response.data.details[0].typeOfAcc);
          navigate("/M9");
        }
        else {
          navigate("/homepage2");
        }
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error in logging in!',
        });
      }
    }

    catch (response) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: response.response.data.message,
      })
      if (response.response.data.message === "Error in login") {
        navigate("/logoutALL", { state: { email: em } });
      }
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToHomepage = () => {
    navigate("/signup");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
    <Box align="center">
      <Card sx={{
      
        backgroundColor: "#96f0ff", margin: "1.875rem",
        padding: "1.25rem", width: "41.563rem", boxShadow: 20, alignItems:"center", justifyContent:"center"
      }}>
        <form
          onSubmit={submit}

          method="post"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "1.875rem",

          }}
        >
          <Box align="center">
            <img src={login1} alt="Login Image" width="50px" length="50px" />
            <Typography
              mt={2}
              fontWeight={500}
              fontSize={"2.188rem"}
              style={{ textTransform: "uppercase", textAlign: "center" }}
            >

              login
            </Typography>

          </Box>
          <TextField onChange={(e) => { setEmail(e.target.value) }} id="filled-basic" label="Email"
            variant="filled" sx={{ width: "25rem", backgroundColor: "#f5f5f5" }} value={email} />
          <TextField onChange={(e) => { setPwd(e.target.value) }} id="filled-basic"
            label="Password" variant="filled" type="password" sx={{ width: "25rem", backgroundColor: "#f5f5f5" }} value={password} />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000080", color: "white", "&:hover": {
                backgroundColor: "#4B0081",
              }
            }}

            onClick={() => LogMeIn(email, password)}
          >
            login
          </Button>
        </form>

      </Card>

      <div style={{ color: "blue", fontSize: "1.25rem", textAlign: "center" }}><a href="../signup">Don't have an account ?</a></div>
      <br />
      <div style={{ color: "blue", fontSize: "1.25rem", textAlign: "center" }}><a href="../forgetPasswordGetEmail">Forgot Password ?</a></div>
      <br /><br />
      </Box>
    </>
  );
}

export default Login;