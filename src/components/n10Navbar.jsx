import { AppBar } from '@material-ui/core'
import { Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Button, Menu, MenuItem, IconButton } from '@mui/material';
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

    return (
    <Box sx ={{ flexGrow: 1}}>
        <AppBar position='static' color='transparent' sx={{
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
      >
        <MenuIcon />
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
                    </div>
                <Typography>
                        NGO
                    </Typography>
                    
                    <Button>HOME</Button>
                    <Button>ABOUT</Button>
                    <Button>CONTACT US</Button>
                    <Button>DONATE</Button>
                    <Button>BLOG</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default N10Navbar