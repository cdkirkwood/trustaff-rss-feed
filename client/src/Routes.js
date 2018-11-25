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
      .then(_ => fetch('/api/jobs', {
        method: 'POST'
      }))
      .then(res => res.json())
      .then(jobs => console.log(jobs))
  }

  render() {
    const { nurses } = this.state
    return (
      <Switch>
        <Route exact path="/nurses" render={() => <AllNurses nurses={nurses} />} />
        <Route path="/nurses/:id"
          render={(props) => <SingleNurse nurses={nurses} routeProps={props}/>}
        />
        <Route render={() => <AllNurses nurses={nurses} />} />
      </Switch>
    )
  }
}

export default Routes
