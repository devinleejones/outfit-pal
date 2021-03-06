import React, { Component, Fragment } from 'react'
import Home from './home'
import hash from './hash'
import Navbar from './navBar'
import AddClothingArticle from './addClothingArticle'
import Closet from './closet'
import DailyFit from './dailyFit'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = hash.parse(location.hash)
    this.state = {
      days: [],
      view: { path, params },
      clothing: []
    }
    this.addClothingArticle = this.addClothingArticle.bind(this)
    this.deleteClothingArticle = this.deleteClothingArticle.bind(this)
    this.filterDays = this.filterDays.bind(this)
  }

  addClothingArticle(clothing) {
    fetch('/clothing', {
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

  deleteClothingArticle(event) {
    const { clothing } = this.state
    let articleId = event.target.closest('[id]').id
    articleId = parseInt(articleId, 10)
    const index = clothing.findIndex(article => article.id === articleId)
    fetch(`/clothing/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        const before = clothing.slice(0, index)
        const after = clothing.slice(index + 1)
        this.setState({ clothing: [...before, ...after] })
      })
  }

  renderView() {
    const { path, params } = this.state.view
    const { days, clothing } = this.state
    const { addClothingArticle, deleteClothingArticle } = this
    switch (path) {
      default:
        return (
          <Fragment>
            <Home days={days} />
          </Fragment>
        )
      case 'home':
        return <Home days={days} />
      case 'todaysfit':
        return (
          <DailyFit
            params={params}
            clothing={clothing}
            day={this.filterDays() || []}
          />
        )
      case 'add':
        return <AddClothingArticle addClothingArticle={addClothingArticle} />
      case 'closet':
        return (
          <Closet
            clothing={clothing}
            deleteClothingArticle={deleteClothingArticle}
          />
        )
    }
  }

  filterDays() {
    const selectedDay = this.state.days.filter(day => {
      return day.id === parseInt(this.state.view.params.closetId, 10)
    })
    return selectedDay[0]
  }
  componentDidMount() {
    fetch('/clothing')
      .then(res => res.json())
      .then(clothing => this.setState({ clothing }))
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        view: { path, params }
      })
    })
    fetch('/weather', { method: 'GET' })
      .then(result => result.json())
      .then(data => {
        this.setState({
          days: [
            {
              condition: data.list[0].weather[0].main,
              temperature: data.list[0].main.temp,
              date: data.list[0].dt_txt,
              id: 1
            },
            {
              condition: data.list[8].weather[0].main,
              temperature: data.list[8].main.temp,
              date: data.list[8].dt_txt,
              id: 2
            },
            {
              condition: data.list[16].weather[0].main,
              temperature: data.list[16].main.temp,
              date: data.list[16].dt_txt,
              id: 3
            },
            {
              condition: data.list[24].weather[0].main,
              temperature: data.list[24].main.temp,
              date: data.list[24].dt_txt,
              id: 4
            },
            {
              condition: data.list[32].weather[0].main,
              temperature: data.list[32].main.temp,
              date: data.list[32].dt_txt,
              id: 5
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
