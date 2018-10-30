import React, { Component, Fragment } from 'react'
import Home from './home'
import hash from './hash'
import Navbar from './navBar'
import AddClothingArticle from './addClothingArticle'
import Closet from './closet'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path } = hash.parse(location.hash)
    this.state = {
      days: [],
      view: { path },
      clothing: []
    }
    this.addClothingArticle = this.addClothingArticle.bind(this)
  }

  addClothingArticle(clothing) {
    fetch('http://localhost:3000/clothing', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(clothing)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ clothing: [...this.state.clothing, data] })
      })
      .catch(err => console.log(err))
  }

  renderView() {
    const { path } = this.state.view
    const { days, clothing } = this.state
    const { addClothingArticle } = this
    switch (path) {
      default:
        return (
          <Fragment>
            <Home days={days} />
          </Fragment>
        )
      case 'home':
        return <Home days={days} />
      case 'add':
        return <AddClothingArticle addClothingArticle={addClothingArticle} />
      case 'closet':
        return <Closet clothing={clothing} />
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/clothing')
      .then(res => res.json())
      .then(clothing => this.setState({ clothing }))
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
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
      <Fragment>
        <Navbar />
        {this.renderView()}
      </Fragment>
    )
  }
}
