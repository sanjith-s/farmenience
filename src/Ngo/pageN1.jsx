import '../css/pageN1.css'
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import QueryBox from '../components/queryBox';
import Typography from '@mui/material/Typography';
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const PageN1 = () => {
    const [data, setData] = useState([
        {
            _id: 23,
            updatedAt: "22/2/2023",
            status: "Viewed",
            subject: "QUality Issue",
            description: "Recently bought wheat which is in bad quality",
        }, {
            _id: 13,
            updatedAt: "22/2/2023",
            status: "Viewed",
            subject: "Price Issue",
            description: "Recently bought wheat which is high priced",
        }
    ]);
    const deleteThis = (id) => {
        var back = data;
        for (var i = 0; i < back.length; i++) {
            if (back[i]._id == id) {
                back.splice(i, i + 1);
            }
        }
        console.log(back);
        setData([...back]);
    }
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
          
                <Typography variant="h2" id="n1-title">
                    QUERIES
                </Typography>
           
            <Box id="flex-cards" sx={{
                padding:'20px',
            }}>
                {
                    data.map((val) => {
                        return (
                            <div>
                                <QueryBox ID={val._id} Date={val.updatedAt} Status={val.status} Subject={val.subject} Desc={val.description
                                } oldQuery={val.oldQuery} deleteFunc={deleteThis} fullData={val} />
                            </div>
                        )
                    })
                }
            </Box>
            <div>

                <Box textAlign="center" padding={"20px"}>
                    <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
                        Home Page
                    </Button>
                </Box>
            </div>

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