import React, { useState, useEffect } from "react";
import RequestBox from "../components/requestBox";
import { Box, Typography } from "@mui/material";
import wheat from "../wheatimg.jpg";
import carrot from "../carrot.jpg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import { baseURL } from '../constants';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

// const values = [
//   {
//     cname: "Consumer name",
//     phno: 2484930933,
//     address: "no 323 , some street,  town, chennai-23232",
//     itemName: "wheat",
//     itemQuantity: "3 ",
//     itemPrice: 250,
//     regNo: "23.42.424",
//     img: wheat,
//   },
//   {
//     cname: "Consumer name",
//     phno: 134132414,
//     address: "no 323 , some street,  some town, mumbai-23232",
//     itemName: "carrot",
//     itemQuantity: 3,
//     itemPrice: 350,
//     regNo: "23.42.425",
//     img: carrot,
//   },
//   {
//     cname: "Consumer name",
//     phno: 2484930933,
//     address: "no 323 , some street,  town, chennai-23232",
//     itemName: "wheat",
//     itemQuantity: "3 ",
//     itemPrice: 250,
//     regNo: "23.42.426",
//     img: wheat,
//   },
//   {
//     cname: "Consumer name",
//     phno: 134132414,
//     address: "no 323 , some street,  some town, mumbai-23232",
//     itemName: "carrot",
//     itemQuantity: 3,
//     itemPrice: 350,
//     regNo: "23.42.427",
//     img: carrot,
//   },
// ];

function PageM1() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/loadrequests`, { headers: { tokenstring: token } }).
      then((response) => {
        setOrders(response.data.message);
      })
      .catch(async (res) => {
        if (res.response.data.message === 'Error in connection') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Network Connection!',
          })
        }
        else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Error',
          })
          navigate('../login')
        }
      });
  }, []);

  let location = useLocation();
  // const [content,setContent] = useState(orders);
  let content;
  let data = location.state;

  if (location.state) {
    console.log(location.state);
    content = orders.filter((order) => {
      return order.regNo !== location.state.regNo
    });

  }
  else {
    console.log("nothing");
    content = orders;
  }

  //  useEffect(()=> {
  //   setOrders(content);
  //   console.log("useeffect");
  //  },content)

  //  setOrders(content);   


  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px 0px",
        marginBottom: "40px",
      }}
    >
      <Box sx={{ padding: "20px 0px" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "600", textTransform: "uppercase" }}
        >
          you have {content.length} requests{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "fit-content",
          border: "5px solid",
          borderRadius: "3px",
          backgroundColor: "#bdfbbf",
        }}
      >
        <Box
          sx={{
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "50px",
            rowGap: "50px",
          }}
        >
          {orders.map((req, index) => {
            return (
              <RequestBox
                key={index + 1}
                reqId={req.reqID}
                name={req.name}
                phoneNo={req.phoneNumber}
                itemName={req.itemName}
                itemQuantity={req.quantity}
                data={req}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
export default PageM1;
