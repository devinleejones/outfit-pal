import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import DailyFitCloset from './dailyFitCloset'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const styles = theme => ({
  card: {
    fontFamily: 'Montserrat, sans-serif',
    position: 'relative',
    maxWidth: 800,
    marginTop: '2rem',
    marginBottom: '2rem',
    margin: '0 auto'
  },
  header: {
    fontSize: 24,
    textAlign: 'center'
  },
  box: {
    textAlign: 'center',
    alignItems: 'center'
  },
  condition: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem'
  },
  edit: {
    cursor: 'pointer'
  },
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
  back: {
    position: 'absolute',
    bottom: '1.5rem',
    left: '1.5rem',
    cursor: 'pointer',
    color: 'black'
  },
  carousel: {
    marginTop: '2rem',
    marginBottom: '4rem'
  },
  message: {
    fontSize: '20px',
    width: 800,
    textAlign: 'center'
  }
}

class DailyFit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      closet: []
    }
    this.handleIcon = this.handleIcon.bind(this)
    this.closetState = this.closetState.bind(this)
    this.addToCloset = this.addToCloset.bind(this)
  }

  addToCloset(id) {
    const { clothing } = this.props
    // const clothingCopy = clothing.slice()
    // console.log(clothingCopy)
    const closetCopy = clothing.filter(article => article.id === id)
    this.setState({ closet: closetCopy })
  }

  closetState() {
    const { closet } = this.state
    const { classes } = this.props
    if (closet.length < 1) {
      return (
        <Typography
          className="align-items-center d-flex justify-content-center"
          style={style.message}>
          {'Your closet is empty, plese add articles from your closet below'}
        </Typography>
      )
    }
    else {
      return closet.map((image, index) => (
        <GridListTile key={index}>
          <img src={image.image} alt={image.name} style={style.img} />
          <GridListTileBar
            title={image.name}
            classes={{
              root: classes.titleBar,
              title: classes.title
            }}
          />
        </GridListTile>
      ))
    }
  }

  handleIcon() {
    const { condition } = this.props.day
    switch (condition) {
      case 'Clear':
        return 'fas fa-sun'
      case 'Clouds':
        return 'fas fa-cloud'
      case 'Rain':
        return 'fas fa-umbrella'
    }
  }
  render() {
    const { classes } = this.props
    const { day } = this.props
    const { handleIcon } = this
    const { closetState } = this
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.header}>{"Today's Fit"}</Typography>
            <Card style={style.carousel} className="d-flex">
              <GridList className={classes.gridList} cellHeight={400} cols={2}>
                {closetState()}
              </GridList>
            </Card>
            <a href="#home">
              <i
                style={style.back}
                className="far fa-arrow-alt-circle-left fa-lg"
              />
            </a>
            <Typography className={classes.condition} component="p">
              <i className={handleIcon()} /> {day.condition}
              <br />
              {day.temperature + '°F'}
            </Typography>
          </CardContent>
        </Card>
        <DailyFitCloset
          clothing={this.props.clothing}
          deleteClothingArticle={this.props.deleteClothingArticle}
          addClothingArticle={this.addToCloset}
        />
      </Fragment>
    )
  }
}

DailyFit.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DailyFit)
