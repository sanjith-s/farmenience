import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import 'regenerator-runtime/runtime'
import Swal from 'sweetalert2';
import Axios from "axios"
import Cookies from 'js-cookie';
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition"
import MarketCard from "../components/marketCard";
import {
  Card,
  Typography,
  Button,
  CardActions,
  CardActionArea,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Box,
  Container,
  CssBaseline,
  Divider,
} from "@mui/material";
import TextField from '@mui/material/TextField';
import { Stack } from "@mui/material";
import PropTypes from 'prop-types';
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { baseURL } from '../constants';
import FormLabel from '@mui/material/FormLabel';
import { padding } from "@mui/system";
import { Label } from "recharts";

const PageM11 = () => {
  const navigate = useNavigate();
  let count=0;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  const controlMic = () => {
    alert('1');
    
    if(count == 0)
    {
    SpeechRecognition.startListening;
    count=1;
    }
    else
    {
      SpeechRecognition.stopListening;
      count=0;
    }
  }

  if(!browserSupportsSpeechRecognition) {
    alert("Your Browser doesn't support speech to text !!")
  }

  const [defaultData, setDefaultData] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    let token = Cookies.get('token');
    Axios.post(`${baseURL}/buyer/loadproducts`, {
      productName: ""
    }, { headers: { tokenstring: token } })
      .then((response) => {
        setDefaultData(response.data.message);
        setContent(response.data.message);
        // ACCESS FORMAT
        // alert(defaultData[0].records[0].productName);
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


  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  }

  const fullAnotherSpeak = (text) => {
    responsiveVoice.speak(text, "Tamil Male");
  }

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
    document.body.appendChild(addScript);
  }, []);

  // const defaultData = [
  //   {
  //     product: "promegranate",
  //     count: 4,
  //     price: 232,
  //     rate: 3,
  //   },
  //   {
  //     product: "apple",
  //     count: 4,
  //     price: 232,
  //     rate: 3,
  //   },
  //   {
  //     product: "orange",
  //     count: 4,
  //     price: 32,
  //     rate: 3,
  //   },
  //   {
  //     product: "banana",
  //     count: 4,
  //     price: 132,
  //     rate: 3,
  //   },
  //   {
  //     product: "banana",
  //     count: 10,
  //     price: 232,
  //     rate: 3,
  //   },
  //   {
  //     product: "apple",
  //     count: 100,
  //     price: 232,
  //     rate: 3,
  //   },
  //   {
  //     product: "mango",
  //     count: 4,
  //     price: 732,
  //     rate: 3,
  //   },
  //   {
  //     product: "promegranate",
  //     count: 4,
  //     price: 332,
  //     rate: 3,
  //   },
  //   {
  //     product: "promegranate",
  //     count: 4,
  //     price: 432,
  //     rate: 3,
  //   },
  //   {
  //     product: "promegranate",
  //     count: 4,
  //     price: 232,
  //     rate: 3,
  //   },
  //   {
  //     product: "promegranate",
  //     count: 4,
  //     price: 232,
  //     rate: 3,
  //   },
  //   {
  //     product: "promegranate",
  //     count: 4,
  //     price: 230,
  //     rate: 3,
  //   },
  // ]

  async function confirmCart() {
    let token = Cookies.get('token');
    await Axios.post(`${baseURL}/buyer/postcart`, {
        cartItems: cart
    }, {headers: {tokenstring: token}})
    .then((response) => {
      // setCart(response.data.message);
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
    });
  }

  const [content, setContent] = useState(defaultData);
  console.log(defaultData);
  console.log(content);

  //const copy = content;
  const handleChange = (event) => {
    setappntdata({ ...appntdata, [event.target.name]: event.target.value });
  };

  const handleSearch = (event) => {

    let searchTerm = event.target.value.toLowerCase().trim()
    console.log(searchTerm);
    if (searchTerm.length == 0) {
      setContent(defaultData)
    } else {
      setContent(defaultData.filter((item) => item.productName.toLowerCase().includes(searchTerm)))
    }
  };

  const [value, setValue] = React.useState(false);
  const handleChange1 = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    console.log(value);
    function compare2(a, b) {
      if (a.price <= b.price) {
        return -1;
      }
      return 0;
    }
    function compare1(a, b) {
      if (a.price >= b.price) {
        return -1;
      }
      return 0;
    }
    if (value == 'PriceI') {
      setContent(content.sort(compare1));
    } else {
      setContent(content.sort(compare2));
    }
    setOpen(false);
  };

  const resetSort = () => {
    setContent(defaultData);
    setOpen(false);
  }
  const handleSubmit = () => { };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const filterPrice = (a, min, max) => {
    if (a.price >= min && a.price <= max) {
      return true;
    }
    return false;
  }
  const ApplyChange = () => {
    var min = document.getElementById("minPrice").value;
    var max = document.getElementById("maxPrice").value;
    console.log(min, max);
    setContent(defaultData.filter(f => filterPrice(f, min, max)));
    handleClose2();
  }

  const resetFilter = () => {

    setContent(defaultData);
    handleClose2();
  }

  const [ngoType, setNgoType] = useState([]);
  const handleNGOtype = (option) => {
    setNgoType(option);
    setappntdata({ ...appntdata, ngoType: ngoType.value });
  };
  const [appntdata, setappntdata] = useState({
    meetdate: "",
    image: "",
    soil: "",
    crops: "",
    reason: "",
    ngoType: "",
  });

  return (
    <div id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
      }} style={{
      }}>
      <Container
        className="check"
        sx={{
          padding: "15px 0px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        <CssBaseline />
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          market place
        </Typography>
        <CardActions
          style={{
            width: "100%",
          }}
        >
          <FormControl>
            <Input
              style={{ height: "40px" }}
              id="input-with-icon-adornment"
              onChange={handleSearch}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "green"}} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <MicIcon style={{ color: "green"}} onClick={controlMic}/>
                  </IconButton>
                  <IconButton>
                    <PhotoCameraIcon
                      style={{ color: "green"}}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </CardActions>
        <CardActions
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "0px",
          }}
        >
          <CardActionArea style={{ width: "100%" }}>
            <Button
              style={{
                display: "flex",
                columnGap: "20px",
                color: "green",
                width: "100%",
                alignItems: "center",
              }}
              onClick={() => { setOpen(true) }}
            >
              <SortIcon />
              <Typography style={{ fontSize: "18px", fontWeight: "500" }}>
                sort
              </Typography>
            </Button>
          </CardActionArea>
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Sort By</DialogTitle>
            <Box>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange1}
                >
                  <FormControlLabel value="PriceI" control={<Radio />} label="Price (Increasing)" />
                  <FormControlLabel value="PriceD" control={<Radio />} label="Price (Descreasing)" />
                </RadioGroup>
                <Button onClick={resetSort}>Reset Filter</Button>
              </FormControl>
            </Box>
          </Dialog>
          <Dialog onClose={handleClose2} open={open2}>
            <DialogTitle>Filter By</DialogTitle>
            <Box sx={{ padding: "8%" }}>
              <FormControl>
                <Stack spacing={3}>
                  <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="minPrice" placeholder="Minimum price" />
                  <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="maxPrice" placeholder="Maximum price" />
                  <Button onClick={ApplyChange}>Apply</Button>
                  <Button onClick={resetFilter}>Reset Filter</Button>
                </Stack>
              </FormControl>
            </Box>
          </Dialog>
          <CardActions style={{ width: "100%" }}>
            <FormControl
              style={{
                width: "100%",
                height: "3rem",
              }}
              onClick={() => { setOpen2(true) }}
            >
              
              <Input
                style={{
                  height: "2.5rem",
                  fontSize: "1.5625rem",
                }}
                id="input-with-icon-adornment"
                placeholder="Search here"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "green", fontSize: "2.1875rem" }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <MicIcon style={{ color: "green", fontSize: "2.1875rem" }} />
                    </IconButton>
                    <IconButton>
                      <PhotoCameraIcon
                        style={{ color: "green", fontSize: "2.1875rem" }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardActions>

          <CardActions
            style={{
              width: "100%",
              borderRadius: "8px",
              padding: "0px",
            }}
          >
            <CardActionArea style={{ width: "100%" }}>
              <Button
                style={{
                  display: "flex",
                  columnGap: "20px",
                  color: "green",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <SortIcon />
                <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
                  sort
                </Typography>
              </Button>
            </CardActionArea>
            <Divider orientation="vertical" />
            <CardActionArea style={{ width: "100%" }}>
              <Button
                style={{
                  display: "flex",
                  columnGap: "20px",
                  color: "green",
                  alignItems: "center",
                  width: "100%"
                }}
              >
                <FilterListIcon />
                <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
                  filter
                </Typography>
              </Button>
            </CardActionArea>
          </CardActions>
          <Divider orientation="horizontal" />

          <Box
            sx={{
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              columnGap: "35px",
              rowGap: "38px",
            }}
          >
            {console.log(defaultData)}

            {content.map((v, i) => {
              return (
                // <>
                //     {val.records.map((v, i)=>{
                      // return (
                        <MarketCard
                          key={i+ 1}
                          image={v.image}
                          productName={v.productName}
                          sellerCount={v.quantity}
                          price={v.price}
                          stars={v.rating}
                          type = {v.type}
                          cartArray={setcart}
                          array={cart}
                        />
                      // );
                    // }
                  // )
                //   }
                // </>
              );
            })}
            
          </Box>

        </CardActions>
        {transcript}
        <div style={{display:"flex" , justifyContent:"center"}}>
        <Button
        variant="contained"
        color="success"
        style={{width:"max-content"}}
        onClick={confirmCart}>
          Confirm Cart
        </Button>
        </div>
      
      </Container>
    </div>
  );
};

export default PageM11;
