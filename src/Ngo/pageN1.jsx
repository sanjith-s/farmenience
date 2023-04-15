import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import "../css/queryBox.css"
import QueryBox from '../components/queryBox';
import { Box, Button, Stack, Pagination } from "@mui/material";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from '../constants';

const PageN1 = () => {
    const [data, setData] = useState([
        {
            _id: 23,
            updatedAt: "22/2/2023",
            status: "Viewed",
            subject: "Quality Issue",
            description: "Recently bought wheat which is in bad quality",
        }, {
            _id: 13,
            updatedAt: "22/2/2023",
            status: "Viewed",
            subject: "Price Issue",
            description: "Recently bought wheat which is high priced",
        }
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        let token = Cookies.get('token');
        Axios.get(`${baseURL}/getquery`, { headers: { tokenstring: token } }).
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

    return (
        <>
            <Box className="query-list">
                <h2 className="query-list__heading">All Queries</h2>
                {
                    data.map((val) => {
                        return (
                            <div>
                                <QueryBox ID={val._id} Date={val.updatedAt} Status={val.status} Subject={val.subject} Desc={val.description
                                } oldQuery={val.oldQuery} fullData={val} />
                            </div>
                        )
                    })
                }
            </Box>
            <div>

                <Box textAlign="center" padding={"1.25rem"}>
                    <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{backgroundColor:"#fafa01", color:"black" , "&:hover": {
                    backgroundColor:"#ffff00",
                  } }}>
                        Home Page
                    </Button>
                </Box>
            </div>

            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" showFirstButton showLastButton />
            </Stack>
        </>
    )
}
export default PageN1;