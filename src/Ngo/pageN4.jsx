import React from "react";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Fab, Button, Box, Stack, Divider } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ScheduleCard from "../components/scheduleCard";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import { baseURL } from '../constants';
import Cookies from 'js-cookie';

const PageN4 = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState({})
  const [isUploaded, setIsUploaded] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    console.log(e.target.files[0]);
    setIsUploaded(true);
    setFile(URL.createObjectURL(e.target.files[0]));
    setFilename(e.target.files[0]);
  }

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append('caption', "hello");
    formData.append('file', filename);
    console.log(Array.from(formData.entries()))
    await Axios.post(`${baseURL}/upload`, formData)
      .then(async (response) => {
      })
      .catch(async (res) => {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.response.data.message,
        })
      })
  }
  useEffect(() => {
    const checkToken = async () => {
      let token = Cookies.get('token');
      await Axios.get(`${baseURL}/tokenCheck`, { headers: { tokenstring: token } }).
        then((response) => {

        })
        .catch(async (res) => {
          alert(res.response.data.message)
          if (res.response.data.message === 'Error in connection') {
            await Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please Check Network Connection!',
            })
            navigate('../login')
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
    }
    checkToken();
  }, []);

  const getImages = async () => {
    await Axios.get(`${baseURL}/files`)
      .then(async (response) => {
        setData(response.data);
      })
      .catch(async (res) => {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.response.data.message,
        })
      })
  }

  return (
    <div style={{ boxSizing: "borderBox", padding: "25px", }}>
      <CssBaseline />
      <Typography fontWeight={700} fontSize={50} sx={{
        alignItems: "center",
        // marginLeft: "auto"
        textAlign: "center"
      }}>Schedule a Meet with NGO</Typography>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ height: "70vh", width: "vw", marginTop: "1.875rem" }}
      >
        <Container
          sx={{
            padding: "1.25rem",
            height: "100%",
            width: "60vw",
            borderRadius: "3.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ScheduleCard imageReset={setFile} toggle={setIsUploaded} imgSrc={file} imgName={filename} />
        </Container>
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



      {data && data.map((img, index) => {
        return (
          <div>
            <img src={img.url} alt={img.name} height="5rem" />
            <br></br>
          </div>
        );
      })}

    </div>
  );
};

export default PageN4;