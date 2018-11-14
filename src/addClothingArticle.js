import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const styles = {
  card: {
    fontFamily: 'Montserrat, sans-serif',
    width: '90%',
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
      weatherType: form.get('weatherType')
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
                <option value="hat">Hat</option>
                <option value="jacket/coat">Jacket/Coat</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="shoes">Shoes</option>
                <option value="jewelry">Jewelry</option>
                <option value="accessories">Accessories</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="inputColor">Color</Label>
              <Input type="select" name="color" id="color">
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="grey">Grey</option>
                <option value="brown">Brown</option>
                <option value="floral">Floral</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
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
              <Input type="select" name="weatherType" id="weather">
                <option value="clear">Clear</option>
                <option value="clouds">Clouds</option>
                <option value="rain">Rain</option>
              </Input>
            </FormGroup>
            <Button className="btn btn-dark">Add</Button>
          </Form>
        </CardContent>
      </Card>
    )
  }
}
