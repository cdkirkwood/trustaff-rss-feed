import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
