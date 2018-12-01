import React, { Component } from 'react'

class FindMatches extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    fetch('/api/jobs', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(jobs => this.setState({ jobs }))
      .catch(error => console.log(error))
  }

  render() {
    const { jobs } = this.state
    console.log(jobs)
    return jobs.length ?
      (
        jobs.map(job => (
            job.nurses.length ?
              <ul>
                <span>{job.id}</span>
                {job.nurses.map(nurse => (
                  <li>
                    {nurse.name}
                  </li>
                ))}
              </ul>
              : null
        ))
      )
      : <h3>...loading</h3>
  }
}

export default FindMatches