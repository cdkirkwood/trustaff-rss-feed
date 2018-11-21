import React from 'react'
import Typography from '@material-ui/core/Typography'

const SingleNurseDetail = props => (
  <Typography
    component="h1"
    variant="h2"
    align="center"
    color="textPrimary"
    gutterBottom>
    {`${props.label} ${props.attribute}`}
  </Typography>
)

export default SingleNurseDetail