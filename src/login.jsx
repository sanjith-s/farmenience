import "./css/signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import Cookies from "js-cookie";
import { Box, Button, Typography, Input, InputAdornment, IconButton, Card ,TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPwd] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setEmail(document.querySelector("#email").value);
    setPwd(document.querySelector("#pwd").value);
  };

  const submit = async (event) => {
    event.preventDefault();
    let emailChk = 0;
    let passChk = 1;
    if (validator.isEmail(email)) emailChk = 1;
    if (!emailChk) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email address!',
      })
      return;
    }
    if (!passChk) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid password!',
      })
      return;
    }
    await Swal.fire({
      icon: 'success',
      title: 'Validation Successful!',
    })
  };

  const LogMeIn = async (em, pass) => {
    try {
      let response = await Axios.post(`${baseURL}/login`, {
        email: em,
        password: pass,
      });
      if (response.data.message == "Successful") {
        await Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
        });
        Cookies.set("token", response.data.token, { expires: 1 });
        if (response.data.details[0].typeOfAcc == "Farmer") {
          navigate("/N9");
        }
        else if (response.data.details[0].typeOfAcc == "NGO") {
          navigate("/N10");
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
    <Card sx={{ margin: "30px",padding:"20px",width:"665px", boxShadow:20, marginLeft:"420px" }}>
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
            fontWeight={500}
            fontSize={"35px"}
            style={{ textTransform: "uppercase", textAlign: "center" }}
          >

            login page
          </Typography>
        </Box>
        <TextField id="filled-basic" label="Email" variant="filled" sx={{width:"400px"}} value={email} />
        <TextField id="filled-basic" label="Password" variant="filled" type="password"sx={{width:"400px"}} value={password} />
        <Box className="gradient"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "30px",
            width: "fit-content",
            padding:"50px",
            borderRadius:"20px"
            
          }}
        >
          <Box sx={{ display: "flex", columnGap: "30px" }}>
            <Typography fontWeight={500} fontSize={"20px"}            >
              Email
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
            <Typography fontWeight={500} fontSize={"20px"}
             
            >
              Password
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
        <Button
          variant="contained"
          onClick={goToSignup}
          style={{ backgroundColor: "green" }}
        sx={{
          marginLeft:"663px",
          marginTop:"20px"
        }}
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Typography style={{ color: "white" }}>signup</Typography>
          </Link>
        </Button>
      

    </Card>
  );
}

export default Login;
