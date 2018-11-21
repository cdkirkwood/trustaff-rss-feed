import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { singleNurseStyles } from '../styles'
import SingleNurseDetail from './SingleNurseDetail'
import SingleNurseHeader from './SingleNurseHeader';

class SingleNurse extends PureComponent {

  render() {
    const { classes, nurse } = this.props
    const { name, specialty, city, distance, shiftType, rate, notes, jobs} = nurse
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <SingleNurseHeader name={name} />
          <SingleNurseDetail label="specialty" attribute ={specialty} />
          <SingleNurseDetail label="city" attribute ={city} />
          <SingleNurseDetail label="Travel Distance" attribute ={distance} />
          <SingleNurseDetail label="Shift Type" attribute ={shiftType} />
          <SingleNurseDetail label="Desired Rate" attribute ={rate} />
          <SingleNurseDetail label="Additional Notes" attribute ={notes} />
        </div>
      </div>
    )
  }
}

export default withStyles(singleNurseStyles)(SingleNurse)