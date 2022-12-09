import React from "react";
import { useState, useRef } from "react";
import "./css/pageM11.css";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import MultipleValueTextInput from "react-multivalue-text-input";
import ItemCard from "./components/itemCard";

const PageM11 = () => {
  const handleChange = (event) => {
    setappntdata({ ...appntdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {};

  const [ngoType, setNgoType] = useState([]);
  const handleNGOtype = (option) => {
    setNgoType(option);
    setappntdata({ ...appntdata, ngoType: ngoType.value });
  };
  const [appntdata, setappntdata] = useState({
    meetdate: "",
    image: "",
    soil: "",
    crops: "",
    reason: "",
    ngoType: "",
  });

  return (
    <div className="box">
      <div className="titlebox">
        <span className="title">Marketplace</span>
      </div>
      <div className="searchCont">
        <div className="sip">
          <input type="text" placeholder="search" className="searchbox" />
        </div>
        <div className="sic">
          <SearchIcon className="sicon" fontSize="medium" />
        </div>
      </div>
      <div className="container">
        <div className="ip-cont"><span>Filter By</span></div>
        <div className="item-cont">
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default PageM11;
