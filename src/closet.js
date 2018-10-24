import React, { Component } from 'react'

export default class Closet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: []
    }
  }

  render() {
    const { days } = this.props
    return (
      <div className="container-fluid">
        <ul>
          {days.map((day, index) => {
            return (
              <li key={index}>
                <span>{day.condition}</span>
                <span>{day.temperature}</span>
                <span>{day.date}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
