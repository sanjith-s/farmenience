import React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Fab, Button, Box, Stack, Divider } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ScheduleCard from "../components/scheduleCard";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import { baseURL } from '../constants';
import Cookies from 'js-cookie';

const ImageDetection = () => {
    const [file, setFile] = useState();
    const [filename, setFilename] = useState({})
    const [isUploaded, setIsUploaded] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        console.log(e.target.files[0]);
        setIsUploaded(true);
        setFile(URL.createObjectURL(e.target.files[0]));
        setFilename(e.target.files[0]);
    }

    const postImage = async () => {
        let token = Cookies.get('token');
        let dateStr = new Date(value);
        console.log(props.imgName.name);

        await Axios.post(`${baseURL}/postmeet`, {
            date: dateStr.toLocaleDateString(),
            time: dateStr.toTimeString(),
            details: details,
            crops: crops,
            reason: reason,
            ngotype: ngo,
            location: location,
            image: {
                data: props.imgSrc,
                contentType: "jpg"
            }
        }, { headers: { tokenstring: token } }).
            then(async (response) => {
                console.log(response);
                if (response.data.message === 'Meet Added, Waiting for NGO Reply') {
                    await Swal.fire({
                        icon: 'success',
                        title: 'Meet Added !!',
                        text: 'Waiting for NGO Reply',
                    })
                    navigate('../N6');
                }
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
                else {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.response.data.message,
                    })
                }
            })
    }

    return (
        <div style={{ boxSizing: "borderBox", padding: "1.25rem" }}>
            <CssBaseline />
            <span className="title">Image Disease Detection</span>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{ height: "70vh", width: "vw", marginTop: "1.875rem" }}
            >

                <Container
                    disableGutters={true}
                    sx={{
                        bgcolor: "#ffff",
                        height: "100%",
                        width: "40vw",
                        borderRadius: "3.125rem",
                        paddingLeft: "0rem",
                        paddingRight: "0rem",
                        display: "flex",
                        justifyItems: "center",
                        border: "1rem solid black",
                    }}
                >
                    {!isUploaded && (
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <input
                                type="file"
                                id="imgUp"
                                style={{ display: "none" }}
                                accept="image/png, image/jpeg, image/jpg"
                                maxsize="2"
                                minsize="1"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="imgUp"
                                style={{ width: "fit-content", height: "fit-content" }}
                            >
                                <Fab component="span">
                                    <FileUploadOutlinedIcon />
                                </Fab>
                                <br />
                                <br />
                            </label>
                            <Typography>Upload Image</Typography>
                        </div>
                    )}

                    {isUploaded && (
                        <img
                            src={file}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "fill",
                                borderRadius: "3.125rem",
                            }}
                        />
                    )}

                </Container>
            </Stack>

            <Box textAlign="center" padding={"1.25rem"}>
                <Button onClick={postImage} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
                    Submit
                </Button>
            </Box>

            <Box textAlign="center" padding={"1.25rem"}>
                <Button onClick={() => { navigate('../N9') }} variant="contained" sx={{ bgcolor: "#1FE57A", margin: "auto" }}>
                    Home Page
                </Button>
            </Box>
        </div >
    );
};

export default ImageDetection;