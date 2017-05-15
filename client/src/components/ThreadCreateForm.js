import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createThread } from './actions';
import {Form, Button, Textarea} from 'semantic-ui-react';

class ThreadCreateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      text: '', 
      image: '',
     };
   }
  handleSubmit(e) { 
     e.preventDefault();
    const { name, text, image} = this.state;
    this.props.createThread({name, text, image})
    .then(() => { this.setState({ done: true })}
    )};

  //todo объединить хандлы в один
  handleNameChange(e) {
    console.log('Изменено name', e.target.value)
    this.setState({name: e.target.value})
  }
  handleTextChange(e) {
    console.log('Изменено text', e.target.value)
    this.setState({text: e.target.value})
  }
   handleImageChange(e) {
    console.log('Изменено text', e.target.value)
    this.setState({image: e.target.value})
  }
    render() {
        return(
        <Form onSubmit={::this.handleSubmit}>
           <input
          placeholder='Name'
          value={this.state.name}
          onChange={::this.handleNameChange} >
          </input>
          <Form.Field
          placeholder='text'
            control='textarea'
            rows='3'
          value={this.state.text}
          onChange={::this.handleTextChange}
            />
          <Form.Field>
          <input
          placeholder='image'
          value={this.state.image}
          onChange={::this.handleImageChange}
          >
          </input>
           <div className="field">
          {this.state.image !== '' && <img src={this.state.image} className="ui small bordered image"/>}
          </div>
          </Form.Field>
          <Button>Create Thread</Button>
        </Form>
    );
  }
}

export default connect(null, {createThread})(ThreadCreateForm);