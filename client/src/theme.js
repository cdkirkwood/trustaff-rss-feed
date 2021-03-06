import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#ff5252',
    },
  },
  typography: {
    useNextVariants: true,
  }
})

export default theme