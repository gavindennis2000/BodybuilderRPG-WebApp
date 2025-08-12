import React from 'react'
import { Box, Container, Paper } from '@mui/material'

const Home: React.FC = () => {

  return (
    <Paper square sx={{backgroundColor: 'rgb(26, 26, 26, 0.9)', marginTop: '20px', padding: '10px'}}>
        <Container sx={{marginTop: '10px', maxWidth: '850px', textAlign: 'left'}}>
            <h1 style={{paddingBottom: '10px', textAlign: 'center'}}>
              Welcome to the Official Website for Bodybuilder RPG!
            </h1>
            <p>
              Bodybuilder RPG is an upcoming indie game that draws inspiration from some of my favorite titles—Final Fantasy VII and X, Pokémon Blue, Chrono Trigger, and Undertale.
            </p>
            <img src="/placeholder.jpg" alt="BBRPG Gameplay" />
            <p>
              With BBRPG, my aim is to reduce a lot of the redundancy found in many traditional JRPGs—endless level grinding, backtracking, unskippable conversations—while preserving what makes them great: simple, easy to play game design, memorable dialogue, and a combat system that is strategic while not overwhelming the player with options.
            </p>
            <img src="/placeholder.jpg" alt="BBRPG Gameplay" />
            <p>
              Thanks for visiting my site. I look forward to sharing more updates with you as the development process continues. Stay tuned!
            </p>
        </Container>
    </Paper>
  )
}

export default Home