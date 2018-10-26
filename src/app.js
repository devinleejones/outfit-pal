import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Closet from './closet'

const styles = {
  header: {
    fontFamily: 'Lora, serif',
    marginTop: '4rem'
  },
  title: {
    fontSize: '42px',
    color: 'white'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: []
    }
  }

  componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?zip=92618&units=imperial&appid=d073dfb1703b47ce33c493182f9cacb9'
    )
      .then(result => result.json())
      .then(data => {
        this.setState({
          days: [
            {
              condition: data.list[0].weather[0].main,
              temperature: data.list[0].main.temp,
              date: data.list[0].dt_txt
            },
            {
              condition: data.list[7].weather[0].main,
              temperature: data.list[7].main.temp,
              date: data.list[7].dt_txt
            },
            {
              condition: data.list[15].weather[0].main,
              temperature: data.list[15].main.temp,
              date: data.list[15].dt_txt
            },
            {
              condition: data.list[23].weather[0].main,
              temperature: data.list[23].main.temp,
              date: data.list[23].dt_txt
            },
            {
              condition: data.list[31].weather[0].main,
              temperature: data.list[31].main.temp,
              date: data.list[31].dt_txt
            }
          ]
        })
      })
  }

  render() {
    const { days } = this.state
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h1 style={styles.title}>OutfitPal</h1>
        </nav>
        <Grid container justify="center">
          <Typography style={styles.header} variant="h3">
            {"This Week's Closet"}
          </Typography>
        </Grid>
        <Closet days={days} />
      </div>
    )
  }
}
