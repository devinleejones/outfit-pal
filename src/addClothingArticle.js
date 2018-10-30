import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const styles = {
  card: {
    fontFamily: 'Montserrat, sans-serif',
    width: '50%',
    marginTop: '4rem',
    marginBottom: '4rem'
  }
}

export default class AddClothingArticle extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    const clothing = {
      name: form.get('name'),
      brand: form.get('brand'),
      type: form.get('type'),
      color: form.get('color'),
      image: form.get('image'),
      weather: form.get('weather')
    }
    this.props.addClothingArticle(clothing)
    event.target.reset()
    location.hash = 'add'
  }
  render() {
    const { handleSubmit } = this
    return (
      <Card style={styles.card} className="container-fluid">
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <h1>Add a Clothing Article</h1>
            <FormGroup className="mt-4">
              <Label for="inputName">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Input Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="inputBrand">Brand</Label>
              <Input
                type="text"
                name="brand"
                id="brand"
                placeholder="Input Brand"
              />
            </FormGroup>
            <FormGroup>
              <Label for="inputType">Type</Label>
              <Input type="select" name="type" id="type">
                <option>Hat</option>
                <option>Jacket/Coat</option>
                <option>Top</option>
                <option>Bottom</option>
                <option>Shoes</option>
                <option>Jewelry</option>
                <option>Accessories</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="inputColor">Color</Label>
              <Input type="select" name="color" id="color">
                <option>Black</option>
                <option>White</option>
                <option>Grey</option>
                <option>Brown</option>
                <option>Floral</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Orange</option>
                <option>Purple</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="inputImage">Image URL</Label>
              <Input
                type="text"
                name="image"
                id="image"
                placeholder="Input Image URL"
              />
            </FormGroup>
            <FormGroup>
              <Label for="inputWeather">Weather Type</Label>
              <Input type="select" name="weather" id="weather">
                <option>Clear</option>
                <option>Clouds</option>
                <option>Rain</option>
              </Input>
            </FormGroup>
            <Button className="btn btn-dark">Add</Button>
          </Form>
        </CardContent>
      </Card>
    )
  }
}
