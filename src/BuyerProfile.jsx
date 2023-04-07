import { Avatar, Typography, Box, Grid, Paper, TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Email, Phone, LocationOn, Home, PinDrop, PermIdentity,Fingerprint } from '@material-ui/icons';
import "./css/styleProfile.css";
import { Stack } from '@mui/material';
const c = {
  Name: "Yuvaraj Vetrivel",
  Aadhaar: "123456789000",
  Phone: "9129942399",
  Address1: "Hostel",
  Address2: "CEG",
  Citytown: "Chennai",
  District: "Chennai",
  State: "Tamilnadu",
  Pincode: "600000",
  Email: "yuviexample@gmail.com",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s"
};
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  }
}))

function ProfilePage({ name, email, phoneNumber, location, homeAddress, city, state, pincode, aadharNumber, profilePicture }) {
  const classes = useStyles();
  return (
    <div className='backProfile'>
      <div className='profileBox' style={{
        width: "70%",
        height:"57%",
      }}>
        <Stack direction={"column"} spacing={1}
          sx={{
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative", bottom: "10%"
          }}
        >
          <Box
            sx={{
              display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%",height:"max-content"
            }}>
            <Stack sx={{
              display: "flex", alignItems: "center", justifyContent: "center", width: "25%"
            }}>
              <Typography variant='h6'>16</Typography>
              <Typography variant='subtitle1'>Products Purchased</Typography>
            </Stack>
            <Avatar className={classes.avatar} src={profilePicture} alt={name} />
            <Stack direction={"row"}  sx={{ width: "25%" }} spacing={1}>
            <Button color="success" variant="contained">Edit Profile</Button>
            <Button color="error" variant="contained">Logout</Button>
            </Stack>
          </Box>
          <Typography variant='h4'>{name}</Typography>
          <Box sx={{boxShadow:"0px 0px 10px lightgrey",margin:"20%",padding:"2%",borderRadius:"10px 15px",marginBottom:"5%"}}>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <Email />
              <Typography>{email}</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Phone />
              <Typography>{phoneNumber}</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <LocationOn />
              <Typography>{city}</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Fingerprint />
              <Typography>{aadharNumber}</Typography>
            </Stack>
          </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
}


export default function () {
  return (
    <>
      <ProfilePage name={c.Name} email={c.Email} phoneNumber={c.Phone} city={c.Citytown} homeAddress={c.Address1} state={c.State} pincode={c.Pincode} aadharNumber={c.Aadhaar} profilePicture={c.src} />
    </>
  )
}