import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Nav({user}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f44336' }}>
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Mini-Home
           
          </Typography>
          {user.role==="OWNER" && <Button color="inherit">sell</Button>}
          {user.role==="CUSTOMER" && <Button color="inherit">Buy</Button>}
          <Button color="inherit">Signin</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

