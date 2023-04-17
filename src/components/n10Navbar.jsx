import { AppBar } from '@material-ui/core'
import { Toolbar, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Box } from '@mui/system'
import React from 'react'
import "./navbar.css";
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const N10Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  }

  const fullAnotherSpeak = (text) => {
    responsiveVoice.speak(text, "Tamil Male");
  }

  useEffect(() => {
    var addScript = document.createElement('script');
    var par = document.getElementById("unit1");
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    par.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  useEffect(() => {
    var addScript = document.createElement('script');
    var par = document.getElementById("unit1");
    addScript.setAttribute('src', 'https://code.responsivevoice.org/responsivevoice.js?key=EKCH0zej');
    par.appendChild(addScript);
  }, []);

  return (
    <ul id="unit1">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' className='navbartemp' color='transparent' sx={{
          backgroundColor: 'green'
        }}>
          <Toolbar>
            {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            > */}
            {/* </IconButton> */}
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: "white", fontSize: "1.25rem" }}
              >
                <MenuIcon fontSize='large' />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>PROFILE</MenuItem>
                <MenuItem onClick={handleClose}>QUERIES</MenuItem>
                <MenuItem onClick={handleClose}>APPOINTMENTS</MenuItem>
                <MenuItem onClick={handleClose}>LOGOUT</MenuItem>
              </Menu>
            </div >
            <Typography sx={{ fontSize: "1.25rem !important", marginLeft: "0.625rem" }} >
              NGO
            </Typography>
            <Button sx={{ fontSize: "1.25rem !important", marginLeft: "0.625rem", color: "whitesmoke" }}  >HOME</Button>
            <Button sx={{ fontSize: "1.25rem !important", marginLeft: "0.625rem", color: "whitesmoke" }}  >ABOUT</Button>
            <Button sx={{ fontSize: "1.25rem !important", marginLeft: "0.625rem", color: "whitesmoke" }}  >CONTACT US</Button>
            <Button sx={{ fontSize: "1.25rem !important", marginLeft: "0.625rem", color: "whitesmoke" }}  >DONATE</Button>
            <Button sx={{ fontSize: "1.25rem !important", marginLeft: "0.625rem", color: "whitesmoke" }}  >BLOG</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ul>
  )
}

export default N10Navbar