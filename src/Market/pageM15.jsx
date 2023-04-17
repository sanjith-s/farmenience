import React, { useState, useEffect } from "react";
import NegotNav from "../components/negotNav";
import UserDetails from "../components/userDetails";
import ShowUserDetails from "../components/showUserDetails";
import NegotiationBox1 from "../components/negotiationBox1";
import NegotiationBox2 from "../components/negotiationBox2";
import NegotiationBox3 from "../components/negotiationBox3";
import Container from "@mui/material/Container";
import { Box, Button , IconButton ,Tooltip } from "@mui/material";
import { CssBaseline } from "@mui/material";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

function PageM15() {

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

  const item = localStorage.getItem("Reply");
  // const userData = {
  //   name: "Rakesh k",
  //   addressLine1:
  //     "No 7, Dr Sadaasivam road , HI Look salon , Thirumurthy street ",
  //   addressLine2: "TNagar , Chennai 600017",
  //   number: 8300677299,
  // };
  const [userData, setData] = useState([]);

  useEffect(() => {
    let token = Cookies.get('token');
    Axios.get(`${baseURL}/profile`, { headers: { tokenstring: token } }).
      then((response) => {
        setData(response.data.message);
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
  const [priceLimit1, setPriceLimit1] = useState();
  const [priceLimit2, setPriceLimit2] = useState();
  const [quantity1, setQuantity1] = useState();
  const [quantity2, setQuantity2] = useState();
  const [consumerName, setConsumerName] = useState();
  const [consumerAddress, setConsumerAddress] = useState();
  const [consumerNumber, setConsumerNumber] = useState();

  const priceLimitHandler = (limit, index) => {
    if (index == 1) {
      setPriceLimit1(limit);
    } else if (index == 2) {
      setPriceLimit2(limit);
    }
  };

  const QuantityCounterHandler = (counter, index) => {
    if (index == 1) {
      setQuantity1(counter);
    } else if (index == 2) {
      setQuantity2(counter);
    }
  };

  const userDataHandler = (userName, address, number) => {
    setConsumerName(userName);
    setConsumerAddress(address);
    setConsumerNumber(number);
    console.log(consumerName, consumerAddress, consumerNumber);
  };

  const [update, setUpdate] = useState("editCard");
  const updateHandler = () => {
    if (update === "editCard") {
      setUpdate("updatedCard");
    } else if (update === "updatedCard") {
      setUpdate("editCard");
    }
  };



  const [active, setActive] = useState("negot1");


  const handleClick = (opt) => {
    if(opt==2) {
      setActive("negot2");
    } else if(opt==3) {
      setActive("negot1");
    } else {
      alert("Illegal Event");
    }
 }

  const negotHandler = () => {
    if (active === "negot1") {
      setActive("negot2");
    } else if (active === "negot2") {
      setActive("negot3");
    } else if (active === "negot3") {
      setActive("negot1");
    }
  };

  return (
    <Container style={{ padding: ".625rem 0rem" }} id="google_translate_element" onClick={(e) => {
      fullAnotherSpeak(e.target.innerText)
    }}>
      <CssBaseline />

      <Box className="gx-d-flex justify-content-center">
        <NegotNav handleClick={handleClick}/>

        <ShowUserDetails
          userName={userData.name}
          userAddressLine1={userData.addressLine1}
          userAddressLine2={userData.addressLine2}
          userNumber={userData.number}
        />

        {active === "negot1" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                margin: "1.25rem 0rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
                  <NegotiationBox1
                    iName={item.itemName}
                    quantity={item.quantity}
                    actualPrice={item.actualPrice}
                    userPrice = {item.userPrice}
                    weight = {item.weight}
                    index={1}
                    userQuantity={item.quantity}
                    onCounterHandler={QuantityCounterHandler}
                  />

              <div
                style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                }} >
                <Tooltip onClick={negotHandler} title="Negotiatation" >
                  <IconButton >
                  <ThumbsUpDownIcon style={{color: "#74e81c", width: "38px", height: "38px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          </Box>
        )}

        {active === "negot2" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                margin: "1.25rem 0rem",
                borderRadius: ".5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {salesItems.map((item, index) => {
                return (
                  <NegotiationBox2
                    key={index}
                    iName={item.itemName}
                    quantity={item.quantity}
                    weight={item.weight}
                    actualPrice={item.actualPrice}
                    userPrice = {item.userPrice}
                    index={item.index}
                    onlimitHandler={priceLimitHandler}
                  />
                );
              })}
              <div
                style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                }} >
                <Tooltip onClick={negotHandler} title="Send Request"  >
                  <IconButton >
                  <SendIcon style={{color: "#74e81c", width: "38px", height: "38px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          </Box>
        )}

        {active === "negot3" && (
          <Box style={{ position: "relative " }}>
            <Box
              style={{
                margin: "1.25rem 0rem",
                borderRadius: ".5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {salesItems.map((item, index) => {
                return (
                  <NegotiationBox3
                    key={index}
                    seller={item.seller}
                    iName={item.itemName}
                    actualPrice={item.actualPrice}
                    purchaseDate={item.purchaseDate}
                    userPrice={item.userPrice}
                    userQuantity={item.quantity}
                    acceptance={item.acceptance}
                  />
                );
              })}
              <div
                style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                
                }} >
                <Tooltip onClick={negotHandler} title="Cancel Deal" >
                  <IconButton >
                  <CancelIcon style={{color: "red", width: "38px", height: "38px"  }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default PageM15;