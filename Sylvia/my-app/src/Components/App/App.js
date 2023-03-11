import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';
import SimpleForm from '../SimpleForm/SimpleForm';
function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button fl kdsjflkasjfasd
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button> */}
      <SimpleForm/>
      </Paper>
    </Container>
  );
}
export default App;