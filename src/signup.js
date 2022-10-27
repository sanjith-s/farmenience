// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import validator from 'validator';

function Signup() {
  const [signupdata, setsignupdata] = useState({
    email: "",
    password: "",
    confpass: "",
  });


  const handleChange = (event) => {
    setsignupdata({ ...signupdata, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    let emailChk = 0;
    let passChk = 0;

    if(validator.isEmail(signupdata.email)) emailChk = 1;

    if(signupdata.password === signupdata.confpass) passChk = 1;

    if(!emailChk) {
      alert('Invalid Email Address')
      return;
    }
    if(!passChk) {
      alert('Passwords donot match')
      return;
    }
    
    alert('Validation successful')
  }

  return (
    <div>
      <form onSubmit={submit} method='post'>
        <span>Signup</span><br/><br/>
        <label>Email: <input type='text' name='email' value={signupdata.email} onChange={handleChange} /><br /><br /></label>
        <label>Password: <input  type='text' name='password' value={signupdata.password} onChange={handleChange} /><br /><br /></label>
        <label>Confirm Password: <input type='text' name='confpass' value={signupdata.confpass} onChange={handleChange} /><br /><br /></label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
