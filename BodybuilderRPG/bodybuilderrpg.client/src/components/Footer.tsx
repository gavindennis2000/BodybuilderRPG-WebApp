import { Paper } from '@mui/material';

const Footer: React.FC = () => {

    return (
      <>
        <Paper square sx={{backgroundColor: 'rgba(38, 38, 38, 0.9)', padding: '5px', marginTop: '20px'}}>
          <footer style={{fontSize: 12}}>
            © 2025 Bodybuilder RPG. Created by Gavin Dennis. All rights reserved.
          </footer>
        </Paper>
    </>
  )
}

export default Footer 