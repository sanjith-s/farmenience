import React from "react";
import "./../css/navbar.css";
import { useState } from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
function Navbar() {
  const [profVisibility, setProfVisibility] = useState("hidden");
  function profileDetails() {
    setProfVisibility((prevVisibility) =>
      prevVisibility === "hidden" ? "none" : "hidden"
    );
  }

  return (
    <div className="navbar">
      {/*<div className="nav">
        <span className="nav-brand">
          <img src="" className="cmp-logo" />
          FARMENiENCE
        </span>
        <span onClick={profileDetails}>
          <img src="" alt="" className="nav-items prof-logo" />
        </span>
        <div className="prof-det" style={{ visibility: profVisibility }}>
          <div className="prof-el"> Profile </div>
          <div className="prof-el"> Logout </div>
        </div>
        <span className="nav-items">About Us</span>
        <span className="nav-items">Home</span>
      </div>*/}
    <div className="nav-items item1"><a href="" className="nav-links">
          <img src="" className="cmp-logo" /></a>
    </div> 
    <div className="nav-items item2"><a href="" className="nav-links  nav-brand">FARMENiENCE</a></div>
    <div className="nav-items item3"><a href="" className="nav-links">Home</a></div> 
    <div className="nav-items item4"><a href="" className="nav-links">About Us</a></div> 
    <div className="nav-items item5"><a href="" className="nav-links"><AccountCircleRoundedIcon fontSize="large"/></a></div> 
    </div>
  );
}
export default Navbar;
