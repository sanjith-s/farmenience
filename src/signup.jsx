import "./css/signup.css";
import { useState } from "react";
import validator from "validator";
import Axios from "axios";
import Fab from "@mui/material/Fab";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
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
  Container
} from "@mui/material";
import { baseURL } from '../src/constants';
import Swal from 'sweetalert2';
import useGeoLocation from '../src/components/useGeoLocation';

function Signup() {
  // const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  // const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const location = useGeoLocation();
  const [file, setFile] = useState();
  const [filename, setFilename] = useState({})
  const [isUploaded, setIsUploaded] = useState(false);
  const [file1, setFile1] = useState();
  const [filename1, setFilename1] = useState({})
  const [isUploaded1, setIsUploaded1] = useState(false);
  const [file2, setFile2] = useState();
  const [filename2, setFilename2] = useState({})
  const [isUploaded2, setIsUploaded2] = useState(false);

  function handleChange(e) {
    console.log(e.target.files);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleChange1(e) {
    console.log(e.target.files);
    setIsUploaded1(true);
    e.target.files[0] ? setFile1(URL.createObjectURL(e.target.files[0])) : "";
  }

  function handleChange2(e) {
    console.log(e.target.files);
    setIsUploaded2(true);
    e.target.files[0] ? setFile2(URL.createObjectURL(e.target.files[0])) : "";
  }

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

  const addSignupData = (event) => {
    setsignupdata({ ...signupdata, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    { location.loaded ? alert(JSON.stringify(location)) : "Location data not available yet" }
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
        image: {
          data: file,
          contentType: "jpg"
        },
        doc1: {
          data: file1,
          contentType: "pdf"
        },
        doc2: {
          data: file2,
          contentType: "pdf"
        }
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
                type="password"
                name="password"
                value={signupdata.password}
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
                type="password"
                name="confpass"
                value={signupdata.confpass}
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

          <Container
          disableGutters={true}
          sx={{
            bgcolor: "#ffff",
            height: "100%",
            width: "40vw",
            borderRadius: "3.125rem",
            paddingLeft: "0rem",
            paddingRight: "0rem",
            display: "flex",
            justifyItems: "center",
            border: "1rem solid black",
          }}
        >
          {!isUploaded && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <input
                type="file"
                id="imgUp"
                style={{ display: "none" }}
                accept="image/png, image/jpeg, image/jpg"
                maxsize="2"
                minsize="1"
                onChange={handleChange}
              />
              <label
                htmlFor="imgUp"
                style={{ width: "fit-content", height: "fit-content" }}
              >
                <Fab component="span">
                  <FileUploadOutlinedIcon />
                </Fab>
                <br />
                <br />
              </label>
              <Typography>Upload Image</Typography>
            </div>
          )}
          {isUploaded && (
            <img
              src={file}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "3.125rem",
              }}
            />
          )}
        </Container>

          <form style={{ width: "450px" }}>
            {selection === "Farmer" &&
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
                >
                  Land Document
                </Typography>

                <input
                  type="file"
                  id="imgUp"
                  style={{ display: "none" }}
                  maxsize="2"
                  minsize="1"
                  onChange={handleChange1}
                />
                <label
                  htmlFor="imgUp"
                  style={{ width: "fit-content", height: "fit-content" }}
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

                <input
                  type="file"
                  id="imgUp"
                  style={{ display: "none" }}
                  maxsize="2"
                  minsize="1"
                  onChange={handleChange2}
                />
                <label
                  htmlFor="imgUp"
                  style={{ width: "fit-content", height: "fit-content" }}
                >
                  Aadhaar Card
                  <br />
                  <br />
                </label>
              </Box>
            }

            {selection === "NGO" &&
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >

                <Typography
                  style={{ textTransform: "uppercase", alignSelf: "flex-end" }}
                >
                  NGO License
                </Typography>

                <input
                  type="file"
                  id="imgUp"
                  style={{ display: "none" }}
                  maxsize="2"
                  minsize="1"
                  onChange={handleChange1}
                />
                <label
                  htmlFor="imgUp"
                  style={{ width: "fit-content", height: "fit-content" }}
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

                <input
                  type="file"
                  id="imgUp"
                  style={{ display: "none" }}
                  maxsize="2"
                  minsize="1"
                  onChange={handleChange2}
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

                <input
                  type="file"
                  id="imgUp"
                  style={{ display: "none" }}
                  maxsize="2"
                  minsize="1"
                  onChange={handleChange1}
                />
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
                  onChange={handleChange2}
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
