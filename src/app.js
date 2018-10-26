import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Home from './home'
import hash from './hash'
import Navbar from './navBar'
import AddClothingArticle from './addClothingArticle'

const styles = {
  header: {
    fontFamily: 'Lora, serif',
    marginTop: '4rem'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path } = hash.parse(location.hash)
    this.state = {
      days: [],
      view: path
    }
  }

  renderView() {
    const { path } = this.state.view
    const { days } = this.state
    switch (path) {
      default:
        return <Home days={days} />
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: path
      })
    })
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
    return (
      <div>
        <Navbar />
        <Grid container justify="center">
          <Typography style={styles.header} variant="h3">
            {"This Week's Closet"}
          </Typography>
        </Grid>
        {this.renderView()}
        {<AddClothingArticle />}
      </div>
    )
  }
}
