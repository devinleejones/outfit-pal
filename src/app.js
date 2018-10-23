import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Closet from './closet'

const styles = {
  header: {
    fontFamily: 'Raleway, sans-serif'
  },
  title: {
    fontSize: '48px'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: []
    }
  }

  componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?zip=92618&units=imperial&appid=d073dfb1703b47ce33c493182f9cacb9'
    )
      .then(result => result.json())
      .then(data => {
        this.setState({ weather: data })
        console.log(this.state.weather.list[0].main)
      })
  }

  render() {
    const { weather } = this.state
    return (
      <div className="container-fluid">
        <h1 style={styles.title}>OutfitPal</h1>
        <Grid container justify="center">
          <Typography style={styles.header} variant="h3">
            {"This Week's Closet"}
          </Typography>
        </Grid>
        <Closet weather={weather} />
      </div>
    )
  }
}
