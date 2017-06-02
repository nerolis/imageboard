import React, { Component } from 'react';
import TextFieldGroup from './features/TextFieldGroup';
import {Form, Button, Container, Message} from 'semantic-ui-react';
import Input from 'react-toolbox/lib/input';
import { connect } from 'react-redux';
import { register, isUserExists} from '../actions/register';
import { addFlashMessage } from '../actions/flashMessages';
import validateInput from './features/signup';
import {Redirect} from 'react-router';

class RegisterPage extends Component { // В принципе, для анонимной борды это не нужно, но буду юзать как админку. Плюс кое-какой  эксп.
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false,
            redirectToReferrer: false
        }
            this.onSubmit = this.onSubmit.bind(this);
            // this.onChange = this.onChange.bind(this);
            this.checkUserExists = this.checkUserExists.bind(this);
    }
    
      isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  } 
    checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

    onSubmit(e) {
       e.preventDefault();
     if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.register(this.state).then(() => {
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
          this.setState({...this.state, [name]: value} )}

  render() {
        const { errors, login, password, passwordConfirmation, email, isLoading } = this.state;
         const { from } = this.props.location.state || { from: { pathname: '/' } }
         const { redirectToReferrer } = this.state
          if (redirectToReferrer) { return (<Redirect to={from}/>) }
            return ( 
            <Container>
            <h1>Register</h1>
          <Form onSubmit={this.onSubmit}>
             { errors.form && <Message color='red' className="alert">{errors.form}</Message> }  
            <section>
      <Input required error={errors.login} label='Username' type='text' name='login' value={login} onChange={this.onChange.bind(this, 'login')} />
      <Input required error={errors.email} label='E-mail' type='text' name='email' value={email} onChange={this.onChange.bind(this, 'email')} />
      <Input required error={errors.password} label='Password' type='password' name='password' value={password} onChange={this.onChange.bind(this, 'password')} />
      <Input required error={errors.passwordConfirmation} label='Confirm password' type='password' name='passwordConfirmation'
             value={passwordConfirmation} onChange={this.onChange.bind(this, 'passwordConfirmation')} />
      
       <Button color='blue' disabled={this.state.isLoading || this.state.invalid}>Sign up</Button>
      
      </section>
          </Form>
            </Container>
    );
  }
}

export default connect(null, {isUserExists, register, addFlashMessage})(RegisterPage);