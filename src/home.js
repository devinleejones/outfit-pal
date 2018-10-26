import React, { Component } from 'react'
import WeatherCard from './weatherCard'

const styles = {
  container: {
    height: '100%',
    width: '100%',
    overflowX: 'auto'
  },
  box: {
    width: 2000,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
}

export default class Home extends Component {
  render() {
    const { days } = this.props
    return (
      <div className="mt-4" style={styles.container}>
        <div className="mt-4" style={styles.box}>
          {days.map((day, index) => {
            return <WeatherCard key={index} day={day} />
          })}
        </div>
      </div>
    )
  }
}
