import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import AppBar from './components/AppBar';

import './App.scss';

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AppBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
