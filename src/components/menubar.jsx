import React, { useState } from "react";
import "./../css/menubar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Menubar() {
  const [theme, setTheme] = useState("default");
  const onClickHandler = (e) => {
    setTheme("#16e575");
  };
  return (
    <div className="menubar">
      <div className="menu">
        <div className="menu_item">
          <a className="menu_link" href="#">
            <HomeRoundedIcon fontSize="large" />
          </a>
        </div>
        <div style={{ backgroundColor: theme }} className="menu_item">
          <a className="menu_link" href="#" onClick={onClickHandler}>
            track orders
          </a>
        </div>
        <div className="menu_item">
          <a className="menu_link" href="#">
            view requests
          </a>
        </div>
        <div className="menu_item">
          <a className="menu_link" href="#">
            enter details
          </a>
        </div>
      </div>
      <div className="menu_item">
        <a className="menu_link" href="#">
          <NotificationsIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Menubar;
