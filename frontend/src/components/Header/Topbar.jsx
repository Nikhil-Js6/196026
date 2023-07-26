import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TrainIcon from '@mui/icons-material/Train';

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TrainIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Train Central
          </Typography>
          </IconButton>
        </Toolbar>
        <Toolbar>
        <Button color="inherit" style={{ justifySelf: 'flex-end', alignSelf: 'center'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
