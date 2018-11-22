const styles = theme => ({
  matchesContainer: {
    width: '100vw',
    margin: 'auto'
    //display: 'flex',
    //flexDirection: 'column',
    //justifyContent: 'center'
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

export default styles