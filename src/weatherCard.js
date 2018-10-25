import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import fecha from 'fecha'

const styles = {
  card: {
    position: 'relative',
    maxWidth: 400,
    height: '25vw'
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
  icon: {
    position: 'absolute',
    bottom: '2.5rem',
    right: '4rem'
  }
}

function WeatherCard(props) {
  const { classes } = props
  const { day } = props
  console.log(day)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          {fecha.format(new Date(day.date), 'dddd MMMM Do, YYYY')}
        </Typography>
        <div className={classes.box} />
        <Typography className={classes.condition} component="p">
          {day.condition}
          <br />
          {day.temperature + '°F'}
        </Typography>
        <i className="fas fa-cloud" style={styles.icon} />
      </CardContent>
    </Card>
  )
}

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(WeatherCard)
