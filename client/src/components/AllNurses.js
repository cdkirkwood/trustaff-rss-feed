import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { allNursesStyles } from '../styles'

class AllNurses extends Component {

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
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Nurses</ListSubheader>
          </GridListTile>
          {this.state.nurses.map(nurse => (
            <GridListTile key={nurse.id} className={classes.gridListTitle}>
              <img src="no-profile-picture.png" alt={nurse.title} className={classes.image}/>
              <GridListTileBar
                title={nurse.name}
                subtitle={
                  <div>
                    <span>{nurse.specialty}</span>
                    <br />
                    <span>{`Matches: ${nurse.jobs.length}`}</span>
                  </div>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}


export default withStyles(allNursesStyles)(AllNurses)