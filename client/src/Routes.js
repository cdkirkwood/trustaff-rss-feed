import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AllNurses, SingleNurse, FindMatches } from './components'


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
      .catch(error => console.log(error))
  }

  render() {
    const { nurses } = this.state
    return (
      <Switch>
        <Route exact path="/nurses" render={() => <AllNurses nurses={nurses} />} />
        <Route path="/nurses/:id"
          render={(props) => <SingleNurse nurses={nurses} routeProps={props}/>}
        />
        <Route path="/findmatches" component={FindMatches} />
        <Route render={() => <AllNurses nurses={nurses} />} />
      </Switch>
    )
  }
}

export default Routes
