import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";

const PageN12 = () => {
  const handleChange = (event) => { };

  const content = {
    id: "1",
    type: "request",
    name: "Visit to farm",
    date: "16/07/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tortor ligula, in ultricies est maximus nec. Mauris a porta est, ac iaculis ante. Etiam euismod mi sit amet aliquam efficitur. Aenean ante augue, tincidunt sit amet tristique nec, consectetur cursus dui. Cras placerat luctus diam et fringilla. Etiam elit est, efficitur eget ullamcorper nec, efficitur a lacus.",
    attachments: ["Image", "Bill", "PDF"],
  };

  return (
    <Container
      style={{
        margin : "30px",
        padding: "15px 0px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        width: "100%",
        height: "100%",
      }}
    >
      <CssBaseline />
      <Grid container sx={{ width: "100%" }}>
        <Grid xs={2}>
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "#adadad",
                color: "white",
              },
            }}
          >
            <ArrowBackIcon
              sx={{
                fontSize: "2.5rem",
              }}
            />
          </IconButton>
        </Grid>

        <Grid xs={8}>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
            }}
          >
            View Queries
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          margin:"30px",
          padding: "20px",
          backgroundColor: "#ffffff",
          boxShadow : 10,
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          sx={{
            margin: "10px",
            padding: "10px",
            height: "100%",
          }}
          columnSpacing={2}
        >
          <Grid xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  fontWeight:600,
                  width:"125px",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:"7px",
                }}
              >
                Query ID:
              </Typography>
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  background: "#f5f5f5",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "70%",
                }}
              >
                {content.id}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  fontWeight:600,
                  width:"125px",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:"7px",
                }}
              >
                Query Type:
              </Typography>
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  background: "#f5f5f5",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "350px",
                }}
              >
                {content.type}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  fontWeight:600,
                  width:"125px",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:"7px",
                }}
              >
                Query Name:
              </Typography>
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  background: "#f5f5f5",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "70%",
                }}
              >
                {content.name}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid xs={12}>
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  fontWeight:600,
                  width:"125px",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:"7px",
                }}
              >
                Description:
              </Typography>
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "7px",
                  background: "#f5f5f5",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "90%",
                }}
              >
                {content.description}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:"10px",
                  fontWeight:600,
                  fontSize: "1rem",
                  padding: "10px",
                  width:"125px",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:"7px",
                }}
              >
                Date:
              </Typography>
              <Typography
                style={{
                  margin:"10px",
                  fontSize: "1rem",
                  padding: "10px",
                  background: "#f5f5f5",
                  marginLeft: "5px",
                  borderRadius: "4px",
                  width: "70%",
                }}
              >
                {content.date}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                style={{
                  margin:"10px",
                  fontWeight:600,
                  fontSize: "1rem",
                  padding: "10px",
                  width:"125px",
                  /* backgroundColor :"#99edc3", */
                  borderRadius:"7px",
                }}
              >
                Attachments:
              </Typography>

              <FormControl
                variant="standard"
                sx={{
                  margin:"10px",
                  width: "50%",
                  borderRadius: "4px",
                  color: "black",
                  background: "#f5f5f5",
                  height: "20%",
                }}
              >
                <InputLabel
                  id="select-attachments"
                  sx={{ paddingLeft: "10px" }}
                >
                  Open
                </InputLabel>
                <Select
                  labelId="select-attachments"
                  id="select-attachments"
                  value={""}
                  onChange={handleChange}
                  label="Attachments"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {content.attachments.map((val) => {
                    return <MenuItem value={val.toLowerCase}>{val}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box
             margin = {2}
              sx={{
                 
                display: "flex",
                justifyContent: "space-evenly",
                padding: "7px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                <DeleteIcon />
                Delete
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                <CallIcon />
                Respond
              </Button>
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor: "#f7a900",
                  },
                }}
              >
                Sender Details
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PageN12;
