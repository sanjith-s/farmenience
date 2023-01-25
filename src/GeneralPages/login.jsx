// import logo from './logo.svg';
import "./css/signup.css";
import { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import Cookies from 'js-cookie';

function Login() {
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const [logindata, setLogindata] = useState({
    email: "",
    password: ""
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
    Axios.post('http://localhost:5000/login', {
      email: em,
      password: pass
    }
    )
      .then((response) => {
        if (response.data.message == "Successful") {
          alert('Login Successful');
          Cookies.set('token', response.data.token, { expires: 1 });
          if (response.data.details[0].typeOfAcc == 'Farmer') {
            navigate('/N9');
          }
          else {
            navigate('/homepage2');
          }
        }
        else {
          alert("Error");
        }
      }).
      catch((response) => {
        alert(response.response.data.message);
        if (response.response.data.message === "Error in login") {
          navigate("/logoutALL", { state: { email: em } });
        }
      });

  }

  const goToSignup = () => {
    navigate('/signup');
  }
  
  const goToHomepage = () => {
    navigate('/homepage1');
  }

  return (
    <div>
      <form onSubmit={submit} method="post">
        <center>
          <span>
            <label class="title">Login</label>
          </span>
          <br />
          <br />
          <label>
            Email{" "}
            <input
              type="email"
              name="email"
              value={logindata.email}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <br></br>
          <label>
            Password{" "}
            <input
              type="password"
              name="password"
              value={logindata.password}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <br />
          <br />
          <button type="submit" class="button" onClick={() => LogMeIn(logindata.email, logindata.password)}>
            {/* <Link id="sign" to='/homepage2'>Login</Link> */}
            Login
          </button>
        </center>
      </form>

      <br />
      <br />
      <button type="button" class="button" onClick={goToSignup()}>
        Signup
      </button>
      <br />
      <br />
      <button class="button" onClick={goToHomepage()}>
        Back to homepage
      </button>

    </div>
  );
}

export default Login;
