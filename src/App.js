import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import AppBar from './components/AppBar';
import Main from './components/Main';
import Modal from './components/Modal';

import './App.scss';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AppBar />
        <Main />
        <button onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleClose}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
