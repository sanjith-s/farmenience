import { useEffect, useState } from "react";
import { baseURL } from '../src/constants';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from 'sweetalert2';

const Web1a = () => {
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    const [data4, setData4] = useState({});

    const AxiosCalls = () => {
        Axios.get(`${baseURL}/ml_model/webscrapping1`).
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

        Axios.get(`${baseURL}/ml_model/webscrapping2`).
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

        Axios.get(`${baseURL}/ml_model/webscrapping3`).
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

        Axios.get(`${baseURL}/ml_model/webscrapping4`).
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

    useEffect(async () => {
        await AxiosCalls()
    }, []);


    return (
        <>
            {JSON.stringify(data)}
            <br></br>
            {data1['Avarai (1 Kg)']}
            <br></br>
            {data2['Apple - Fuji(Pink) (1 Kg)']}
            <br></br>
            {data3['Arakeerai (1 Bunch)']}
            <br></br>
            {data4['Chenna Black ( 1kg )']}
        </>
    )
}

export default Web1a;