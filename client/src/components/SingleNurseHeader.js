import React from 'react'
import Typography from '@material-ui/core/Typography'

const SingleNurseHeader = props => (
  <Typography
  component="h1"
  variant="h2"
  align="center"
  color="textPrimary"
  gutterBottom>
  {props.name}
 </Typography>
)

export default SingleNurseHeader
