import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

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

export default function AddClothingArticle(props) {
  return (
    <Card style={styles.card} className="container-fluid">
      <CardContent>
        <Form onSubmit={props.handleSubmit}>
          <h1>Add a Clothing Article</h1>
          <FormGroup className="mt-4">
            <Label for="exampleName">Name</Label>
            <Input
              style={styles.input}
              type="text"
              name="name"
              id="exampleEmail"
              placeholder="Input Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleBrand">Brand</Label>
            <Input
              style={styles.input}
              type="text"
              name="brand"
              id="exampleEmail"
              placeholder="Input Brand"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleType">Type</Label>
            <Input
              style={styles.input}
              type="select"
              name="type"
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
            <Label for="exampleColor">Color</Label>
            <Input
              style={styles.input}
              type="select"
              name="color"
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
          <FormGroup>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted" />
          </FormGroup>
          <Button className="btn btn-dark">Add</Button>
        </Form>
      </CardContent>
    </Card>
  )
}
