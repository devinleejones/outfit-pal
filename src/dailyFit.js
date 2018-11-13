import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const styles = {
  card: {
    fontFamily: 'Montserrat, sans-serif',
    position: 'relative',
    maxWidth: 800,
    maxHeight: 400,
    marginTop: '2rem',
    height: '40vw',
    margin: '0 auto'
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  box: {
    height: '5vw'
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

class DailyFit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: []
    }
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
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{"Today's Fit"}</Typography>
          <div className={classes.box} />
          <Typography className={classes.condition} component="p">
            <i className={handleIcon()} /> {day.condition}
            <br />
            {day.temperature + '°F'}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

DailyFit.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DailyFit)
