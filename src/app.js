import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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

  render() {
    return (
      <div className="container-fluid">
        <h1 style={styles.title}>OutfitPal</h1>
        <Grid container justify="center">
          <Typography style={styles.header} variant="h3">
            {"This Week's Closet"}
          </Typography>
        </Grid>
        {this.state.weather}
      </div>
    )
  }
}
