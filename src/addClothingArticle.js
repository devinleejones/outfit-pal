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
      image: form.get('image')
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
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleEmail"
                placeholder="Input Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleBrand">Brand</Label>
              <Input
                type="text"
                name="brand"
                id="exampleEmail"
                placeholder="Input Brand"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleType">Type</Label>
              <Input type="select" name="type" id="exampleSelect">
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
              <Label for="exampleColor">Color</Label>
              <Input type="select" name="color" id="exampleSelect">
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
              <Label for="exampleImage">Image URL</Label>
              <Input
                type="text"
                name="image"
                id="exampleImage"
                placeholder="Input Image URL"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleWeather">Weather Type</Label>
              <Input
                type="text"
                name="weather"
                id="exampleWeather"
                placeholder="Input Weather Type"
              />
            </FormGroup>
            <Button className="btn btn-dark">Add</Button>
          </Form>
        </CardContent>
      </Card>
    )
  }
}
