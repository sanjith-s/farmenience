import React from "react";
import "./css/pageM18.css";


const PageM18 = () => {

  return (
    <div>
      <div>
        <span className="title">Upload file</span>
      </div>
      <br></br><br></br><br></br><br></br>
      <div>
      <input type="file" placeholder='Enter value'
          onChange={(event) => { setQty(event.target.value); } }></input>
      </div>
      <center><button class="buttons">Submit Request</button></center>
      <br></br><br></br>
    </div>
  );
};

export default PageM18;
