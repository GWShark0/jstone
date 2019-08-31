import React from 'react';
import AppBarMUI from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { ReactComponent as SBLogo } from '../assets/sb-logo.svg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';

import './AppBar.scss';

function AppBar() {
  return (
    <AppBarMUI className="app-bar" position="static" elevation={2}>
      <Toolbar>
        <SBLogo className="sb-logo" />
        <div className="app-bar__spacer" />
        <Button variant="contained" color="primary">
          Export Video
        </Button>
        <Box mx={2}>
          Saved Videos
        </Box>
        <AccountCircleIcon fontSize="large" />
      </Toolbar>
    </AppBarMUI>
  );
}

export default AppBar;
