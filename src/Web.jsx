import { useEffect, useState } from "react";
import { baseURL } from './constants';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from 'sweetalert2';

const Web = () =>{
    const [data1,setData1]=useState({});
    const [data2,setData2]=useState({});
    const [data3,setData3]=useState({});
    const [data4,setData4]=useState({});
    useEffect(() => {
        const getData = async () =>
        {
            await Axios.get(`${baseURL}/ml_model/webscrapping/vegetable_price`).
            then((response) => {
                setData1(response.data);
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

    return (
        <>
            {JSON.stringify(data1)}
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
            <br></br>
        </>
    )
}

export default Web;