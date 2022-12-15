import React from "react";
import "../css/negotNav.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function NegotNav() {
  return (
    <div className="negot_nav">
      <div className="arrow_back">
        <ArrowBackIosIcon />
      </div>
      <div className="nav_text">My negotiation</div>
    </div>
  );
}
export default NegotNav;
