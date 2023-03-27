import { useEffect, useState } from "react";
import { baseURL } from '../src/constants';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from 'sweetalert2';

const Web1a = () =>{
    const [data,setData]=useState({});
    useEffect(() => {
        Axios.get(`${baseURL}/ml_model/webscrapping`).
            then((response) => {
                setData(response.data);
            })
            .catch(async (res) => {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error',
                    })
            })
    }, []);
    return (
        <>
            {JSON.stringify(data)}
            <br></br>
            {data['Avarai (1 Kg)']}
            <br></br>
            {data['Apple - Fuji(Pink) (1 Kg)']}
            <br></br>
            {data['Arakeerai (1 Bunch)']}
            <br></br>
            {data['Chenna Black ( 1kg )']}
        </>
    )
}

export default Web1a;