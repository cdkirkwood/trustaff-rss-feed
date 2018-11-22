import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { singleNurseMatchesStyles } from '../styles'
import SingleNurseSingleMatch from './SingleNurseSingleMatch'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class CheckboxListSecondary extends Component {

  render() {
    const { classes, jobs } = this.props

    return (
      <Grid item xs={12} md={6} className={classes.matchesContainer}>
        <Typography variant="h6" className={classes.title}>
          Possible Job Matches
        </Typography>
        <div className={classes.demo}>
          <List dense={false}>
            {jobs.map(job => (
              <SingleNurseSingleMatch job={job} key={job.id} />
            ))}
          </List>
        </div>
    </Grid>
        )
      }
    }

export default withStyles(singleNurseMatchesStyles)(CheckboxListSecondary)