import React, { useState } from 'react';
import { Box, Paper, Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router';

const buttonSX = {
  color: '#90caf9',
  width: "180px",
  height: "50px",
  borderRadius: '0',
};

const buttonCurrentPageColor = 'rgba(13, 13, 13, 0.9)';



const Navbar: React.FC = () => {

    const location = useLocation();

    return (
      <>
        <Paper square sx={{backgroundColor: 'rgba(38, 38, 38, 0.9)'}}>
            <div style={{
                // marginTop: '20px', 
                marginLeft: '20px',
                marginRight: '20px',
                paddingTop: '1px',
            }}>
                <h1 style={{marginTop: "20px"}}>Bodybuilder RPG</h1>
                <p style={{
                  paddingBottom: '20px'}}>A Retro JRPG-Inspired Bodybuilding Adventure.</p>
            </div>
      </Paper>

            <Paper square sx={{backgroundColor: 'rgb(26, 26, 26, 0.9)'}}>
                <Box display="flex" justifyContent="center" alignItems="center">
                <Stack direction="row" spacing={2}>
                <Button component={Link} to="/" sx={{...buttonSX, backgroundColor: location.pathname == "/" ? buttonCurrentPageColor : "transparent"}}>
                    Home
                </Button>
                <Button component={Link} to="/demo" sx={{...buttonSX, backgroundColor: location.pathname == "/demo" ? buttonCurrentPageColor : "transparent"}}>
                    Play 
                </Button>
                <Button component={Link} to="/releases" sx={{...buttonSX, backgroundColor: location.pathname == "/releases" ? buttonCurrentPageColor : "transparent"}}>
                    Releases
                </Button>
                <Button component={Link} to="/about" sx={{...buttonSX, backgroundColor: location.pathname == "/about" ? buttonCurrentPageColor : "transparent"}}>
                    About 
                </Button>
          </Stack>
          </Box>
        </Paper>
        <Paper square sx={{
          backgroundColor: buttonCurrentPageColor,
          height: '10px'
        }}>
          <Stack direction="row" spacing={6}>
          </Stack>
        </Paper>
    </>
  )
}

export default Navbar