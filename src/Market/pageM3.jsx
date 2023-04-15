import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import SalesCardsList from "../components/salesCardsList";
import SalesItemsList from "../components/salesItemsList";
import { CssBaseline, Typography, Box, Container, Stack, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import Swal from 'sweetalert2';
import { baseURL } from '../constants';

const orders = [
  {
    id: "1",
    orderDate: new Date(2021, 5, 12),
    deliveryDate: new Date(2022, 1, 27),
    clientName: "Metta1",
    paymentMode: "Safe Payment",
    transactionID: "111",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "carrot", "apple"],

    quantity: [30, 40, 50, 10],
    address: "Room No: 10 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "2",
    orderDate: new Date(2022, 6, 12),
    deliveryDate: new Date(2022, 7, 27),
    clientName: "Metta2",
    paymentMode: "Safe Payment",
    transactionID: "222",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "beans", "carrot"],
    quantity: [30, 40, 50, 10],
    address: "Room No: 20 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "3",
    orderDate: new Date(2022, 7, 12),
    deliveryDate: new Date(2022, 8, 27),
    clientName: "Metta3",
    paymentMode: "Safe Payment",
    transactionID: "333",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "fibre", "apple"],
    quantity: [30, 40, 50, 10],
    address: "Room No: 30 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "4",
    orderDate: new Date(2022, 8, 12),
    deliveryDate: new Date(2022, 9, 27),
    clientName: "Metta4",
    paymentMode: "Safe Payment",
    transactionID: "444",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "ragi", "apple"],
    quantity: [30, 40, 50, 10],
    address: "Room No: 40 , Kurinji Hostel , CEG , Anna University",
  },
];

const salesItems = [
  "rice",
  "wheat",
  "ragi",
  "apple",
  "fibre",
  "beans",
  "carrot"
];

function PageM3(props) {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const someThing = () => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/seller/getsales`, {
      headers: { tokenstring: token }
    }).then((response) => {
      setData(response.data.message);
    }).catch(async (res) => {
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
    })
  }

  const [orderData, setOrderData] = useState([]);
  async function getOrders() {
    let token = Cookies.get('token');
    await Axios.get(`${baseURL}/seller/getOrders`, {
      headers: { tokenstring: token}
    }).then((res) => {
      setOrderData(res.data.message);
    }).catch(async (res) => {
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
    })
  } 

  useEffect(() => {
    someThing();
    getOrders();
  }, []);

  const [selected, setSelected] = useState('');
  const [ordDate, setOrdDate] = useState('');
  const [delDate, setDelDate] = useState('');
  const [salesDetails, setSalesDetails] = useState(data);
  const [filt, setFilt] = useState(false);

  const selctedValueHandler = value => {
    setSelected(value);
    setFilt(true);
  };

  const ordDateHandler = (event) => {
    setOrdDate(event.target.value);
    if (event.target.value == '' && selected == '' && delDate == '') {
      setFilt(false);
    } else {
      setFilt(true);
    }
  }
  const delDateHandler = (event) => {
    setDelDate(event.target.value);
    if (event.target.value == '' && selected == '' && ordDate == '') {
      setFilt(false);
    } else {
      setFilt(true);
    }
  }

  let productDetails = salesDetails;
  ordDate ? productDetails = salesDetails.filter(product => product.items.includes(selected) && ordDate.substr(0, 4) >= product.orderDate.getFullYear() && ordDate.substr(5, 5).substr(0, 2) == product.orderDate.getMonth()) : delDate ? productDetails = salesDetails.filter(product => product.items.includes(selected) && delDate.substr(0, 4) == product.deliveryDate.getFullYear() && delDate.substr(5, 5).substr(0, 2) <= product.deliveryDate.getMonth()) : productDetails = salesDetails.filter(product => product.items.includes(selected));

  return (
    <Container style={{ boxSizing: "borderBox", padding: "20px" }}>
      <CssBaseline />
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ display: "block", padding: "10px", fontWeight: "600" }}
      >
        SALES DETAILS
      </Typography>

      <Stack
        spacing={4}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="div"
          sx={{
            width: "40%",
            bgcolor: "#cccccc",
            padding: "20px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            rowGap: "20px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              alignSelf: "flex-start",
              marginTop: "15px",
              lineHeight: "0px",
            }}
          >
            Filter by
          </Typography>
          <Divider flexItem />
          <Box>
            <SalesItemsList itemsList={salesItems} onSelectedValue={selctedValueHandler} />
          </Box>

          <Box sx={{ width: "75%" }}>
            <Typography
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "28px",
              }}
            >
              date
            </Typography>
            <Box component="div" style={{ marginTop: "10px", display: "flex", flexDirection: "column", rowGap: "28px" }}>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "8px",
                  justifyContent: "space-between",

                  fontWeight: "600",
                  textTransform: "uppercase"
                }}
              >
                ordered date :
                <input
                  style={{
                    width: "75%",
                    border: "2px solid ",
                    borderRadius: "4px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                  type="date"
                  // ref = {ordDate}
                  onChange={ordDateHandler}
                ></input>
              </Typography>

              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "8px",
                  justifyContent: "space-between",

                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                delivery date :
                <input
                  style={{
                    width: "75%",
                    cursor: "pointer",
                    border: "2px solid ",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                  }}
                  type="date"
                  // ref={delDate}
                  onChange={delDateHandler}
                ></input>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          component="div"
          sx={{
            width: "60%",
            bgcolor: "#aaaaaa",
            padding: "20px 0px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" sx={{ padding: "0px 20px" }}>
            Sales List
          </Typography>
          <Divider flexItem />
          <SalesCardsList cards={productDetails} all={data} isFilt={filt} />
          {/* <SalesCardsList all={orderData} /> */}
        </Box>
      </Stack>
    </Container>
  );
}

export default PageM3;
