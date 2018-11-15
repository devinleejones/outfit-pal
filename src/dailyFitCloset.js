import React, { Component } from 'react'
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
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
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
  },
  button: {
    marginRight: '4px',
    maxWidth: '35px',
    maxHeight: '10px'
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
  },
  button: {
    marginRight: '.5rem'
  }
}

class DailyFitCloset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterBy: {
        property: '',
        value: ''
      }
    }
    this.filterClothingArticleBy = this.filterClothingArticleBy.bind(this)
  }

  filterClothingArticleBy(event) {
    const value = event.target.getAttribute('value')
    const property = event.target.getAttribute('property')
    this.setState({ filterBy: { value, property } })
  }

  render() {
    const { classes } = this.props
    const clothing = this.props.clothing.filter(article => {
      if (!this.state.filterBy.property) {
        return article
      }
      return article[this.state.filterBy.property] === this.state.filterBy.value
    })
    return (
      <Card style={style.card}>
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
                    style={style.button}
                    {...bindTrigger(popupState)}>
                    Brand
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      property="brand"
                      value="John Elliot Co"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      John Elliot
                    </MenuItem>
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
                    style={style.button}
                    {...bindTrigger(popupState)}>
                    Type
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      property="type"
                      value="hat"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Hat
                    </MenuItem>
                    <MenuItem
                      property="type"
                      value="jacket/coat"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Jacket/Coat
                    </MenuItem>
                    <MenuItem
                      property="type"
                      value="top"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Top
                    </MenuItem>
                    <MenuItem
                      property="type"
                      value="bottom"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Bottom
                    </MenuItem>
                    <MenuItem
                      property="type"
                      value="shoes"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Shoes
                    </MenuItem>
                    <MenuItem
                      property="type"
                      value="jewelry"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Jewelry
                    </MenuItem>
                    <MenuItem
                      property="type"
                      value="accessories"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Accessories
                    </MenuItem>
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
                    style={style.button}
                    {...bindTrigger(popupState)}>
                    Color
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      property="color"
                      value="black"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Black
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="white"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      White
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="grey"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Grey
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="brown"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Brown
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="floral"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Floral
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="red"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Red
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="blue"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Blue
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="yellow"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Yellow
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="orange"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Orange
                    </MenuItem>
                    <MenuItem
                      property="color"
                      value="purple"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Purple
                    </MenuItem>
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
                    <MenuItem
                      property="weatherType"
                      value="clear"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Clear
                    </MenuItem>
                    <MenuItem
                      property="weatherType"
                      value="clouds"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Clouds
                    </MenuItem>
                    <MenuItem
                      property="weatherType"
                      value="rain"
                      onClick={event => {
                        popupState.close()
                        this.filterClothingArticleBy(event)
                      }}>
                      Rain
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
          <Card style={style.carousel} className="container-fluid">
            <GridList className={classes.gridList} cellHeight={600} cols={2}>
              {clothing.map((image, index) => (
                <GridListTile key={index}>
                  <img src={image.image} alt={image.name} style={style.img} />
                  <GridListTileBar
                    title={image.name}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title
                    }}
                    actionIcon={
                      <div>
                        <Button
                          variant="fab"
                          color="secondary"
                          aria-label="Add"
                          onClick={() =>
                            this.props.addClothingArticle(image.id)
                          }
                          className={classes.button}>
                          <AddIcon />
                        </Button>
                        <Button
                          variant="fab"
                          color="secondary"
                          aria-label="Delete"
                          className={classes.button}
                          id={image.id}
                          onClick={this.props.deleteClothingArticle}>
                          <DeleteIcon />
                        </Button>
                      </div>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Card>
        </CardContent>
      </Card>
    )
  }
}

DailyFitCloset.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DailyFitCloset)
