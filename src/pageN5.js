import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState, useRef } from "react";
import "./css/pageN5.css";
import Select from 'react-select'
import MultipleValueTextInput from 'react-multivalue-text-input';

const PageN5 = () => {

  const handleChange = (event) => {
    setappntdata({ ...appntdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {

  }

  const [ngoType, setNgoType] = useState([])
  const handleNGOtype = (option) => {
    setNgoType(option);
    setappntdata({ ...appntdata, "ngoType": ngoType.value });
  }
  const [appntdata, setappntdata] = useState({
    meetdate: "",
    image: "",
    soil: "",
    crops: "",
    reason: "",
    ngoType: "",
  });

  const ngotypes = [
    { value: 'type1', label: 'Profit' },
    { value: 'type2', label: 'Non Profit' }
  ]
  return (
    <div className="box">
    <img src={process.env.PUBLIC_URL + '/ngo-meet.jpg'} alt="Hi"></img>
      {/* <Navbar />
      <div className="titlebox"><span className="title">Schedule meet with NGO</span></div>

      <div className="container">
        <div className="ip-cont">
            <div className="r1c"><span className="input-txt">Meeting Date</span></div>
            <div className="r1i"><input type="date" name="meetdate" value={appntdata.meetdate} onChange={handleChange} /></div>
            
            <div className="r2c"><span className="input-txt" >Soil Type</span></div>
            <div className="r2i"><input type="text" name="soil" value={appntdata.soil} onChange={handleChange} /></div>

            <div className="r3c"><span className="input-txt">Crops cultivated</span></div>
            <div className="r3i"><MultipleValueTextInput onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
	onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)} name="crop-input" placeholder="Enter the crops cultivated (Separate multiple crops by comma)" values={[]}
/></div>
            
            <div className="r4c"><span className="input-txt">Reason for visit</span></div>
            <div className="r4i"><input type="text" name="reason" value={appntdata.reason} onChange={handleChange} /></div>

            <div className="r5c"><span className="input-txt">NGO Type</span></div>
            <div className="r5i"><Select onChange={handleNGOtype} options={ngotypes}  className="basic-single"
        classNamePrefix="select" isClearable={true}/></div>
            
            <div className="r6c"><span className="input-txt">Upload crop picture</span></div>
            <div className="r6i"><input type="file" name="image" value={appntdata.image} onChange={handleChange} /></div>
            
        </div>
        <div className="pic-cont"><img src='/logo512.png' alt="ngo meet" /></div>
      </div>
      <button onClick={handleSubmit}>Submit</button> */}
      <Footer />
    </div>
  );
};

export default PageN5;
