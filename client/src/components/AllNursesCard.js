import React, { PureComponent } from 'react'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { Link } from 'react-router-dom'

class AllNursesCard extends PureComponent {
  render() {
    const { nurse, classes, jobs } = this.props
    return (
      <GridListTile className={classes.gridListTitle}>
        <img src="no-profile-picture.png" alt={nurse.title} className={classes.image} />
        <GridListTileBar
          title={nurse.name}
          subtitle={
            <div>
              <span>{nurse.specialty}</span>
              <br />
              <span>{`Matches: ${jobs.length}`}</span>
            </div>}
          actionIcon={
            <Link to={`/nurses/${nurse.id}`}>
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            </Link>
          }
        />
      </GridListTile>
    )
  }
}

export default AllNursesCard
