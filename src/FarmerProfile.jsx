import React, { useState, useEffect } from "react";
import Details from "./components/FarmerProfileComp";
import { Avatar, Typography, Box, Paper, TextField, IconButton } from '@material-ui/core';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom/dist";
import { makeStyles } from '@material-ui/core/styles';
import { Email, Phone, LocationOn, Home, PinDrop, PermIdentity, Fingerprint, AccountBalance, AspectRatio } from '@material-ui/icons';
import ModeEdit from '@mui/icons-material/ModeEdit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import "./css/styleProfile.css";
import { Stack } from '@mui/material';
import { baseURL } from '../src/constants';
import Cookies from 'js-cookie';
import Axios from "axios";
import Swal from 'sweetalert2';
import { useContext } from "react";
import { AuthContext } from "./App";

const c = {
  Name: "Yuvaraj Vetrivel",
  Aadhaar: "123456789000",
  Phone: "9129942399",
  Address1: "25, Kamraj Street,",
  Address2: "T - Nagar,",
  Citytown: "Chennai",
  District: "Chennai",
  State: "Tamilnadu",
  Pincode: "600000",
  Email: "yuviexample@gmail.com",
};



const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
    boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
  }
}))

function ProfilePage({ name, email, phoneNumber, location, line1, line2, city, district, state, pincode, aadharNumber, profilePicture }) {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  // }

  // const fullAnotherSpeak = (text) => {
  //   responsiveVoice.speak(text, "Tamil Male");
  // }

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
  //   document.body.appendChild(addScript);
  // }, []);
  
  
  const classes = useStyles();
  const { auth, setAuth, role, setRole } = useContext(AuthContext);
  const [cropEdit,setCEdit] = useState(false);
  const [skillEdit,setSEdit] = useState(false);
  const [crops, setCrops] = useState(["Rice","wheat"]);
  const [skills, setSkills] = useState(["Farming"]);
  const addCrop = ()=> {
    const newVal = document.getElementById("newCrop").value;
    setCrops([...crops,newVal]);
    document.getElementById("newCrop").value = "";
  }
  const removeCrop = (e)=> {
    const rmVal = e.target.name;
    const updatedCrops = crops.filter((c)=> c!== rmVal);
    setCrops(updatedCrops);
  }
  const addSkill = ()=> {
    const newVal = document.getElementById("newSkill").value;
    setSkills([...skills,newVal]);
    document.getElementById("newSkill").value = "";
  }
  const removeSkill = (e)=> {
    const rmVal = e.target.name;
    const updatedSkills = skills.filter((c)=> c!== rmVal);
    setSkills(updatedSkills);
  }
  const navigate = useNavigate();
  const logout = async () => {
    let token = Cookies.get('token')
    await Axios.get(`${baseURL}/logout`, { headers: { tokenstring: token } }
    )
      .then(async (response) => {
        if (response.data.message == "Logout Successful") {
          await Swal.fire({
            icon: 'success',
            title: 'Logout Successful'
          })
          Cookies.remove('token');
          localStorage.removeItem("auth");
          localStorage.removeItem("role");
          setAuth(false);
          setRole("");
          navigate('../login');
        }
        else {
          await Swal.fire({
            icon: 'error',
            title: 'Error',
          })
        }
        console.log(response);
      }).
      catch(async (response) => {
        if (response.response.data.message === "Token not found" || response.response.data.message === "Logout Fail, Please Logout Again") {
          await Swal.fire({
            icon: 'warning',
            title: 'Please Login, Before Logout !!',
          })
          navigate('../login');
        }
        if (response.response.data.message === "Invalid token") {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Expired, Please Login Again !!',
          })
          navigate('../login');
        }
      });
  }
  return (
    <div className='backProfile' style={{
      background: "linear-gradient(-4deg,white 0%,white 50%,#91e6bc 50%,#91e6bc 100%)",
      height:"max-content"
    }} id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}>
      <div className='profileBox' style={{
        width: "70%",
        background: "linear-gradient(176deg,#91e6bc 0%,white 70%)"
      }}>
        <Stack direction={"column"} spacing={1}
          sx={{
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative", bottom: "7%"
          }}
        >
          <Box
            sx={{
              display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%"
            }}>
            <Stack sx={{
              display: "flex", alignItems: "center", justifyContent: "center", width: "15%"
            }}>
              <Typography variant='h6'></Typography>
              <Typography variant='subtitle1'></Typography>
            </Stack>
            <Avatar className={classes.avatar} src={profilePicture} alt={name} />
            <Button color="error" variant="contained" sx={{ width: "15%" }} onClick={logout}>Logout</Button>
          </Box>
        </Stack>
        <Stack direction={"column"} spacing={1}
          sx={{
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative", bottom: "7%"
          }}>

          <Typography variant='h4'>{name}</Typography>
          <Typography variant='subtitle1'>Farmer Account</Typography>
          <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }} sx={{ width: "80%" }}>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "", justifyContent: "center" }}>
              <Box className='fitem1' sx={{ boxShadow: "0rem 0rem 0.625rem lightgrey",
               margin: "5%", padding: "2%", borderRadius: "0.625rem 0.938rem", 
               marginBottom: "5%", width: "80%" }}>
                <Stack sx={{ margin: "2%" }} divider={<Divider orientation="horizontal" flexItem />} spacing={1} >
                  <Stack direction={"row"} spacing={1}><AccountBalance /><Typography>Personal Info</Typography></Stack>
                  <Stack sx={{ padding: "1%" }} spacing={1}>
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
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "", justifyContent: "center" }}>
              <Box className='fitem1' sx={{ boxShadow: "0rem 0rem 0.625rem lightgrey", 
              margin: "5%", padding: "2%", paddingTop: "1%", 
              borderRadius: "0.625rem 0.938rem", marginBottom: "5%", width: "80%" }}>
                <Stack sx={{ margin: "2%" }} divider={<Divider orientation="horizontal" flexItem />} spacing={1} >
                  <Stack direction={"row"} spacing={1}><AccountBalance /><Typography>Address</Typography></Stack>
                  <Stack sx={{ padding: "1%" }} spacing={1}>
                    <Typography>{line1}</Typography>
                    <Typography>{line2}</Typography>
                    <Typography>{city}</Typography>
                    <Typography>{district} - {pincode}</Typography>
                    <Typography>{state}</Typography>
                  </Stack>
                </Stack>
              </Box>

            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "", justifyContent: "center" }}>
              <Box className='fitem1' sx={{ boxShadow: "0rem 0rem 0.625rem lightgrey", 
              margin: "5%", padding: "2%", paddingTop: "1%",
               borderRadius: "0.625rem 0.938rem", marginBottom: "5%", width: "80%" }}>
                <Stack sx={{ margin: "2%" }} divider={<Divider orientation="horizontal" flexItem />} spacing={1} >
                  <Stack direction={"row"} spacing={1} sx={{display:"flex",alignContent:"center",alignItems:"center"}}>
                    <AccountBalance />
                    <Typography>Crops Growing</Typography>
                    <button style={{border:0,marginLeft:"auto",backgroundColor:"transparent"}} onClick={()=>{setCEdit(!cropEdit)}} ><ModeEdit /></button>
                  </Stack>
                  <Stack sx={{ padding: "1%" }} spacing={1}>
                 {crops.map(crop=>{
                 return (  
                  <Stack direction={"row"} spacing={1} sx={{display:"flex",alignContent:"center",alignItems:"center"}}>
                 <Typography>{crop}</Typography>
                 {cropEdit && <button style={{margin:0,marginLeft:"auto",border:0,backgroundColor:"transparent"}} onClick={removeCrop} name={crop}>❌</button>}
                 </Stack> )
                 })}
                 {cropEdit && <Stack direction={"row"} spacing={1} sx={{display:"flex",alignContent:"center",alignItems:"center"}}>
                  <TextField variant='standard' label="Add Item" id="newCrop" />
                  <IconButton onClick={addCrop} style={{margin:"auto",textAlign:"center",borderRadius:"50%",border:0}} ><AddCircleIcon fontSize='large' color="success" /></IconButton>
                  </Stack>
                 }
                  </Stack>
                </Stack>
              </Box>

            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "", justifyContent: "center" }}>
              <Box className='fitem1' sx={{ boxShadow: "0rem 0rem 0.625rem lightgrey", 
              margin: "5%", padding: "2%", paddingTop: "1%", 
              borderRadius: "0.625rem 0.938rem", marginBottom: "5%", width: "80%" }}>
              <Stack sx={{ margin: "2%" }} divider={<Divider orientation="horizontal" flexItem />} spacing={1} >
                  <Stack direction={"row"} spacing={1} sx={{display:"flex",alignContent:"center",alignItems:"center"}}>
                    <AccountBalance />
                    <Typography>Skills</Typography>
                    <button style={{border:0,marginLeft:"auto",backgroundColor:"transparent"}} onClick={()=>{setSEdit(!skillEdit)}} ><ModeEdit /></button>
                  </Stack>
                  <Stack sx={{ padding: "1%" }} spacing={1}>
                 {skills.map(skill=>{
                 return (  
                  <Stack direction={"row"} spacing={1} sx={{display:"flex",alignContent:"center",alignItems:"center"}}>
                 <Typography>{skill}</Typography>
                 {skillEdit && <button style={{margin:0,marginLeft:"auto",border:0,backgroundColor:"transparent"}} onClick={removeSkill} name={skill} >❌</button>}
                 </Stack> )
                 })}
                 {skillEdit && <Stack direction={"row"} spacing={1} sx={{display:"flex",alignContent:"center",alignItems:"center"}}>
                  <TextField variant='standard' label="Add Item" id="newSkill" />
                  <IconButton onClick={addSkill} style={{margin:"auto",textAlign:"center",borderRadius:"50%",border:0}} ><AddCircleIcon fontSize='large' color="success" /></IconButton>
                  </Stack>
                 }
                  </Stack>
                </Stack>
              </Box>

            </Grid>
          </Grid>

        </Stack>
      </div>
    </div>
  );
}


export default function () {
  
  const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s";
  
const [data, setData] = useState([]);

useEffect(() => {
  let token = Cookies.get('token');
  Axios.get(`${baseURL}/profile`, { headers: { tokenstring: token } }).
    then((response) => {
      setData(response.data.message);
      console.log(data);
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
    })
}, []);

  return (
    <div>
      <ProfilePage name={data.name} email={data.email} phoneNumber={data.phoneno} city={data.city} district={data.district} line1={data.addline1} line2={data.addline2} state={data.state} pincode={data.pincode} aadharNumber={data.aadhaarno} profilePicture={src} />
    </div>
  )
}