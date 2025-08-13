import { Container, Paper } from '@mui/material'
import React from 'react'

const About: React.FC = () => {
  return (
    <Paper square sx={{backgroundColor: 'rgb(26, 26, 26, 0.9)', marginTop: '20px', padding: '10px'}}>
        <Container sx={{marginTop: '10px', textAlign: 'left', width: '90%'}}>
            <h1 style={{paddingBottom: '10px', textAlign: 'center'}}>
              About the Creator
            </h1>
            <p>
              Hi! My name is Gavin, and I'm the creator of Bodybuilder RPG. I began coding games in middle school after a family friend gifted me a GameMaker textbook. After coding as a hobby for years, I decided to pursue a Bachelor's Degree in Computer Science at the University of Missouri-St. Louis. While enrolled at UMSL, I completed my first full game, <a href="https://gx.games/games/lzrbfz/operation-warfare/" target="_blank" rel="noopener noreferrer"><i>Operation Warfare</i></a>, a platformer/shooter reminiscent of NES classics like <i>Contra</i> and <i>Mega Man</i>.
            </p><br />
            <p>
              When I'm not writing code, you can usually find me brewing coffee, recording music with my friends, and of course, pumping iron. I'm certainly not as jacked as the characters in my game, though! Anyways, thanks for checking out my project. Feel free to email me your questions or feedback at <u>bodybuilder.rpg@gmail.com</u>.
            </p>
            <img src="game developer deadlifting.jpg" alt="game developer deadlifts 405lbs" style={{maxWidth: '50%', marginTop: '20px'}}/>
        </Container> 
    </Paper>
  )
}

export default About