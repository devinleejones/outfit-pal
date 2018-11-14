import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Closet from './closet'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const styles = {
  card: {
    fontFamily: 'Montserrat, sans-serif',
    position: 'relative',
    maxWidth: 800,
    marginTop: '2rem',
    marginBottom: '2rem',
    height: '40vw',
    margin: '0 auto'
  },
  title: {
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
  }
}

const style = {
  back: {
    position: 'absolute',
    bottom: '1.5rem',
    left: '1.5rem',
    cursor: 'pointer',
    color: 'black'
  }
}

class DailyFit extends Component {
  constructor(props) {
    super(props)
    this.handleIcon = this.handleIcon.bind(this)
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
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>{"Today's Fit"}</Typography>
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
        <Closet
          clothing={this.props.clothing}
          deleteClothingArticle={this.props.deleteClothingArticle}
        />
      </Fragment>
    )
  }
}

DailyFit.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DailyFit)
