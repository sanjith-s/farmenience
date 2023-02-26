import React from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";

const LogoutAllDevice = () => {
    const location = useLocation();
    const navigate=useNavigate();
    function fun()
    {
        Axios.post('http://localhost:5000/logoutAll',{
            email:location.state.email,
          }
          )
          .then((response) => {
            if (response.data.message == "Successful") {
              alert('Logout Successful');
              navigate('../login');
            }
            else
            {
              alert("Error");
            }
          }).
          catch((response)=>{
            alert(response.response.data.message);
          });
    }
    return (
        <div padding="100px">
           <button onClick={fun}>
            Logout from all device
           </button>
        </div>
    );
};


export default LogoutAllDevice;