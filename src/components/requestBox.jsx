import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './../css/requestBox.css';
function BuyerRequest(props) {
  let navigate = useNavigate();

	const viewRequest = () => {
    const [buyerRequestDetails, setBuyerRequestDetails] = useState([]);

    Axios.post('http://localhost:9091/api/admin/deleteitem', {
        itemID: id
    }).then((response) => {
        console.log(response)
        if (response.data == 'success') {
            setBuyerRequestDetails(response.data);
            navigate('/pageM3');
        }
    });
}
  
  return (
    <div className="requestbox">
             <div className="r-row">
               <div className="r-key">Request ID</div>
               <div className="r-value">{props.reqId}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Name</div>
               <div className="r-value">{props.name}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Phone Number</div>
               <div className="r-value">{props.phoneNo}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Item Name</div>
               <div className="r-value">{props.itemName}</div>
             </div>
             <div className="r-row">
               <div className="r-key">Quantity</div>
               <div className="r-value">{props.itemQuantity}</div>
             </div>
             <div className="r-row">
             <button onClick={viewRequest} className="r-view">View Request</button>
             </div>
       </div>
	)
}
export default BuyerRequest;