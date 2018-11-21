import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AllNurses, SingleNurse } from './components'


class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nurses: []
    }
  }

  componentDidMount() {
    fetch('/api/nurses')
      .then(response => response.json())
      .then(nurses => this.setState({ nurses }))
  }

  render() {
    return (
      <Switch>
        <Route path="/nurses" render={() => <AllNurses nurses={this.state.nurses} />} />
        <Route path="/singlenurse" component={SingleNurse} />
        <Route render={() => <AllNurses nurses={this.state.nurses} />} />
      </Switch>
    )
  }
}

export default Routes
