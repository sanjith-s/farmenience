import React,{useState} from 'react';
import './css/request.css';
function Request(props) {
     var [updateReason,setUpdate] = useState(false);
     const GiveEdit = () => {
          setUpdate(true);
     }
	return (
     <div className="request-box">
        <div className="conatainer">
             <span className="req-no">Farmers Request {props.ReqNo+1}</span>
             <button className="req-btn req-btn1">accept</button>
             <button className="req-btn req-btn2">update</button>
             <button className="req-btn req-btn3">cancel</button><br /><br />
        </div>
        <span className="label">Meet Date</span>
        <input type="date" className="values" value={props.meetDate}/><br/>
        <span className="label">Meet Time</span>
        
        <input type="time" className="values" value={props.meetTime}/>	<br />
        <span className="label">Soil Details  </span>
        
        <span className="values">{props.soilDetails}</span><br />
        <span className="label">Crops Growing </span>
        
        <span className="values">{props.cropsGrowing}</span><br />
        <span className="label">Reason for meet</span>
        
        {updateReason ? 
        <textarea name="" id="" cols="60" rows="2"  className="reasonbox" placeHolder="Type your reason here" ></textarea>:
        <span className="values">{props.meetReason} <button className="edit-btn" onClick={GiveEdit}>✏️</button></span>
        }<br />
        
        <span className="label">TYpe of NGO</span>
        <select name="" id="" className="values" >
        <option value="NGO">NGO</option>
        <option value="Non-NGO">Non-NGO</option>
   
           </select>
           <img src="" alt="Assume there is a image here" className="req-img"/>
           
     </div>
	)
}
export default Request;