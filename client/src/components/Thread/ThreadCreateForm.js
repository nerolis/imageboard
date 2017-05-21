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
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     }

  onSubmit(e) { 
   e.preventDefault()
    // Дефолтное изображение, if поле с изображением пусто. Тупо, но работает. Временно сойдет.
    if (this.state.image === '') {
    this.state.image = 'http://static.zerochan.net/Chen.full.1194832.jpg';
    }
    // Post!
    const { name, text, image} = this.state; // чтоб не перечислять через this.state
    this.props.createThread({name, text, image})
        .then(() => this.props.fetchThread())
        // Вот это - для очищения формы. Вроде норм.
        this.setState({
          name: 'Chen',
          text: '',
          image: '',
        });
     }
 
  onChange(e) {
     this.setState({ [e.target.name]: e.target.value });

  }
    render() {
      return(
        <Form onSubmit={this.onSubmit}>
              <input
                  name='name'
                  placeholder='name'
                  value={this.state.name}
                  onChange={this.onChange} >
              </input>
              <Form.Field
                  name='text'
                  placeholder='Message'
                  control='textarea'
                  rows='3'
                  value={this.state.text}
                  onChange={this.onChange}/>
              <Form.Field>
              <input
                  name='image'
                  placeholder='URL:'
                  value={this.state.image}
                  onChange={this.onChange}>
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