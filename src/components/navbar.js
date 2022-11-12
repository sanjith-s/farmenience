import React from "react";
import "./../css/navbar.css";
import { useState } from "react";
function Navbar() {
  const [profVisibility, setProfVisibility] = useState("hidden");
  function profileDetails() {
    setProfVisibility((prevVisibility) =>
      prevVisibility === "hidden" ? "none" : "hidden"
    );
  }

  return (
    <div className="">
      <div className="nav">
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
      </div>
    </div>
  );
}
export default Navbar;
