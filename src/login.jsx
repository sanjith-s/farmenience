// import logo from './logo.svg';
import "./css/signup.css";
import { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";

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
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    let emailChk = 0;
    let passChk = 0;

    if (validator.isEmail(logindata.email)) emailChk = 1;

    if (logindata.password === logindata.confpass) passChk = 1;

    if (!emailChk) {
      alert("Invalid Email Address");
      return;
    }
    if (!passChk) {
      alert("Passwords donot match");
      return;
    }

    alert("Validation successful");
    console.log(token);
  };

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
          <button type="submit" class="button">
          <Link id="sign" to='/homepage2'>Login</Link>
          </button>
        </center>
      </form>
    </div>
  );
}

export default Login;
