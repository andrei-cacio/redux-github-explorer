import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Login from '../components/login';

const AppTheme = () => getMuiTheme({
  palette: {
    primary1Color: '#f4511e'
  }
});

export default () => (
  <MuiThemeProvider muiTheme={AppTheme()}>
    <Login/>
  </MuiThemeProvider>
)
