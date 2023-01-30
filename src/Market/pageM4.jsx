import React, { useState } from "react";
import PriceTable from "../components/priceTable";
import ProductDetails from "../components/productDetails";
import { useLocation } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

const itemsBought = [
  {
    sno: 1,
    item: "rice",
    quantity: 0,
    eachPrice: "60",
    price: 0,
    
  },
  {
    sno: 2,
    item: "wheat",
    quantity: 0,
    eachPrice: "40",
    price: 0,
    
  },
  {
    sno: 3,
    item: "ragi",
    quantity: 0,
    eachPrice: "60",
    price: 0,
    
  },
  {
    sno: 4,
    item: "fibre",
    quantity: 0,
    eachPrice: "35",
    price: 0,
    
  },

  {
    sno: 5,
    item: "beans",
    quantity: 0,
    eachPrice: "42",
    price: 0,
   
  },
  {
    sno: 6,
    item: "carrot",
    quantity: 0,
    eachPrice: "24",
    price: 0,
  },
  {
    sno: 7,
    item: "apple",
    quantity: 0,
    eachPrice: "30",
    price: 0,
  },
];

const item = {
  id: 1 ,
  orderDate: "21/12/2022",
  deliveryDate: "27/12/2022",
  clientName: "Person Z",
  paymentMode: "Safe Payment",
  transactionID: "xxxyyyzzz",
  remarks: "xyz",
  clientEmailId: "chumma@gmail.com",
  clientPh: 1111111111,
  items: ["rice", "wheat", "carrot"],
  address : "Room No: 30 , Kurinji Hostel , CEG , Anna University",
};



const billingAddress = "Room No: 30 , Kurinji Hostel , CEG , Anna University";

function PageM4() {

  const [open,setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);

  }

  const location = useLocation();

  const data = location.state ? location.state.data : item ;


  let filterItems;
  
  const handleChange = () => {

    

     filterItems =     itemsBought.filter((value) => {
      if ( (data.items).includes(value.item))
      {
        return value;

      }
    });

    filterItems.forEach((value,index)=>{ 
      value.quantity = data.quantity[index] ;
      value.price = value.quantity * value.eachPrice ;
    });
  }

  handleChange();

  let tot_amount = 0;
  filterItems.map((item) => {
    tot_amount += item.quantity * item.eachPrice;
    return;
  });

  return (
    <Card>
    <Box style={{padding:"15px 0px"}}>
        <Typography
          variant="h4"
          style={{ fontWeight: "600", textTransform: "uppercase",textAlign:"center" }}
        >
          {location.state? location.state.from : "sales"}
        </Typography>
      </Box>
   
    <Box
      sx={{
        display: "flex",
        columnGap: "20px",
        backgroundColor: "#fff",
        padding: "0px 20px 20px 20px",
      }}
    >
      <CssBaseline />
      
      <CardContent
        sx={{
          width: "40%",
          bgcolor: "#ddd",
          padding: "20px 0px",
          borderRadius: "8px",
          border: "4px solid",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: "0px 20px",
            textTransform: "capitalize",
          }}
        >
          product details
        </Typography>
        <Box
          sx={{
            padding: "15px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProductDetails
            style={{ padding: "15px 0px" }}
            key={data.id}
            orderDate={data.orderDate}
            deliveryDate={data.deliveryDate}
            clientName={data.clientName}
            paymentMode={data.paymentMode}
            transactionID={data.transactionID}
            remarks={data.remarks}
          />
        </Box>
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              fontWeight: "600",
              fontSize: "17px",
              backgroundColor: "green",
            }}
            onClick={handleClickOpen}
          >
            contact client
          </Button>
        </Box>
        <Dialog open={open} onClick={handleClickClose} >
          <DialogTitle style={{borderBottom:"5px solid green"}}> <Typography style={{textTransform:"uppercase",fontWeight:"600"}}>client contact details</Typography></DialogTitle>
          <List>
            <ListItem>
              <ListItemButton ><Typography style={{textTransform:"lowercase"}}>{data.clientEmailId}</Typography></ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton><Typography>{data.clientPh}</Typography></ListItemButton>
            </ListItem>
          </List>
        </Dialog>
      </CardContent>

      <CardContent
        style={{
          width: "60%",
          position: "relative",
          paddingTop: "80px",
          border: "4px solid",
          borderRadius: "10px",
          backgroundColor: "#eee",
        }}
      >
        <CssBaseline />
        <Box>
          <Button
            onClick={window.print}
            variant="contained"
            style={{
              fontWeight: "600",
              fontSize: "17px",
              backgroundColor: "green",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
          >
            Print PDF
          </Button>
          <Box
            sx={{
              display: "flex",
              columnGap: "20px",
              margin: "5px 0px",
              width: "100%",
              alignItems: "center",
              padding: "12px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                width: "27%",
              }}
            >
              billing address :
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "18px",
                overflow: "auto",
              }}
            >
              {data.address}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "20px",
            }}
          >
            <PriceTable rows={filterItems} />
          </Box>

          <Box
            sx={{
              display: "flex",
              columnGap: "20px",
              margin: "5px 0px",
              width: "100%",
              padding: "12px",
            }}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                fontWeight: "600",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              Total amount to be paid :
              <Typography
                variant="h6"
                style={{
                  fontWeight: "600",
                  paddingLeft: "15px",
                  width: "30%",
                }}
              >
                ₹ {tot_amount}
              </Typography>
            </Typography>
          </Box>
          <Button
          // onClick={handleChange}
            variant="contained"
            style={{
              fontWeight: "600",
              fontSize: "17px",
              backgroundColor: "green",
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
          >
            Delete Sale
          </Button>
        </Box>
      </CardContent>
    </Box>
    </Card>
  );
}
export default PageM4;
