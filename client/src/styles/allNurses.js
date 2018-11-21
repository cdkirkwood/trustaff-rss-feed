const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    height: '20vh',
    width: '20vw',
    marginRight: 50,
  },
  gridList: {
    width: '65vw',
    height: '95vh',
  },
  gridListTitle: {
    margin: '10px 0 0 0',
    // width: '100vw',
    // height: '55vh',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

export default styles
