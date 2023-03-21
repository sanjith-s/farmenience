import React from "react";
import Details from "./components/NGOProfileComp";
import { Box, Typography, Avatar, Grid } from "@mui/material";

const content = [
  {
    Name: "Tom",
    Aadhaar: "123456789000",
    Phone: "9999999999",
    Address1: "Hostel",
    Address2: "CEG",
    Citytown: "Chennai",
    District: "Chennai",
    State: "Tamilnadu",
    Pincode: "600000",
    Email: "tom@gmail.com",
  },
];

const NGOProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "35px",
      }}
    >
      <Typography
        id="title"
        style={{
          textAlign: "center",
          fontWeight: "600px",
          fontSize: "45px",
          marginBottom: "20px",
          justifyItems: "space-between"
        }}
      >
        Welcome NGO
      </Typography>
      <Grid container spacing={18} >
        <Grid container item xs={6} direction="column" >
          {content.map((id, key) => {
            return (
              <Box>
                <Details
                  key={key}
                  name={id.Name}
                  aadhaar={id.Aadhaar}
                  phone={id.Phone}
                  address1={id.Address1}
                  address2={id.Address2}
                  citytown={id.Citytown}
                  district={id.District}
                  state={id.State}
                  pincode={id.Pincode}
                  email={id.Email}
                />
              </Box>
            );
          })}
        </Grid>
        <Grid container item xs={6} direction="column" >
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s"
            sx={{ width: "200px", height: "200px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NGOProfile;