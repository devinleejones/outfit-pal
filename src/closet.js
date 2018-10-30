import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.white
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
})

const style = {
  card: {
    fontFamily: 'Montserrat, sans-serif',
    marginTop: '4rem',
    marginBottom: '4rem'
  }
}

function Closet(props) {
  const { classes } = props
  const { clothing } = props

  return (
    <Card style={style.card} className="container-fluid">
      <CardContent>
        <h1 className="text-center mb-4 mt-2">My Closet</h1>
        <div className={classes.root}>
          <GridList className={classes.gridList} cellHeight={600} cols={4.5}>
            {clothing.map(image => (
              <GridListTile key={image.image}>
                <img src={image.image} alt={image.name} />
                <GridListTileBar
                  title={image.name}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </CardContent>
    </Card>
  )
}

Closet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Closet)
