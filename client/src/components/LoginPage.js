import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from './features/TextFieldGroup';
import {Form, Button, Container} from 'semantic-ui-react';
import { loginAuth} from '../actions/login';
import { Link, Route, browserHistory } from 'react-router-dom';
import {Redirect} from 'react-router';

// import { connect } from 'react-redux';
//import { login } from '';

class LoginPage extends Component { // В принципе, для анонимной борды это не нужно, но буду юзать как админку. Плюс кое-какой  эксп.
    constructor() {
        super()
        this.state = {
            login: '',
            password: '',
             error: {},
             isLoading: false,
             redirectToReferrer: false
             
        }
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        const { login, password} = this.state;
        this.props.loginAuth({login, password})
        this.setState({ redirectToReferrer: true }) // простейший редирект при логине. TODO: через редакс переделать + jwt токен
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
     const { from } = this.props.location.state || { from: { pathname: '/' } }
     const { redirectToReferrer } = this.state
          if (redirectToReferrer) {
      return (
        <Redirect to={from}/> // https://reacttraining.com/react-router/web/example/auth-workflow
      )
    }
    return ( 
            <Container>
           <h1>Login</h1>
          <Form onSubmit={this.onSubmit}>
          
          <TextFieldGroup
           label='Username'
           type='text'
           field='login'
           value={this.state.login}
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


export default connect(null, {loginAuth})(LoginPage);