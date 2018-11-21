import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { AllNurses } from './components'

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
       <AllNurses />
      </div>
    )
  }
}

export default App;
