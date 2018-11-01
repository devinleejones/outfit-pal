import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

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
  },
  carousel: {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  h1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function Closet(props) {
  const { classes } = props
  const { clothing } = props

  return (
    <Card style={style.card} className="container-fluid">
      <CardContent>
        <h1 style={style.h1} className="text-center mb-4 mt-2">
          My Closet
        </h1>
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
              <React.Fragment>
                <Button
                  color="inherit"
                  variant="contained"
                  {...bindTrigger(popupState)}>
                  Brand
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>John Elliot</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
              <React.Fragment>
                <Button
                  color="inherit"
                  variant="contained"
                  {...bindTrigger(popupState)}>
                  Type
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Hat</MenuItem>
                  <MenuItem onClick={popupState.close}>Jacket/Coat</MenuItem>
                  <MenuItem onClick={popupState.close}>Top</MenuItem>
                  <MenuItem onClick={popupState.close}>Bottom</MenuItem>
                  <MenuItem onClick={popupState.close}>Shoes</MenuItem>
                  <MenuItem onClick={popupState.close}>Jewelry</MenuItem>
                  <MenuItem onClick={popupState.close}>Accessories</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
              <React.Fragment>
                <Button
                  color="inherit"
                  variant="contained"
                  {...bindTrigger(popupState)}>
                  Color
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Black</MenuItem>
                  <MenuItem onClick={popupState.close}>White</MenuItem>
                  <MenuItem onClick={popupState.close}>Grey</MenuItem>
                  <MenuItem onClick={popupState.close}>Brown</MenuItem>
                  <MenuItem onClick={popupState.close}>Floral</MenuItem>
                  <MenuItem onClick={popupState.close}>Red</MenuItem>
                  <MenuItem onClick={popupState.close}>Blue</MenuItem>
                  <MenuItem onClick={popupState.close}>Yellow</MenuItem>
                  <MenuItem onClick={popupState.close}>Orange</MenuItem>
                  <MenuItem onClick={popupState.close}>Purple</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
              <React.Fragment>
                <Button
                  color="inherit"
                  variant="contained"
                  {...bindTrigger(popupState)}>
                  Weather
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Clear</MenuItem>
                  <MenuItem onClick={popupState.close}>Clouds</MenuItem>
                  <MenuItem onClick={popupState.close}>Rain</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
        <Card style={style.carousel} className="container-fluid">
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
        </Card>
      </CardContent>
    </Card>
  )
}

Closet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Closet)
