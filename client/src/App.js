import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poop: []
    }
  }

  componentDidMount() {
    axios.get('/api/poop')
      //.then(res => res.json())
      .then(res => res.data)
      .then((poop) => this.setState({ poop }))
  }

  render() {
    return (
      <div className="App">
        {this.state.poop.map(something => (
          <h3>{something}</h3>
        ))}
      </div>
    )
  }
}

export default App;
