import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const styles = {
  card: {
    fontFamily: 'Lora, serif',
    border: 'solid black',
    width: '50%',
    marginTop: '4rem'
  },
  input: {
    border: 'solid black'
  }
}

export default class AddClothingArticle extends Component {
  render() {
    return (
      <Card style={styles.card} className="container-fluid">
        <CardContent>
          <Form>
            <h1>Add a Clothing Article</h1>
            <FormGroup className="mt-4">
              <Label for="exampleEmail">Name</Label>
              <Input
                style={styles.input}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Brand</Label>
              <Input
                style={styles.input}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Type</Label>
              <Input
                style={styles.input}
                type="select"
                name="select"
                id="exampleSelect">
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
              <Label for="exampleSelect">Color</Label>
              <Input
                style={styles.input}
                type="select"
                name="select"
                id="exampleSelect">
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
            <Button className="btn btn-dark">Add</Button>
          </Form>
        </CardContent>
      </Card>
    )
  }
}
