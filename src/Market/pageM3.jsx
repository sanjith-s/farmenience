import React , {useState,useRef, useEffect} from "react";
import SalesCardsList from "../components/salesCardsList";
import SalesItemsList from "../components/salesItemsList";
import { CssBaseline, Typography,Box,Container,Stack,Divider } from "@mui/material";
import {useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import { baseURL } from '../constants';

const orders = [
  {
    id: "1",
    orderDate: new Date(2021,5,12),
    deliveryDate: new Date( 2022,1,27),
    clientName: "Metta1",
    paymentMode: "Safe Payment",
    transactionID: "111",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "carrot","apple"],

    quantity: [30,40,50,10],
    address : "Room No: 10 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "2",
    orderDate: new Date(2022,6,12),
    deliveryDate: new Date( 2022,7,27),
    clientName: "Metta2",
    paymentMode: "Safe Payment",
    transactionID: "222",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "beans","carrot"],
    quantity: [30,40,50,10],
    address : "Room No: 20 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "3",
    orderDate: new Date(2022,7,12),
    deliveryDate: new Date( 2022,8,27),
    clientName: "Metta3",
    paymentMode: "Safe Payment",
    transactionID: "333",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "fibre","apple"],
    quantity: [30,40,50,10],
    address : "Room No: 30 , Kurinji Hostel , CEG , Anna University",
  },
  {
    id: "4",
    orderDate: new Date(2022,8,12),
    deliveryDate: new Date( 2022,9,27),
    clientName: "Metta4",
    paymentMode: "Safe Payment",
    transactionID: "444",
    remarks: "xyz",
    clientEmailId: "chumma@gmail.com",
    clientPh: 1111111111,
    items: ["rice", "wheat", "ragi","apple"],
    quantity: [30,40,50,10],
    address : "Room No: 40 , Kurinji Hostel , CEG , Anna University",
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
  const [selected,setSelected] = useState('');
  const [ordDate,setOrdDate] = useState('');
  const [delDate,setDelDate] = useState('');
  // const [date, setDate] = useState({ordDate:"" , delDate:"" });
  const [salesDetails,setSalesDetails] = useState(orders);
  // let salesDetails;
  const [filt,setFilt] = useState(false);

  const selctedValueHandler = value => {
    setSelected(value);
    setFilt(true);
  }
  // let ordDate = useRef();
  // let delDate = useRef();

  const ordDateHandler = (event) => {
    // ordDate.current = event.target.value;
    setOrdDate(event.target.value);
    if (event.target.value == '' && selected == '' && delDate == '') {
      setFilt(false);
    } else {
    setFilt(true);
    }
    // setDate({...date , ordDate: event.target.value })
  }
  const delDateHandler = (event) => {
    // delDate.current = event.target.value;
    setDelDate(event.target.value);
    if (event.target.value == '' && selected == '' && ordDate == '') {
      setFilt(false);
    } else {
    setFilt(true);
    }
    // setDate({...date , delDate: event.target.value })
  }

  // DELETETION :
  
  // const location = useLocation();

  // if (location.state){
  //   setSalesDetails (() => { return orders.filter( order => {
  //     return order.transactionID != location.state.data ;
  //   }) });
  // }

  // let temp = orders.filter( order => {
  //   return order.transactionID != "" });
  // setSalesDetails ( temp);
   


  // FILTER :
  // ordDate.substr(5,5).substr(0,2) -> month of ordDate ;
  // ordDate.substr(0,4) -> year of ordDate ;
  // delDate.substr(5,5).substr(0,2) -> month of delDate;
  // delDate.substr(0,4) -> year of delDate;

  let productDetails = salesDetails;
  ordDate ? productDetails = salesDetails.filter( product => product.items.includes(selected) && ordDate.substr(0,4) >= product.orderDate.getFullYear() && ordDate.substr(5,5).substr(0,2) == product.orderDate.getMonth() ) : delDate ? productDetails = salesDetails.filter( product => product.items.includes(selected) && delDate.substr(0,4) == product.deliveryDate.getFullYear() && delDate.substr(5,5).substr(0,2) <= product.deliveryDate.getMonth() ) : productDetails = salesDetails.filter( product => product.items.includes(selected) )  ;
  // if( ordDate){
  //   productDetails = salesDetails.filter( product =>  {return product.items.includes(selected) && ordDate.substr(0,4) == product.orderDate.getFullYear() && ordDate.substr(5,5).substr(0,2) == product.orderDate.getMonth() });
  // }
  // else if(delDate){
  //   productDetails = salesDetails.filter( product =>  { return product.items.includes(selected) && delDate.substr(0,4) == product.deliveryDate.getFullYear() && delDate.substr(5,5).substr(0,2) == product.deliveryDate.getMonth()} );
  // }
  // else{
  //   productDetails = salesDetails.filter( product => { return product.items.includes(selected) } );
  // }
  
  const [hello, setHello] = useState([]);

  const someThing = () => {
    // let token = Cookies.get()
    Axios.get("http://localhost:5000/seller/getsales").then((response) => {
        const hell = response.data.message;
        // const hell = response.data.message;
        console.log(typeof(hell));
        setHello(hell);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  useEffect(() => {
    someThing();
  }, []);

  const listOfSales = hello.map((val) => {
    return (
      <div>
        <br></br>
        <span>Consumer Name : {val.clientName} </span>
        <br/>
        <span>Order Date : {val.orderDate} </span>
        <br/>
        <span>Delivery Date : {val.deliveryDate} </span>
        <br/>
        <span>Items : {val.items.map((v) => {
            return(
            <>
              <span>{v.name}</span>
              <span></span>
            </>
            );
        })} </span>
      </div>
    );
  })

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
            <Box component="div" style={{marginTop:"10px",display:"flex",flexDirection:"column",rowGap:"28px"}}>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  flexDirection:"column",
                  rowGap: "8px",
                  justifyContent: "space-between",
                  
                  fontWeight: "600",
                  textTransform:"uppercase"
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
                  flexDirection:"column",
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
            Filtered details
          </Typography>
          <Divider flexItem />
          <SalesCardsList cards={productDetails} all={salesDetails} isFilt={filt}/>
        </Box>
      </Stack>
      {listOfSales}
    </Container>
  );
}

export default PageM3;
