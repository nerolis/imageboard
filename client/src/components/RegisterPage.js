import React, { Component } from 'react';
import TextFieldGroup from './features/TextFieldGroup';
import {Form, Button, Container} from 'semantic-ui-react';

// import { connect } from 'react-redux';
//import { login } from '';

class RegisterPage extends Component { // В принципе, для анонимной борды это не нужно, но буду юзать как админку. Плюс кое-какой  эксп.
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            // error: {},
            // isLoading: false
        }
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        // if (validate) {
            console.log('submitted')
        this.setState({ username: '', password: '', passwordConfirmation: '', email: ''  }) // reset form
        //}
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    return ( 
            <Container>
            <h1>Register</h1>
          <Form onSubmit={this.onSubmit}>
          
          <TextFieldGroup
           label='Username'
           type='text'
           field='username'
           value={this.state.username}
           onChange={this.onChange}
           />
          <TextFieldGroup
           label='E-mail'
           type='text'
           field='email'
           value={this.state.email}
           onChange={this.onChange}
           />
           <TextFieldGroup
           label='Password'
           type='password'
           field='password'
           value={this.state.password}
           onChange={this.onChange}
           />
                      <TextFieldGroup
           label="Password Confirmation"
           type='password'
           field='passwordConfirmation'
           value={this.state.passwordConfirmation}
           onChange={this.onChange}
           />
             <button className="ui primary button">Login</button>
          </Form>
            </Container>
    );
  }
}

export default RegisterPage;