import React from "react";
import { Link } from 'react-router-dom'
import "./css/pageM18.css";

const Homepage1 = () => {

  return (
    <div>
      <div>
        <span className="title">Homepage Before Login</span>
      </div>
      <br></br><br></br><br></br><br></br>
      <center><button className="buttons"><Link id="sign" to='/signup'>Signup</Link></button></center>
      <center><button classNam="buttons"><Link id="sign" to='/login'>Login</Link></button></center>
      <br></br><br></br>
    </div>
  );
};

export default Homepage1;
