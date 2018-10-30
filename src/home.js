import React, { Component } from 'react'
import WeatherCard from './weatherCard'
import Typography from '@material-ui/core/Typography'

const styles = {
  container: {
    height: '100%',
    width: '100%',
    overflowX: 'scroll'
  },
  box: {
    width: 2000,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    fontFamily: 'Montserrat, sans-serif',
    marginTop: '4rem',
    marginBottom: '4rem'
  }
}

export default class Home extends Component {
  render() {
    const { days } = this.props
    return (
      <Typography className="text-center" style={styles.header} variant="h3">
        {"This Week's Closet"}
        <div className="mt-4" style={styles.container}>
          <div className="mt-4" style={styles.box}>
            {days.map((day, index) => {
              return <WeatherCard key={index} day={day} />
            })}
          </div>
        </div>
      </Typography>
    )
  }
}
