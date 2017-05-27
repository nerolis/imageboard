import React, { Component } from 'react';
import TextFieldGroup from './features/TextFieldGroup';
import {Form, Button, Container} from 'semantic-ui-react';

// import { connect } from 'react-redux';
//import { login } from '';

class LoginPage extends Component { // В принципе, для анонимной борды это не нужно, но буду юзать как админку. Плюс кое-какой  эксп.
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            // error: {},
            // isLoading: false
        }
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();

        // if (validate) {
        console.log('submitted', 'user:', this.state.username, 'pass:', this.state.password);
        this.setState({ username: '', password: '' }) // reset form
        //}
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    return ( 
            <Container>
            
          <Form onSubmit={this.onSubmit}>
          
          <TextFieldGroup
           label='Name'
           type='text'
           field='username'
           value={this.state.username}
           onChange={this.onChange}
           />
          
           <TextFieldGroup
           label='Password'
           type='password'
           field='password'
           value={this.state.password}
           onChange={this.onChange}
           />
             <button className="ui primary button">Login</button>
          </Form>
            </Container>
    );
  }
}

export default LoginPage;