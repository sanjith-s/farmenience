import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import "./Pagen10.css";
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Stack } from '@mui/system';












function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const queries = [
    "Fund Request by Farmer jon ...",
    "Land Assistance by Farmer kesan ...",
    "Fund extension requestt by farmer..",
    "","","","","",""
  ]
 function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Latest Queries" {...a11yProps(0)} />
            <Tab label="Upcoming Appointments" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <div className='shower'>
            {queries.map(que=>{
            return (<div className='texts-box'>
            <span className='b-text'>{que}</span>
            </div>)
            })}
            </div>
        </TabPanel>
      </Box>
    );
  }








function OneBox(props) {
    return (
        <a href="#">
        <AspectRatio
            ratio="4/4"
            className="boxes"
            sx={{
                width: 200,
                padding:"1%",
                background: "radial-gradient(#ADCF9F, #36AE7C)",
                borderRadius: 'md',
                textAlign:"center",
                color:"#276548",
                overflow: "hidden",
                boxShadow:"5px 5px 2px 1px #ADCF9F",
                "&:hover":{
                background: "radial-gradient(#96e0db,#96e0db, #36AE7C)",
                fontSize:"23px",
                border:"2px solid #44b68a",
                borderBottom:"4px solid black",
                borderTop:"4px solid black",
                animationPlayState: "paused",
                width:200
                }
            }}
        >
           <span className='in-text' >
                {props.name}
            </span>
        </AspectRatio>
        </a>
    )
}

export default function HomePage() {
    return (
        <div style={{padding:"0 4% 0 4%"}}>
            <div style={{textAlign:"center"}}>
        <h1 className='head-text'>Welcome back, NGO</h1>
           </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center" }}>
            <Box
                sx={{ width: '100%',border:"" }}
            >
                <Grid container rowSpacing={2} columnSpacing={0}>
                    <Grid item xs={3} className="box2">
                        <OneBox name={"Upcoming Appointments"}/>
                    </Grid>
                    <Grid item xs={3} className="box2">
                        <OneBox name={"View Queries"}/>
                    </Grid>
                    <Grid item xs={4}>
                       <BasicTabs />
                    </Grid>
                </Grid>
            </Box>
        </div>
        </div>
    );
}