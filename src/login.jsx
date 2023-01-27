import "./css/signup.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import Cookies from "js-cookie";
import { Box, Button, TextField, Typography, Input } from "@mui/material";

function Login() {
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogindata({ ...logindata, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    let emailChk = 0;
    let passChk = 1;
    if (validator.isEmail(logindata.email)) emailChk = 1;
    if (!emailChk) {
      alert("Invalid Email Address");
      return;
    }
    if (!passChk) {
      alert("Passwords do not match");
      return;
    }
    alert("Validation successful");
  };

  const LogMeIn = (em, pass) => {
    Axios.post("http://localhost:5000/login", {
      email: em,
      password: pass,
    })
      .then((response) => {
        if (response.data.message == "Successful") {
          alert("Login Successful");
          Cookies.set("token", response.data.token, { expires: 1 });
          if (response.data.details[0].typeOfAcc == "Farmer") {
            navigate("/N9");
          } else {
            navigate("/homepage2");
          }
        } else {
          alert("Error");
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
              value={logindata.email}
              onChange={handleChange}
              endAdornment="@gmail.com"
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
              type="password"
              value={logindata.password}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={() => LogMeIn(logindata.email, logindata.password)}
        >
          login
        </Button>
      </form>

      <Box sx={{ position: "absolute", bottom: "110px", left: "20px" }}>
        <Button
          variant="contained"
          onClick={goToSignup()}
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
          onClick={goToHomepage()}
          style={{ backgroundColor: "green" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography style={{ color: "white", fontWeight: "600" }}>
              back to homepage
            </Typography>
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
