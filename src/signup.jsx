// import logo from './logo.svg';
import "./css/signup.css";
import { useState, useRef } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function Signup() {
  const captchaRef = useRef(null);
  const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const [signupdata, setsignupdata] = useState({
    email: "",
    password: "",
    confpass: "",
    name: "",
    phone: "",
    aadhar: "",
    addr1: "",
    addr2: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    utype: "",
  });

  const handleChange = (event) => {
    setsignupdata({ ...signupdata, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    //const token = captchaRef.current.getValue();
    //captchaRef.current.reset();
    let emailChk = 0;
    let passChk = 0;

    if (validator.isEmail(signupdata.email)) emailChk = 1;

    if (signupdata.password === signupdata.confpass) passChk = 1;

    if (!emailChk) {
      alert("Invalid Email Address");
      return;
    }
    if (!passChk) {
      alert("Passwords donot match");
      return;
    }

    alert("Validation successful");
    //console.log(token);

    if (emailregex.test(signupdata.email) && passregex.test(signupdata.password) && signupdata.phone.length == 10 && signupdata.password === signupdata.confpass) {
      Axios.post('http://localhost:5000/signup', {
        name: signupdata.name,
        phoneno: signupdata.phone,
        aadhaarno: signupdata.aadhar,
        addline1: signupdata.addr1,
        addline2: signupdata.addr2,
        city: signupdata.city,
        district: signupdata.district,
        state: signupdata.state,
        pincode: signupdata.pincode,
        email: signupdata.email,
        password: signupdata.password,
        typeOfAcc: signupdata.utype
      }).then((response) => {
        // setUserdetails(response.data);
        console.log(response)
        if (response.data.message == 'Success') {
          window.location.href = "http://localhost:3000/login";
        }
      });
    } else {
      alert("Signup not correct !")
    }
  };

  return (
    <div>
      <form>
        <center>
          <span>
            <label class="title">Signup</label>
          </span>
          <br />
          <br />
          <label>
            Name{" "}
            <input
              type="text"
              name="name"
              value={signupdata.name}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Phone Number{" "}
            <input
              type="text"
              name="phone"
              value={signupdata.phone}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Aadhaar Number{" "}
            <input
              type="text"
              name="aadhar"
              value={signupdata.aadhar}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Address Line 1{" "}
            <input
              type="text"
              name="addr1"
              value={signupdata.addr1}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Address Line 2{" "}
            <input
              type="text"
              name="addr2"
              value={signupdata.addr2}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            City/Town{" "}
            <input
              type="text"
              name="city"
              value={signupdata.city}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            District{" "}
            <input
              type="text"
              name="district"
              value={signupdata.district}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            State{" "}
            <input
              type="text"
              name="state"
              value={signupdata.state}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Pincode{" "}
            <input
              type="text"
              name="pincode"
              value={signupdata.pincode}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Email{" "}
            <input
              type="text"
              name="email"
              value={signupdata.email}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Password{" "}
            <input
              type="password"
              name="password"
              value={signupdata.password}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label>
            Confirm Password{" "}
            <input
              type="password"
              name="confpass"
              value={signupdata.confpass}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>
          <label for="type">Account type </label>
          <select name="utype" id="utype">
            <option value="farmer">Farmer</option>
            <option value="volunteer">Volunteer</option>
            <option value="retailer">Retailer</option>
            <option value="jobseeker">Job seeker</option>
          </select>
          <br />
          {/* <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={captchaRef}
          /> */}
          <br />
          <button type="submit" class="button" onClick={submit}>
            <Link id="sign" to='/'>Submit</Link>
          </button>
        </center>
      </form>
    </div>
  );
}

export default Signup;
