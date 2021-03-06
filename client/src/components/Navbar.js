import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { navbarStyles } from '../styles'
import { Link } from 'react-router-dom'

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          {/*}
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
  */}
          <Typography variant="h6" color="inherit" className={classes.menuButton}>
            Trustaff Job Matcher
          </Typography>
          <Link to="/nurses" className={classes.nursesLink}>
            <Button color="inherit">All Nurses</Button>
          </Link>
          <Link to="/findmatches" className={classes.nursesLink}>
            <Button color="inherit">Find Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(navbarStyles)(ButtonAppBar)