import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from './features/TextFieldGroup';
import {Form, Button, Container, Message} from 'semantic-ui-react';
import { loginAuth} from '../actions/login';
import { Link, Route, browserHistory } from 'react-router-dom';
import {Redirect} from 'react-router';
import validateInput from './features/signin';
import { addFlashMessage } from '../actions/flashMessages';
import Input from 'react-toolbox/lib/input';

class LoginPage extends Component { // В принципе, для анонимной борды это не нужно, но буду юзать как админку. Плюс кое-какой  эксп.
    constructor() {
        super()
        this.state = {
            login: '',
            password: '',
            errors: {},
            isLoading: false,
            invalid: false,
            redirectToReferrer: false
             
        }
            this.onSubmit = this.onSubmit.bind(this);
            // this.onChange = this.onChange.bind(this);
    }
    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
        this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
          if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.loginAuth(this.state).then(() => {
            this.props.addFlashMessage({
              type: 'Succes', 
              text: 'Redirect...',
            })
         }).then(
        (res) => this.setState({ redirectToReferrer: true }),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
        )
      }
    }
    onChange = (name, value) => {
          this.setState({...this.state, [name]: value} )
        }

  render() {
     const { errors, login, password, isLoading, invalid} = this.state;
     const { from } = this.props.location.state || { from: { pathname: '/' } }
     const { redirectToReferrer } = this.state
          if (redirectToReferrer) {
      return (<Redirect to={from}/> // https://reacttraining.com/react-router/web/example/auth-workflow
      )
    }
    return ( 
       <Form onSubmit={this.onSubmit}>
      { errors.form && <Message color='red' className="alert">{errors.form}</Message> }  
      <section>
      <Input error={errors.login} label='Username' type='text' name='login' value={login} onChange={this.onChange.bind(this, 'login')} />
      <Input error={errors.password} label='Password' type='password' name='password' value={password} onChange={this.onChange.bind(this, 'password')} />
       <Button color='blue' disabled={isLoading || invalid}>Sign up</Button>
      </section>
     </Form>
    );
  }
}


export default connect(null, {loginAuth, addFlashMessage})(LoginPage);