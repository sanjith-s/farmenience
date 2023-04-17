import "./../css/navbar.css";
import * as React from "react";
import Button from "@mui/material/Button";

function NavbarBeforeLogin() {    
  return (
      <div className="navbar">
        <div className="nav-items item1">
          <a href="" className="nav-links">
            <img src="" className="cmp-logo" />
          </a>
        </div>
        <div className="nav-items item2">
          <a href="" className="nav-links  nav-brand">
            Farmenience
          </a>
        </div>
        <div className="nav-items item3">
          <a href="/" className="nav-links">
            ABOUT US
          </a>
        </div>
        <Button variant="contained" href="../login">Login</Button>
      </div>
  );
}

export default NavbarBeforeLogin;
