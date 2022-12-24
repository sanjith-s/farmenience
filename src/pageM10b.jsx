import React from "react";
import { AiOutlineSearch, AiOutlineCamera, AiFillStar } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Box,
  Container,
  CssBaseline,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import Page10Nav from "./components/page10Nav";

const data = [
  {
    market: "RAJA",
    distance: "ANGEL STORE",
    city: (
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    ),
  },
  {
    market: "RAHUL ",
    distance: "SS STORE",
    city: (
      <div>
        <AiFillStar />
        <AiFillStar />
      </div>
    ),
  },
  {
    market: "RAKESH ",
    distance: "KP STORE",
    city: (
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    ),
  },
  {
    market: "MAHESH ",
    distance: "MANI STORE",
    city: (
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    ),
  },
];

const PageM10b = () => {
  const location = useLocation();

  return (
    <Container
      style={{
        padding: "15px 0px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
      }}
    >
      <CssBaseline />
      <Box>
        {console.log(location.state)}
        <Page10Nav title="market Name" />
      </Box>
      <CardActions
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          border: "2px solid #555555",
        }}
      >
        <FormControl
          style={{
            width: "100%",
            height: "48px",
          }}
        >
          <Input
            style={{ height: "40px", fontSize: "25px" }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: "green", fontSize: "35px" }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <MicIcon style={{ color: "green", fontSize: "35px" }} />
                </IconButton>
                <IconButton>
                  <PhotoCameraIcon
                    style={{ color: "green", fontSize: "35px" }}
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
          >
            <SortIcon />
            <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
              sort
            </Typography>
          </Button>
        </CardActionArea>
        <CardActionArea style={{ width: "100%" }}>
          <Button
            style={{
              display: "flex",
              columnGap: "20px",
              color: "green",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FilterListIcon />
            <Typography style={{ fontSize: "18px", fontWeight: "600" }}>
              filter
            </Typography>
          </Button>
        </CardActionArea>
      </CardActions>
      <Card
        style={{
          backgroundColor: "#86fe9ede",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          height: "500px",
          overflow: "auto",
          padding: "20px 15px",
          borderRadius: "5px",
          border: "3px solid #000000",
        }}
      >
        {data.map((val) => {
          return (
            <CardContent
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "50%",
                  padding: "0px 20px",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: "22px",
                  }}
                >
                  NAME OF THE SELLER:{val.market}
                </Typography>
                <Typography
                  variant="boby1"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  NAME OF THE SELLER:{val.distance}
                </Typography>
              </Box>
              <Box
                style={{
                  width: "20%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 20px",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: "22px",
                  }}
                >
                  {val.city}
                </Typography>
              </Box>

              <Box
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "green", padding: "12px" }}
                >
                  <Link to="/M10b" style={{ textDecoration: "none" }}>
                    <Typography
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      View Market
                    </Typography>
                  </Link>
                </Button>
              </Box>
            </CardContent>
          );
        })}
      </Card>
    </Container>
  );
};
export default PageM10b;

// import {AiOutlineSearch, AiOutlineCamera,AiFillStar} from 'react-icons/ai';
// import {BsMic,BsFilter} from 'react-icons/bs';
// import {BiSortDown} from 'react-icons/bi'
// import './css/pageM10b.css'
// import { Link } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const PageM10b = () =>{
// const data=[
//     {
//         market:"RAJA",
//         distance:"ANGEL STORE",
//         city:<div><AiFillStar/><AiFillStar/><AiFillStar/></div>
//     },
//     {
//         market:"RAHUL ",
//         distance:"SS STORE",
//         city:<div><AiFillStar/><AiFillStar/></div>
//     },
//     {
//         market:"RAKESH ",
//         distance:"KP STORE",
//         city:<div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
//     },
//     {
//         market:"MAHESH ",
//         distance:"MANI STORE",
//         city:<div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
//     }
// ]
//     return (
//         <>
//             <Card id="search-bar">
//                 <div>
//                     <table id="table-text-search">
//                         <tr>
//                             <td id="table-text-search">
//                                 <AiOutlineSearch id="icon-style2" size={30}/>
//                             </td>
//                             <td id="table-text-search">
//                                 <input type="text" placeholder='Search for market' id="text-input"></input>
//                             </td>
//                         </tr>
//                     </table>
//                 </div>
//                 <div id="right-icons">
//                     <BsMic id="icon-style1" size={30}/>
//                     <AiOutlineCamera id="icon-style1" size={30}/>
//                 </div>
//             </Card>
//             <Card id="sort-filter-card">
//                 <Typography>
//                     <BiSortDown size={30}/>
//                     SORT
//                 </Typography>
//                 <Typography>
//                     <BsFilter size={30}/>
//                     FILTER
//                 </Typography>
//             </Card>

//                 {data.map((val)=>{
//                     return(
//                         <Card id="card-display">
//                             <Typography id="text-in-card">
//                                 NAME OF THE SELLER:{val.market}
//                                 <br></br>
//                                 NAME OF THE SELLER:{val.distance}
//                             </Typography>
//                             <Typography id="text-in-card">
//                                 {val.city}
//                             </Typography>
//                             <div>
//                                 <Button variant="contained" id="button-style-market">
//                                     <Link id="link-style" to="/M10c">
//                                         View
//                                     </Link>
//                                 </Button>
//                             </div>
//                         </Card>
//                     )
//                 })
//                 }

//         </>
//     )
// }
// export default PageM10b;
