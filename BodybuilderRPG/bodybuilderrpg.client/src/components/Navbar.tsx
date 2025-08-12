import { React, useState } from 'react';
import { Box, Paper, Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router';

const buttonSX = {
  width: "180px",
  height: "50px",
  borderRadius: '0',
};

const buttonCurrentPageColor = '#b3e7ff';



const Navbar = () => {

    const location = useLocation();

    return (
        <Paper square sx={{backgroundColor: 'rgb(245, 252, 255, 0.9)'}}>
            <div style={{
                margin: '20px', 
                marginLeft: '20px',
                marginRight: '20px',
                paddingTop: '1px',
            }}>
                <h1 style={{marginBottom: "0px"}}>Bodybuilder RPG</h1>
                <p style={{marginBottom: "30px", marginTop: '0px'}}>A Retro JRPG-Inspired Bodybuilding Adventure.</p>
            </div>

            <Paper square sx={{backgroundColor: '#e6f7ff'}}>
                <Box display="flex" justifyContent="center" alignItems="center">
                <Stack direction="row" spacing={2}>
                <Button component={Link} to="/" sx={{...buttonSX, backgroundColor: location.pathname == "/" ? buttonCurrentPageColor : "transparent"}}>
                    Home
                </Button>
                <Button component={Link} to="/about" sx={{...buttonSX, backgroundColor: location.pathname == "/about" ? buttonCurrentPageColor : "transparent"}}>
                    About 
                </Button>
                <Button component={Link} to="/demo" sx={{...buttonSX, backgroundColor: location.pathname == "/demo" ? buttonCurrentPageColor : "transparent"}}>
                    Demo 
                </Button>
          </Stack>
          </Box>
        </Paper>
        <Paper square sx={{
          backgroundColor: '#b3e7ff',
          height: '10px'
        }}>
          <Stack direction="row" spacing={6}>
          </Stack>
        </Paper>
      </Paper>
  )
}

export default Navbar