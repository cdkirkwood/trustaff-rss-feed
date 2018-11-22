import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { singleNurseStyles } from '../styles'
import SingleNurseDetail from './SingleNurseDetail'
import SingleNurseHeader from './SingleNurseHeader';
import SingleNurseAllMatches from './SingleNurseAllMatches';

class SingleNurse extends PureComponent {

  render() {
    const { classes, nurses, routeProps } = this.props
    const id = routeProps.match.params.id
    const nurse = nurses.find(elem => elem.id === +id)
    return nurse ?
      (
      <div>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <SingleNurseHeader name={nurse.name} />
            <SingleNurseDetail label="Specialty" attribute={nurse.specialty} />
            <SingleNurseDetail label="City" attribute={nurse.city} />
            <SingleNurseDetail label="Travel Distance" attribute={nurse.distance} />
            <SingleNurseDetail label="Shift Type" attribute={nurse.shiftType} />
            <SingleNurseDetail label="Desired Rate" attribute={nurse.rate} />
            <SingleNurseDetail label="Additional Notes" attribute={nurse.notes} />
          </div>
        </div>
          <SingleNurseAllMatches jobs = {nurse.jobs}/>
        </div>
      )
      : <h3>Nurse not found</h3>
  }
}

export default withStyles(singleNurseStyles)(SingleNurse)