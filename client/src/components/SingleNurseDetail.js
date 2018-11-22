import React from 'react'
import Typography from '@material-ui/core/Typography'

const SingleNurseDetail = props => (
  <Typography
    variant="h6"
    align="center"
    color="textSecondary"
    paragraph>
    {`${props.label}: ${props.attribute}`}
  </Typography>
)

export default SingleNurseDetail