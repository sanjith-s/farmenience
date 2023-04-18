import "./css/signup.css";
import { useState } from "react";
import validator from "validator";
import Axios from "axios";
import Geocode from "react-geocode";
Geocode.setLanguage("en");
Geocode.setApiKey("AIzaSyD-79BSbusu8q97EMXY2Ewy16Xtlhi4UFA");
import { useNavigate } from "react-router-dom/dist";
import {
  Box,
  Button,
  Typography,
  Input,
  Select,
  MenuItem,
  FormControl,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Icon,
} from "@mui/material";
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';
import useGeoLocation from '../src/components/useGeoLocation';
import { Delete, DeleteOutline, FileUploadOutlined, FileUploadRounded, FileUploadTwoTone, Padding, Upload, UploadFileRounded, UploadFileSharp } from "@mui/icons-material";
import getThemeProps from '@material-ui/styles/getThemeProps'
import collage12 from "./images/sign_up.jpg";

function Signup() {
  // const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  // const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const location = useGeoLocation();

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const nextStep = () => {
    if (activeStep < 2)
      setActiveStep((currentStep) => currentStep + 1)
  }

  const prevStep = () => {
    if (activeStep !== 0)
      setActiveStep((currentStep) => currentStep - 1)
  }

  const [signupdata, setsignupdata] = useState({
    email: "",
    password: "",
    confpass: "",
    name: "",
    phone: "",
    aadhar: "",
    addr1: "",
    addr2: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    utype: "",
  });

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [file, setFile] = useState();
  const [filename, setFilename] = useState({})
  const [isUploaded, setIsUploaded] = useState(false);
  const [file1, setFile1] = useState();
  const [filename1, setFilename1] = useState({});
  const [isUploaded1, setIsUploaded1] = useState(false);
  const [file2, setFile2] = useState();
  const [filename2, setFilename2] = useState({});
  const [isUploaded2, setIsUploaded2] = useState(false);

  function handleChange(e) {
    console.log(e.target.files[0]);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
    setFilename(e.target.files[0]);
  }

  function handleChange1(e) {
    console.log(e.target.files[0]);
    setIsUploaded1(true);
    setFile1(URL.createObjectURL(e.target.files[0]));
    setFilename1(e.target.files[0]);
  }

  function handleChange2(e) {
    console.log(e.target.files[0]);
    setIsUploaded2(true);
    setFile2(URL.createObjectURL(e.target.files[0]));
    setFilename2(e.target.files[0]);
  }

  const addSignupData = (event) => {
    setsignupdata({ ...signupdata, [event.target.name]: event.target.value });
  };

  Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );

  const submit = async (event) => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by browser");
    }

    else {
      setStatus("Locating..");
      navigator.geolocation.getCurrentPosition((postion) => {
        setStatus(null);
        setLat(postion.coords.latitude);
        setLng(postion.coords.longitude);
        console.log(postion.coords.latitude, 2);
      },
        () => {
          setStatus("Unable to retrieve your location");
        })
    }

    alert(signupdata.email)
    { location.loaded ? alert(JSON.stringify(location)) : alert("Location data not available yet") }
    event.preventDefault();
    let emailChk = 0;
    let passChk = 0;

    if (validator.isEmail(signupdata.email)) emailChk = 1;

    if (signupdata.password === signupdata.confpass) passChk = 1;

    if (!emailChk) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email address!',
      })
      return;
    }
    if (!passChk) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      })
      return;
    }

    await Swal.fire({
      icon: 'success',
      title: 'Validation Successful!',
    })
    await Swal.fire({
      icon: 'success',
      title: selection,
    })
    if (
      signupdata.password === signupdata.confpass
    ) {
      let FILE1 = '';
      let formData1 = new FormData();
      formData1.append('caption', "hello");
      formData1.append('file', filename1);
      console.log(Array.from(formData1.entries()))
      await Axios.post(`${baseURL}/upload`, formData1)
        .then(async (response) => {
          console.log(response);
          FILE1 = response.data.message;
        })
        .catch(async (res) => {
          alert(res.response.data.message);
        })

      let FILE2 = '';
      let formData2 = new FormData();
      formData2.append('caption', "hello");
      formData2.append('file', filename2);
      console.log(Array.from(formData2.entries()))

      await Axios.post(`${baseURL}/upload`, formData2)
        .then(async (response) => {
          console.log(response);
          FILE2 = response.data.message;
        })
        .catch(async (res) => {
          alert(res.response.data.message);
        })

      alert(FILE1 + " " + FILE2);

      await Axios.post(`${baseURL}/signup`, {
        name: signupdata.name,
        phoneno: signupdata.phone,
        aadhaarno: signupdata.aadhar,
        addline1: signupdata.addr1,
        addline2: signupdata.addr2,
        city: signupdata.city,
        district: signupdata.district,
        state: signupdata.state,
        pincode: signupdata.pincode,
        email: signupdata.email,
        password: signupdata.password,
        typeOfAcc: selection,
        latitude: lat,
        longitude: lng,
        doc1: FILE1,
        doc2: FILE2,
      })
        .then((response) => {
          if (response.data.message == "Success") {
            navigate("/login");
          }
        })
        .catch(async (res, err) => {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.response.data.message,
          })
        });
    } else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Signup not correct!',
      })
    }
  };

  const [selection, setSelection] = useState("");
  const selectionChange = (event) => {
    setSelection(event.target.innerText);
    console.log(event.target.innerText);
  };

  const stepStyle = {

    "& .MuiStepIcon-root": {
      fontSize: "1.5rem",
      fontFamily: "Roboto",
      fontWeight: 500,
    },

    "& .MuiStepConnector-line": {
      borderColor: "black",
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff"
        /* margin: "30px",
        display: "flex",
        flexDirection: "column", */
        /*         
        alignItems: "left",
        rowGap: "40px",
        ,
        width:"50%",
        borderRadius: "40", */
      }}
    >
      <Box
        pt={2}
        sx={{ width: "available" }}
        alignItems={"top"}
      >
        <Typography
          variant="h4"
          style={{
            textTransform: "uppercase", textAlign: "center",
            fontFamily: "Roboto", fontSize: "30px", color: "black", fontWeight: 1000
          }}
        >
          signup
        </Typography>
      </Box>
      <Box ml={30} mr={30} mt={5} borderRadius={2}
        pt={2} pb={2} backgroundColor="#96f0ff" align="center">
        <Stepper activeStep={activeStep} alternativeLabel sx={stepStyle} >
          <Step >
            <StepLabel  >
              <Typography
                style={{
                  textTransform: "uppercase",
                  alignSelf: "flex-end", fontFamily: "Roboto",
                  fontSize: "15px", color: "black", fontWeight: 900
                }}
              >
                Details
              </Typography>
            </StepLabel>
          </Step>
          <Step >
            <StepLabel >
              <Typography
                style={{
                  textTransform: "uppercase",
                  alignSelf: "flex-end", fontFamily: "Roboto",
                  fontSize: "15px", color: "black", fontWeight: 900
                }}
              >
                Documents Upload
              </Typography>
            </StepLabel>
          </Step>
        </Stepper></Box>

      {activeStep === 0 &&
        <Box>
          <Box
            sx={{
              boxShadow: 10,
              margin: "50px",
              display: "flex",
              flexDirection: "column",

              rowGap: "40px",
              backgroundColor: "#96F0FF",
              width: "50%",
              borderRadius: "20px",
              padding: "50px",
              float: "left",
            }}
          >
            <form style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  alignItems: "center",
                  /* width: "100%",  */
                  /* float:"left" */
                }}
              >
                {/*               <Typography
                style={{ textTransform: "uppercase", 
                alignSelf: "flex-end", fontWeight:"50px" ,
                fontSize : "20px", color:"black" }}
              >
                name
              </Typography> */}
                <TextField

                  sx={{ width: "100%" }}
                  label="Name"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="name"
                  value={signupdata.name}
                  onChange={addSignupData}

                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                phone number
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Phone Number"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="tel"
                  name="phone"
                  value={signupdata.phone}
                  onChange={addSignupData}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                aadhaar number
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Aadhar Number"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="aadhar"
                  value={signupdata.aadhar}
                  onChange={addSignupData}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                address line 1
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Address Line 1"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="addr1"
                  value={signupdata.addr1}
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                address line 2
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Address line 2"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="addr2"
                  value={signupdata.addr2}
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                city / town
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="City/Town"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="city"
                  value={signupdata.city}
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                district
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="District"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="district"
                  value={signupdata.district}
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                state
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="State"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="state"
                  value={signupdata.state}
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/*  <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                pincode
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Pin Code"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="text"
                  name="pincode"
                  value={signupdata.pincode}
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                email
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  type="email"
                  name="email"
                  value={signupdata.email}
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/* <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                password
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Password"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  // type={sh owPassword1 ? 'text' : 'password'}
                  type="password"
                  name="password"
                  value={signupdata.password}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //       onClick={handleClickShowPassword1}
                  //       edge="end"
                  //     >
                  //       {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/*  <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                confirm password
              </Typography> */}
                <TextField
                  sx={{ width: "100%" }}
                  label="Confirm Password"
                  id="filled-basic"
                  variant="filled"
                  inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  // type={showPassword2 ? 'text' : 'password'}
                  type="password"
                  name="confpass"
                  value={signupdata.confpass}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //       onClick={handleClickShowPassword2}
                  //       edge="end"
                  //     >
                  //       {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                  onChange={addSignupData}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px", }}>
                {/*   <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" , 
                fontFamily : "Roboto", fontSize:20,color:"black",fontWeight : 500}}
              >
                account type
              </Typography> */}

                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Account Type"
                    id="filled-basic"
                    variant="filled"
                    inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 15 } }}
                  >

                    <FormControl variant="standard" sx={{ width: "12.5rem" }}>
                      <Select value={selection} onClick={selectionChange}>
                        <MenuItem value="Farmer">
                          <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                            farmer
                          </Typography>
                        </MenuItem>
                        <MenuItem value="NGO">
                          <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                            NGO
                          </Typography>
                        </MenuItem>
                        <MenuItem value="Retailer">
                          <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                            retailer
                          </Typography>
                        </MenuItem>
                        <MenuItem value="Job Seeker">
                          <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                            job seeker
                          </Typography>
                        </MenuItem>
                      </Select>

                    </FormControl>
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                      <TextField
                        sx={{ width: "100%" }}
                        label="Account Type"
                        id="filled-basic"
                        variant="filled"
                        inputProps={{ style: { fontSize: 15, backgroundColor: "#f5f5f5", borderRadius: 5 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 15 } }}
                      >

                        <FormControl variant="standard" sx={{ width: "12.5rem" }}>
                          <Select value={selection} onClick={selectionChange}>
                            <MenuItem value="Farmer">
                              <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                                farmer
                              </Typography>
                            </MenuItem>
                            <MenuItem value="NGO">
                              <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                                NGO
                              </Typography>
                            </MenuItem>
                            <MenuItem value="Retailer">
                              <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                                retailer
                              </Typography>
                            </MenuItem>
                            <MenuItem value="Job Seeker">
                              <Typography style={{ textTransform: "capitalize", fontSize: 15 }}>
                                job seeker
                              </Typography>
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </TextField>
                    </FormControl>
                  </TextField>
                </FormControl>
              </Box>
            </form>

          </Box>
          <Box
            pt={10}
            pb={5}
            align="center" >
            <img src={collage12} alt="Customer photo" width="400px" length="1500px" />
          </Box>

          <Box width="available" align="center">
            <Button
              variant="contained"
              type="submit"
              onClick={nextStep}
              style={{ backgroundColor: "blue", fontWeight: "900", fontSize: "20px" }}>
              Next Step
            </Button>
          </Box>

        </Box>
      }

      {activeStep === 1 &&
        <Box width="100%" length="available" backgroundColor="#ffffff"
          align="center">
          {/*   <Box
           pt = {5}
           sx = {{width:"available"}}
           alignItems={"top"}
           >
            <Typography
              variant="h4"
              style={{ textTransform: "uppercase", textAlign: "center",
              fontFamily: "Rubiks Pixels" , fontSize : "30px", color:"black" }}
            >
              signup page
            </Typography>
            </Box>    */}
          <Box width="100%" alignItems={"center"}  >
            <form style={{ width: "600px" }}>
              {selection === "Farmer" &&
                <Box
                  margin={4}
                  align="left"
                  sx={{

                    boxShadow: 10,
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "10px",
                    alignSelf: "center"
                    /* display: "flex", */
                    /* justifyContent: "space-between", */
                  }}
                >
                  <Box display="flex" >
                    <Typography
                      style={{
                        margin: "20px", width: "400px",
                        fontFamily: "Roboto", fontSize: "20px", color: "black",
                        fontWeight: 500
                      }}
                    >
                      Land Document
                    </Typography>

                    <input
                      type="file"
                      id="imgUp"
                      style={{ display: "none" }}
                      maxsize="2"
                      minsize="1"
                      onChange={addSignupData}
                    />
                    <label
                      htmlFor="imgUp"
                      style={{ textTransform: "uppercase", margin: "20px", display: "flex" }}
                    >
                      <Box backgroundColor="#3ded97" display={"flex"}
                        borderRadius={1} alignItems={"center"}>
                        <Typography ml="10px" fontFamily="Roboto"
                          fontSize="15px" color="black" fontWeight={400}
                        > Upload </Typography>
                        <Icon ><FileUploadOutlined sx={{ fontSize: "large" }} /></Icon>
                      </Box>
                    </label>
                  </Box>
                  <Box display="flex">
                    <Typography
                      style={{
                        margin: "20px", width: "400px",
                        fontFamily: "Roboto", fontSize: "20px", color: "black",
                        fontWeight: 500
                      }}
                    >
                      Aadhaar Card
                    </Typography>

                    <input
                      type="file"
                      id="imgUp"
                      style={{ display: "none" }}
                      maxsize="2"
                      minsize="1"
                      onChange={addSignupData}
                    />
                    <label
                      htmlFor="imgUp"
                      style={{ textTransform: "uppercase", margin: "20px", display: "flex" }}
                    >
                      <Box backgroundColor="#3ded97" display={"flex"}
                        borderRadius={1} alignItems={"center"}>
                        <Typography ml="10px" fontFamily="Roboto"
                          fontSize="15px" color="black" fontWeight={400}
                        > Upload </Typography>
                        <Icon ><FileUploadOutlined sx={{ fontSize: "large" }} /></Icon>
                      </Box>
                    </label>
                  </Box>
                </Box>
              }

              {selection === "NGO" &&

                <Box
                  /* ml = {40}
                  mt = {5}
                  mb = {5} */
                  margin={4}
                  boxShadow={20}
                  alignSelf="center"
                  sx={{
                    /* margin : "40px", */
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "10px",

                    /* display: "flex", */
                    /* justifyContent: "space-between", */
                  }}
                >

                  <Box display="flex" align="left">
                    <Typography
                      style={{
                        margin: "20px", width: "400px",
                        fontFamily: "Roboto", fontSize: "20px", color: "black",
                        fontWeight: 500
                      }}
                    >
                      NGO License
                    </Typography>

                    <input
                      type="file"
                      id="imgUp"
                      style={{ display: "none" }}
                      maxsize="2"
                      minsize="1"
                      onChange={addSignupData}
                    />
                    <label
                      htmlFor="imgUp"
                      style={{
                        textTransform: "uppercase", margin: "20px", display: "flex",
                      }}
                    >
                      <Box backgroundColor="#dec20b" display={"flex"}
                        borderRadius={1} alignItems={"center"}>
                        <Typography ml="10px" fontFamily="Roboto"
                          fontSize="18px" color="black" fontWeight={400}
                        > Upload </Typography>
                        <Icon ><FileUploadOutlined sx={{ fontSize: "large" }} /></Icon> </Box>
                    </label>
                  </Box>
                  <Box display="flex" align="left">
                    <Typography
                      style={{
                        margin: "20px", width: "400px",
                        fontFamily: "Roboto", fontSize: "20px", color: "black",
                        fontWeight: 500
                      }}
                    >
                      Aadhaar Card of Owner
                    </Typography>

                    <input
                      type="file"
                      id="imgUp"
                      style={{ display: "none" }}
                      maxsize="2"
                      minsize="1"
                      onChange={addSignupData}
                    />
                    <label
                      htmlFor="imgUp"
                      style={{
                        textTransform: "uppercase", margin: "30px", display: "flex"
                      }}
                    >
                      <Box backgroundColor="#dec20b" display={"flex"}
                        borderRadius={1} alignItems={"center"}>
                        <Typography ml="10px" fontFamily="Roboto"
                          fontSize="18px" color="black" fontWeight={400}
                        > Upload </Typography>
                        <Icon ><FileUploadOutlined sx={{ fontSize: "large" }} /></Icon>
                      </Box>
                    </label> </Box>
                </Box>
              }

              {selection === "Retailer" &&
                <Box
                  margin={4}
                  align="left"
                  sx={{
                    boxShadow: 10,
                    width: "100%",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px"
                    /* display: "flex", */
                    /* justifyContent: "space-between", */
                  }}
                >
                  <Box display="flex">
                    <Typography
                      style={{
                        margin: "20px", width: "400px",
                        fontFamily: "Roboto", fontSize: "20px", color: "black",
                        fontWeight: 500
                      }}
                    >
                      Trading License
                    </Typography>

                    <input
                      type="file"
                      id="imgUp"
                      style={{ display: "none" }}
                      maxsize="2"
                      minsize="1"
                      onChange={addSignupData}
                    />
                    <label
                      htmlFor="imgUp"
                      style={{
                        textTransform: "uppercase", margin: "30px", display: "flex"
                      }}
                    >
                      <Box backgroundColor="#b0fc38" display={"flex"}
                        borderRadius={1} alignItems={"center"}>
                        <Typography ml="10px" fontFamily="Roboto"
                          fontSize="18px" color="black" fontWeight={400}
                        > Upload </Typography>
                        <Icon ><FileUploadOutlined sx={{ fontSize: "large" }} /></Icon>
                      </Box>
                    </label> </Box>
                  <Box display="flex">
                    <Typography
                      style={{
                        margin: "20px", width: "400px",
                        fontFamily: "Roboto", fontSize: "20px", color: "black",
                        fontWeight: 500
                      }}
                    >
                      Aadhaar Card of Owner
                    </Typography>

                    <input
                      type="file"
                      id="imgUp"
                      style={{ display: "none" }}
                      maxsize="2"
                      minsize="1"
                      onChange={addSignupData}
                    />
                    <label
                      htmlFor="imgUp"
                      style={{
                        textTransform: "uppercase", margin: "30px", display: "flex"
                      }}
                    >
                      <Box backgroundColor="#b0fc38" display={"flex"}
                        borderRadius={1} alignItems={"center"}>
                        <Typography ml="10px" fontFamily="Roboto"
                          fontSize="18px" color="black" fontWeight={400}
                        > Upload </Typography>
                        <Icon ><FileUploadOutlined sx={{ fontSize: "large" }} /></Icon>
                      </Box>
                    </label>
                  </Box>

                </Box>
              }
            </form>
            <Box align="center" margin="10px">
              <Button
                variant="contained"
                type="submit"
                onClick={prevStep}
                style={{ backgroundColor: "blue", fontWeight: "600", margin: "10px", fontSize: "10px" }}
              >
                Previous Step
              </Button>

              <Button
                variant="contained"
                type="submit"
                onClick={submit}
                style={{ backgroundColor: "blue", fontWeight: "600", margin: "10px", fontSize: "10px" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      }
    </Box>
  );
}

export default Signup;