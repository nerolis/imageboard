import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createThread, fetchThread } from '../../actions/actions';
import {Form, Button, Textarea} from 'semantic-ui-react';
import Dropzone from 'react-dropzone-component';
  
  class ThreadCreateForm extends React.Component {
    constructor() {
      super()
        this.state = {
            name: 'Chen',
            text: '', 
            image: '',
            errors: {},
        };
      }
    
      
  // Как сабскрайб сделать напрямую - не понял, поэтому просто после создания треда, будет происходить новый фетч. TODO: fix it.
  handleSubmit(e) { 
    e.preventDefault()
    // Тестовая валидация
        let errors = {};
    if (this.state.name === ''){
      alert(`not valid - {this.state.name}`)}
      if (this.state.text === ''){
        alert(`not valid - {this.state.text}`)}
          if (this.state.image === ''){
                this.state.image = 'http://static.zerochan.net/Chen.full.1194832.jpg'
            }
    const isValid = Object.keys(errors).length === 0
      if (isValid) {
    // Post!
    const { name, text, image} = this.state;
    this.props.createThread({name, text, image})
        .then(() => this.props.fetchThread())
        // Вот это - для очищения формы. Не знаю, вроде норм.
        this.setState({
          name: 'Chen',
          text: '',
          image: '',
        });
     }
  }
  //TODO: Объединить хендлы в один с помощью этой функции. Правда, я забыл как. Но где-то видел.
        handleChange = (e) => {
        }
        handleNameChange(e) {
          this.setState({name: e.target.value})
        }
        handleTextChange(e) {
          this.setState({text: e.target.value})
        }
        handleImageChange(e) {
          this.setState({image: e.target.value})
        }
        // почистить всю эт хауту
    render() {
      return(
        <Form onSubmit={::this.handleSubmit}>
              <input
              
                  placeholder='Name'
                  value={this.state.name}
                  onChange={::this.handleNameChange} >
              </input>
              <Form.Field
                  placeholder='Message'
                  control='textarea'
                  rows='3'
                  value={this.state.text}
                  onChange={::this.handleTextChange}/>
              <Form.Field>
              <input
                  placeholder='URL:'
                  value={this.state.image}
                  onChange={::this.handleImageChange}>
              </input>
              <Form.Field>
                  <Dropzone
                  config={{ postUrl: 'no-url' }}
                  eventHandlers={{
                  addedfile: (file) => this.setState({ image: file })
                  }}
                  djsConfig={{ autoProcessQueue: false }}/>
              </Form.Field>
                <div className="field"> 
                    {this.state.image !== '' && <img src={this.state.image} className="ui small bordered image"/>}
                </div>
              </Form.Field>
                    <Button className="ui primary button">Create thread</Button>
         </Form>
         
    );
  }
}
export default connect(null, {createThread, fetchThread})(ThreadCreateForm);