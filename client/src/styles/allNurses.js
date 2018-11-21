const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    height: '20vh',
    width: '20vw',
  },
  gridList: {
    width: '80vw',
    height: '95vh',
    display: 'flex',
    justifyContent: 'center'
  },
  gridListTitle: {
    display: 'flex',
    marginTop: 8,
    height: '32vh',
    width: '25vw',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

export default styles
