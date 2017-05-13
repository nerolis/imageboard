import React from 'react';
import axios from 'axios';
import {Form, Button, Textarea} from 'semantic-ui-react';
import Dropzone from 'react-dropzone-component';
class ThreadCreateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      text: '' 
    };
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('Тред создан', e.data)
    axios.post('http://localhost:3000/api/threads', {
    id: 'Date.now()',
    title: 'First Thread on my board by hardcode',
    name: 'Mr. Robot',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'Some url',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  handleNameChange(e) {
    console.log('Изменено', e.target.value)
    this.setState({name: e.target.value})
  }
    render() {
        return(
        <Form onSubmit={::this.handleSubmit}>
           <input
          type='text'
          placeholder='Name'
          value={this.state.name}
          onChange={::this.handleNameChange} >
          </input>
          <Form.Field
            label=''
            control='textarea'
            rows='3'
          />
          <Form.Field>
          </Form.Field>
            <Dropzone
              config={{ postUrl: 'no-url' }}
              eventHandlers={{
                addedfile: (file) => this.setState({ image: file })
              }}
              djsConfig={{ autoProcessQueue: false }}
            />
          <Button>Create Thread</Button>
        </Form>
    );
  }
}

export default ThreadCreateForm;