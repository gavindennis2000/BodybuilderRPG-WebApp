import { Box, Container, Paper, Typography } from '@mui/material'
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward } from "@mui/icons-material";

import React from 'react'
import { Link } from 'react-router-dom'

const Demo: React.FC = () => {
  return (
    <Paper sx={{backgroundColor: 'rgb(26, 26, 26, 0.9)', marginTop: '20px', padding: '10px'}}>
        <Container sx={{marginTop: '10px', textAlign: 'left', width: '90%'}}>
          <h1 style={{textAlign: 'center', paddingBottom: '10px'}}>
            Play Bodybuilder RPG (Demo Version)
          </h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 0,       // padding
              mb: 0,      // margin bottom
            }}
          >
            <Typography variant="body1">Last Updated: August 13, 2025</Typography>
            <Typography variant="body1">Version: 1.0 Alpha</Typography>
          </Box>
          {/* container for the game */}
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '10px',
            marginBottom: '10px',
          }}>
            <iframe src="/game/game.html"
              width="720"
              height="405"
              style={{border: 0, display: "block"}}
              
              allowFullScreen
            >
              Your browser does not support iframes.
            </iframe>
          </Box>
      <p>If you encounter any issues running the game in your browser, you can download the latest version <Link to="/releases">here</Link>.</p> <br />

      {/* controls */}
      <div style={{marginBottom: '40px'}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr", // first column fixed width for keys, second column fills remaining space
            rowGap: "4px",
            columnGap: "8px",
          }}
        >
          <p>Controls:</p> <br />
          <p><strong>W / <ArrowUpward fontSize="small" sx={{verticalAlign: "middle"}} />:</strong></p>
          <p>Move Up</p>

          <p><strong>A / <ArrowBack fontSize="small" sx={{verticalAlign: "middle"}} />:</strong></p>
          <p>Move Left</p>

          <p><strong>S / <ArrowDownward fontSize="small" sx={{verticalAlign: "middle"}} />:</strong></p>
          <p>Move Down</p>

          <p><strong>D / <ArrowForward fontSize="small" sx={{verticalAlign: "middle"}} />:</strong></p>
          <p>Move Right</p>

          <p><strong>J / South:</strong></p>
          <p>Talk, Confirm</p>

          <p><strong>K / East:</strong></p>
          <p>Run, Cancel</p>

          <p><strong>U / West:</strong></p>
          <p>Skip Dialog</p>
        </div>
      </div>

      <p>
        Updates: This is the first demo release! You can play from the start up until the first boss fight. The browser version may have occasional issues with music, but these do not appear in the downloadable versions. This version still has a lot of undrawn assets and borrowed sound effects that will be swapped out in later releases.
      </p>
      </Container>
    </Paper>
  )
}

export default Demo