import "./css/signup.css";
import { useState,useEffect } from "react";
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
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';
import useGeoLocation from '../src/components/useGeoLocation';

function Signup() {

  // const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  // const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const location = useGeoLocation();

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

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
  const [lat,setLat]=useState(null);
  const [lng,setLng]=useState(null);
  const [status,setStatus]=useState(null);
  const [file1, setFile1] = useState();
  const [filename1, setFilename1] = useState({});
  const [isUploaded1, setIsUploaded1] = useState(false);
  const [file2, setFile2] = useState();
  const [filename2, setFilename2] = useState({});
  const [isUploaded2, setIsUploaded2] = useState(false);
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
    if(!navigator.geolocation)
    {
      setStatus("Geolocation is not supported by browser");
    }
    else
    {
      setStatus("Locating..");
      navigator.geolocation.getCurrentPosition((postion)=>{
        setStatus(null);
        setLat(postion.coords.latitude);
        setLng(postion.coords.longitude);
        console.log(postion.coords.latitude,2);
      },
      ()=>{
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
      let FILE1='';
      let formData1 = new FormData();
      formData1.append('caption', "hello");
      formData1.append('file', filename1);
      console.log(Array.from(formData1.entries()))
      await Axios.post(`${baseURL}/upload`, formData1)
        .then(async (response) => {
          console.log(response);
          FILE1=response.data.message;
        })
        .catch(async (res) => {
          alert(res.response.data.message);
        })
        let FILE2='';
        let formData2 = new FormData();
        formData2.append('caption', "hello");
        formData2.append('file', filename2);
        console.log(Array.from(formData2.entries()))
        await Axios.post(`${baseURL}/upload`, formData2)
          .then(async (response) => {
            console.log(response);
            FILE2=response.data.message;
          })
          .catch(async (res) => {
            alert(res.response.data.message);
          })
      alert(FILE1+" "+FILE2);
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
        longitude:lng,
        doc1:FILE1,
        doc2:FILE2,
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
    }

    else {
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

  return (
    <Box
      sx={{
        margin: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "40px",
      }}
    >
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Documents Upload</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 0 &&
        <Box>
          <Box>
            <Typography
              variant="h4"
              style={{ textTransform: "uppercase", textAlign: "center" }}
            >
              signup page
            </Typography>

          </Box>

          <form style={{ width: "450px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                name
              </Typography>
              <Input
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
              }}
            >
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                phone number
              </Typography>
              <Input
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
              }}
            >
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                aadhaar number
              </Typography>
              <Input
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
              }}
            >
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                address line 1
              </Typography>
              <Input
                type="text"
                name="addr1"
                value={signupdata.addr1}
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                address line 2
              </Typography>
              <Input
                type="text"
                name="addr2"
                value={signupdata.addr2}
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                city / town
              </Typography>
              <Input
                type="text"
                name="city"
                value={signupdata.city}
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                district
              </Typography>
              <Input
                type="text"
                name="district"
                value={signupdata.district}
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                state
              </Typography>
              <Input
                type="text"
                name="state"
                value={signupdata.state}
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                pincode
              </Typography>
              <Input
                type="text"
                name="pincode"
                value={signupdata.pincode}
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                email
              </Typography>
              <Input
                type="email"
                name="email"
                value={signupdata.email}
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                password
              </Typography>
              <Input
                type={showPassword1 ? 'text' : 'password'}
                name="password"
                value={signupdata.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      edge="end"
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      edge="end"
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                confirm password
              </Typography>
              <Input
                type={showPassword2 ? 'text' : 'password'}
                name="confpass"
                value={signupdata.confpass}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      edge="end"
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      edge="end"
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={addSignupData}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
              >
                account type
              </Typography>

              <FormControl variant="standard" sx={{ width: "200px" }}>
                <Select value={selection} onClick={selectionChange}>
                  <MenuItem value="Farmer">
                    <Typography style={{ textTransform: "capitalize" }}>
                      farmer
                    </Typography>
                  </MenuItem>
                  <MenuItem value="NGO">
                    <Typography style={{ textTransform: "capitalize" }}>
                      NGO
                    </Typography>
                  </MenuItem>
                  <MenuItem value="Retailer">
                    <Typography style={{ textTransform: "capitalize" }}>
                      retailer
                    </Typography>
                  </MenuItem>
                  <MenuItem value="Job Seeker">
                    <Typography style={{ textTransform: "capitalize" }}>
                      job seeker
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </form>

          <Button
            variant="contained"
            type="submit"
            onClick={nextStep}
            style={{ backgroundColor: "green", fontWeight: "600" }}
          >
            Next Step
          </Button>
        </Box>
      }

      {activeStep === 1 &&
        <Box>
          <Box>
            <Typography
              variant="h4"
              style={{ textTransform: "uppercase", textAlign: "center" }}
            >
              signup page
            </Typography>

          </Box>

          <form style={{ width: "450px" }}>
            {selection === "Farmer" &&
              <Box
              >

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
                >
                  Land Document
                </Typography>

                <input type="file" onChange={handleChange1} />
                <br></br>
                <label
                  htmlFor="imgUp"
                >
                  Land Document
                  <br />
                  <br />
                </label>

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
                >
                  Aadhaar Card
                </Typography>

                <input type="file" onChange={handleChange2} />
                <br></br>
                <label
                  htmlFor="imgUp"
                >
                  Aadhaar Card
                  <br />
                  <br />
                </label>
              </Box>
            }

            {selection === "NGO" &&
              <Box

              >

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
                >
                  NGO License
                </Typography>

                <input type="file" onChange={handleChange1} />
                <input type="file" onChange={handleChange1} />
                <label
                  htmlFor="imgUp"
                >
                  NGO License
                  <br />
                  <br />
                </label>

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
                >
                  Aadhaar Card of Owner
                </Typography>

                <input type="file" onChange={handleChange2} />
                <input type="file" onChange={handleChange2} />
                <label
                  htmlFor="imgUp"
                >
                  Aadhaar Card of Owner
                  <br />
                  <br />
                </label>
              </Box>
            }

            {selection === "Retailer" &&
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
                >
                  Trading License
                </Typography>

                <input type="file" onChange={handleChange1} />
                <label
                  htmlFor="imgUp"
                  style={{ width: "fit-content", height: "fit-content" }}
                >
                  Trading License
                  <br />
                  <br />
                </label>

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
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
                  style={{ width: "fit-content", height: "fit-content" }}
                >
                  Aadhaar Card of Owner
                  <br />
                  <br />
                </label>
              </Box>
            }
          </form>

          <Button
            variant="contained"
            type="submit"
            onClick={prevStep}
            style={{ backgroundColor: "green", fontWeight: "600" }}
          >
            Previous Step
          </Button>

          <Button
            variant="contained"
            type="submit"
            onClick={submit}
            style={{ backgroundColor: "green", fontWeight: "600" }}
          >
            Submit
          </Button>

        </Box>
      }
    </Box>
  );
}

export default Signup;
