import { useEffect, useState } from "react";
import { baseURL } from './constants';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from 'sweetalert2';
import { Table,TableBody,TableCell,TableHead,TableRow,Paper,TableContainer,Box } from "@mui/material";

const Web = () =>{
    const [data1,setData1]=useState({});
    const [data2,setData2]=useState({});
    const [data3,setData3]=useState({});
    const [data4,setData4]=useState({});
    const [dataArray1,setDataArray1]=useState([]);
    const [dataArray2,setDataArray2]=useState([]);
    const [dataArray3,setDataArray3]=useState([]);
    const [dataArray4,setDataArray4]=useState([]);
    useEffect(() => {
        const getData = async () =>
        {
            await Axios.get(`${baseURL}/ml_model/webscrapping/vegetable_price`).
            then((response) => {
                setData1(response.data);
                console.log(response.data);
                const tab1 = Object.entries(response.data);
                setDataArray1(tab1);
                console.log(tab1);
            })
            .catch(async (res) => {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error',
                    })
            })
            await Axios.get(`${baseURL}/ml_model/webscrapping/fruits_price`).
            then((response) => {
                setData2(response.data);
                console.log(response.data);
                const tab2 = Object.entries(response.data);
                setDataArray2(tab2);
                console.log(tab2);
            })
            .catch(async (res) => {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error',
                    })
            })
            await Axios.get(`${baseURL}/ml_model/webscrapping/spinach_greens_price`).
            then((response) => {
                setData3(response.data);
                console.log(response.data);
                const tab3 = Object.entries(response.data);
                setDataArray3(tab3);
                console.log(tab3);
            })
            .catch(async (res) => {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error',
                    })
            })
            await Axios.get(`${baseURL}/ml_model/webscrapping/rice_dal_price_chennai`).
            then((response) => {
                setData4(response.data);
                console.log(response.data);
                const tab4 = Object.entries(response.data);
                setDataArray4(tab4);
                console.log(tab4);
            })
            .catch(async (res) => {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error',
                    })
            })
        }
        getData();
    }, []);
    
    // const tab2 = Object.entries(data2);
    // const tab3 = Object.entries(data3);
    // const tab4 = Object.entries(data4);
    // // console.log(data1[0]);
    // console.log(tab1 );
    // console.log(tab2);
    // console.log(tab3 );
    // console.log(tab4);
    // const rows = [data1,data2,data3]
    return (
        <>
            {/* {JSON.stringify(data1)}
           
            <br></br>
            <br></br>
            {JSON.stringify(data2)}
            <br></br>
            <br></br>
            {JSON.stringify(data3)}
            <br></br>
            <br></br>
            {JSON.stringify(data4)}
            <br></br>
            <br></br> */}
  <Box  sx={{alignItems:"center",textAlign:"center",justifyContent:"center",display:"flex"}}>
<TableContainer>
      <Table sx={{ minWidth:"50%", marginLeft:"40px", maxWidth:"40%", alignItems:"center",textAlign:"center" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Crop Name</TableCell>
            <TableCell align="right">Price in INR</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
            {/* {
                dataArray1.map((val)=>{
                    return(
                        <>
                        <div>
                            {val[0]}
                            <br></br>
                            {val[1]}
                        </div>
                        </>
                    )
                })
            } */}
          {dataArray1.map((val) => (
            <TableRow
              key={val.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, minWidth: 650, marginLeft:"40px", maxWidth:"80%" }}
            >
              <TableCell component="th" scope="row">
                {val[0]}
              </TableCell>
              <TableCell align="right">{val[1]}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
              
            </TableRow>
          ))}
          {dataArray2.map((val) => (
            <TableRow
              key={val.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, minWidth: 650, marginLeft:"40px", maxWidth:"80%" }}
            >
              <TableCell component="th" scope="row">
                {val[0]}
              </TableCell>
              <TableCell align="right">{val[1]}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
              
            </TableRow>
          ))}
          {dataArray3.map((val) => (
            <TableRow
              key={val.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, minWidth: 650, marginLeft:"40px", maxWidth:"80%" }}
            >
              <TableCell component="th" scope="row">
                {val[0]}
              </TableCell>
              <TableCell align="right">{val[1]}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
              
            </TableRow>
          ))}
          {dataArray4.map((val) => (
            <TableRow
              key={val.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, minWidth: 650, marginLeft:"40px", maxWidth:"80%" }}
            >
              <TableCell component="th" scope="row">
                {val[0]}
              </TableCell>
              <TableCell align="right">{val[1]}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>   

        </>
    )
}

export default Web;