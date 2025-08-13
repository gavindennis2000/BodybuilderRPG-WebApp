import { Container, Paper } from '@mui/material'
import { VersionCard } from '../components'
import React from 'react'

const Releases: React.FC = () => {
  const pStyle = {
    marginBottom: '5px',
    marginTop: '40px'
  }

  return (
    <Paper square sx={{backgroundColor: 'rgb(26, 26, 26, 0.9)', marginTop: '20px', padding: '10px'}}>
      <Container sx={{marginTop: '10px', marginBottom: '10px', width: '90%', textAlign: 'left'}}>
        <h1 style={{paddingBottom: '10px', textAlign: 'center'}}>
          Download Bodybuilder RPG
        </h1>
        <p>Here you can find the latest versions of Bodybuilder RPG and previous releases.</p>
        <p style={pStyle}>Current Release:</p>
        
        {/* current release */}
        <VersionCard 
        version="1.0 Alpha" 
        releaseDate="2025-08-13" 
        notes="This is the first demo release! Unfortunately, I can only provide download links for Windows at the moment. The browser version may have occasional issues with music, but these do not appear in the downloadable versions. This version still has a lot of undrawn assets and borrowed sound effects that will be swapped out in later releases." 
        downloads={
          [
            {
              label: "Windows (executable)",
              href: "/downloads/alpha-1.0/bbrpg-1.0-alpha-windows.exe",
            },
            {
              label: "Windows (.zip)",
              href: "/downloads/alpha-1.0/bbrpg-1.0-alpha-windows.zip",
            },
            // {
            //   label: "Mac (executable)",
            //   href: "",
            // },
            // {
            //   label: "Mac (.zip)",
            //   href: "",
            // },
            // {
            //   label: "Linux",
            //   href: "",
            // },
          ]
        }
        />

        {/* older versions */}
        <p style={pStyle}>Older Versions:</p>

      </Container>
    </Paper>
  )
}

export default Releases