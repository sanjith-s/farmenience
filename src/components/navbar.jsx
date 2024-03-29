import "./../css/navbar.css";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Calendar from "./calender";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import Link from '@mui/material/Link';
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../App";
import { baseURL } from "../constants";
import Axios from "axios";
import Swal from 'sweetalert2';


const drawerBleeding = 70;

const Root = styled("div")(({ theme }) => ({
  height: "6%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 0,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 2,
  left: "calc(50% - 0.938rem)",
}));

function SwipeableEdgeDrawer(props) {
  // const navigate = useNavigate();
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const { auth, setAuth, role, setRole } = useContext(AuthContext);

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          // navigate('../login');
          window.location.href = "http://localhost:5173/login";
          // window.location.assign("http://localhost:5173/login")
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
    <>
      {/* <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(100% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <div className="navbar">
        <div className="nav-items item1">
          <a href="" className="nav-links">
            <img src="" className="cmp-logo" />
          </a>
        </div>
        <div className="nav-items item2">
          <a href="/" className="nav-links  nav-brand">
            Farmenience
          </a>
        </div>
        <div className="nav-items item3">
          <a href="/" className="nav-links" color="black">
            HOME
          </a>
        </div>

        <a className="dropdown" variant="text" sx={{ color: "black" }} onClick={toggleDrawer(true)}>Show My schedules</a>
        
        <div className="dropdown">
          <Button className="dropbtn">
            OPTIONS
          </Button>
          <div className="dropdown-content">
          
            <Link href='../N1'>View Queries</Link>
            <Link href='../N13'>View Appointments</Link>
            <Link href='../N7'>Create New Query</Link>
            <Link href='../N4'>Create New Appointment</Link>
          </div>
        </div>
        
        <div className="nav-items item5">
          <a href="../N9" className="nav-links">
            <AccountCircleRoundedIcon fontSize="large" />
          </a>
        </div>
      </div>
 */}

      <nav class="bg-white border-gray-200 dark:bg-lime-700 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img src="src\images\ffarmenienec.jpg" class="h-8 mr-3" alt="Farmenience Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Farmenience</span>
          </a>
          <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-lime-700 dark:border-gray-700">
            <li>
                    <a href="../landingPage" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
            </li>
              {
                !auth ?
                  <>
                  <li>
                    <a href="../login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                  </li>
                  </>
                  :
                  role == 'Farmer'
                    ?
                    <>
                    <li>
                      <a href="../FarmerHomepage" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
                    </li>
                    <li>
                      <a href="../FarmerProfile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
                    </li>
                    {/* <li>
                      <button styles={{border:0,background:'white'}} onClick={()=>{logout()}}>
                      Logout
                      </button>
                    </li> */}
                    </>
                    :
                    role == 'NGO'
                      ?
                      <>
                    <li>
                      <a href="../N10" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
                    </li>
                    <li>
                      <a href="../NGOProfile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
                    </li>
                    </>
                      :
                      <li>
                        <a href="../M9" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                      </li>
              }
              {/* <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              </li>
              {
                !auth ?
                  <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                  </li>
                  :
                  role == 'Farmer'
                    ?
                    <>
                      <li>
                        <a href="../cal" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Show my Schedules</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Farmer2</a>
                      </li>
                    </>
                    :
                    role == 'NGO'
                      ?
                      <>
                        <li>
                          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NGO1</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NGO2</a>
                        </li>
                      </>
                      :
                      <>
                        <li>
                          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">RETAILER 1</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">RETAILER 2</a>
                        </li>
                      </>
              }

              {
                auth ?
                  <li>
                    <a href="../N10" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
                  </li>
                  :
                  <li>
                    <a href="../login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                  </li>
              }

              {
                !auth ?
                  <li>
                    <a href="../landingPage" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                  </li>
                  :
                  role == 'Farmer'
                    ?
                    <li>
                      <IconButton color="primary" aria-label="upload picture" component="label">
                        <AccountCircleRoundedIcon />
                      </IconButton>
                    </li>
                    :
                    role == 'NGO'
                      ?
                      <li>
                        <a href="../NGOProfile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                      </li>
                      :
                      <li>
                        <a href="../BuyerProfile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                      </li>
              } */}
              {/* <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>






    /* <SwipeableDrawer
      container={container}
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <StyledBox
        sx={{
          position: "absolute",
          top: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          right: 0,
          left: 0,
        }}
      >
        <Puller />
      </StyledBox>
      <StyledBox
        sx={{
          px: 2,
          pb: 2,
          height: "100%",
          overflow: "auto",
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </StyledBox>
      <Calendar closeToggle={setOpen} />
    </SwipeableDrawer>
   */
  );
}

/* // SwipeableEdgeDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// }; */}

export default SwipeableEdgeDrawer;
