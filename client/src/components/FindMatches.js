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
      .then(jobs => console.log(jobs))
      .catch(error => console.log(error))
  }

  render() {
    console.log('heere')
    const { jobs } = this.state
    return jobs.length ?
      (
        <ul>
          {jobs.map(job => (
            <li>
              <span>{job.id}</span>
              <ul>
              {job.nurses.length ?
                job.nurses.map(nurse => (
                  <li>
                    {nurse.name}
                  </li>
                ))
                : <li>no matches</li>
              }
              </ul>
            </li>
          ))}
        </ul>
      )
      : <h3>...loading</h3>
  }
}

export default FindMatches