import React from 'react'
import Button from '@material-ui/core/Button'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    )
  }
}
