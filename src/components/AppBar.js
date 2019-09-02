import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { ReactComponent as SBLogo } from '../assets/sb-logo.svg';

import './AppBar.scss';

function AppBarWrapper() {
  return (
    <AppBar className="app-bar" position="static" elevation={0}>
      <Toolbar>
        <SBLogo className="sb-logo" />
        <div className="app-bar__spacer" />
        <Box mr={2}>
          <Button variant="contained" color="primary" elevation={0}>
            Export Video
          </Button>
        </Box>
        <Avatar>
          {'G'}
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarWrapper;
