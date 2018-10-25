import React, { Component } from 'react'
import WeatherCard from './weatherCard'

const styles = {
  container: {
    width: 1000,
    // minWidth: '100%',
    // overflowX: 'auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  card: {}
}

export default class Closet extends Component {
  render() {
    const { days } = this.props
    console.log(days)
    return (
      <div className="container-fluid mt-4" style={styles.container}>
        {days.map((day, index) => {
          return <WeatherCard key={index} style={styles.card} day={day} />
        })}
      </div>
    )
  }
}
