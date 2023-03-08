import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import "../css/queryBox.css"
import QueryBox from '../components/queryBox';
import { Dialog, DialogTitle, DialogActions, Box, Button, Pagination, Stack } from "@mui/material";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

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
    // const deleteThis = (id) => {
    //     var back = data;
    //     for (var i = 0; i < back.length; i++) {
    //         if (back[i]._id == id) {
    //             back.splice(i, i + 1);
    //         }
    //     }
    //     console.log(back);
    //     setData([...back]);
    // }
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const navigate = useNavigate();

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    useEffect(() => {
        let token = Cookies.get('token');
        Axios.get('http://localhost:5000/getquery', { headers: { tokenstring: token } }).
            then((response) => {
                setData(response.data.message);
            })
            .catch((res) => {
                if (res.response.data.message === 'Error in connection') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please Check Network Connection!',
                    })
                }
                else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                    Swal.fire({
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
                    <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
                        Home Page
                    </Button>
                </Box>
            </div>

            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>

            <Dialog
                open={open1}
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Please check network connection !
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose1}>Ok</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Login Error
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose2}>Ok</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}
export default PageN1;