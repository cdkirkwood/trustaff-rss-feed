import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import { allNursesStyles } from '../styles'
import AllNursesCard from './AllNursesCard'

class AllNurses extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nurses: []
    }
  }

  render() {
    const { classes, nurses } = this.props

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Nurses</ListSubheader>
          </GridListTile>
          {nurses.map(nurse => (
            <AllNursesCard nurse={nurse} jobs={nurse.jobs} classes={classes} key={nurse.id}/>
          ))}
        </GridList>
      </div>
    )
  }
}


export default withStyles(allNursesStyles)(AllNurses)