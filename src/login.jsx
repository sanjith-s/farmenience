// import logo from './logo.svg';
import "./css/signup.css";
import { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";

function Login() {
  const captchaRef = useRef(null);

  const [logindata, setLogindata] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setLogindata({ ...logindata, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    //const token = captchaRef.current.getValue();
    //captchaRef.current.reset();
    let emailChk = 0;
    let passChk = 1;

    if (validator.isEmail(logindata.email)) emailChk = 1;

    //if (logindata.password === logindata.confpass) passChk = 1;

    if (!emailChk) {
      alert("Invalid Email Address");
      return;
    }
    if (!passChk) {
      alert("Passwords do not match");
      return;
    }

    alert("Validation successful");
    console.log(token);
  };

  const LogMeIn = (em, pass) => {
    //let em1 = em;
    //let pass1 = pass;
    Axios.get('http://localhost:5000/login/${em}/${pass}')
    .then((response) => {
      if (response.data == "Successful") {
        alert('Login Successful');
        localStorage.setItem("email", email);
        navigate('/homepage2');

        /*if (response.data === "Admin") {
          window.location.href = "http://localhost:3000/admin_homepage"
        } else if (response.data === "Buyer") {
          window.location.href = "http://localhost:3000/homepage2"
        } else if (response.data === "Seller") {
          window.location.href = "http://localhost:3000/homepage3"
        }*/

      } else if (response.data == "Password doesn't exist") {
        console.log("Invalid Email/Password")
        localStorage.setItem("email", "");
        console.log("Success");
      }

      else {
        console.log("Error");
      }
    });

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
              type="text"
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
              type="text"
              name="password"
              value={logindata.password}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <br />
          <button type="submit" class="button" onClick={() => LogMeIn(logindata.email, logindata.password)}>
            {/* <Link id="sign" to='/homepage2'>Login</Link> */}
            Login
          </button>
        </center>
      </form>
    </div>
  );
}

export default Login;
