import React, { Component } from 'react';
import TextFieldGroup from './features/TextFieldGroup';
import {Form, Button, Container} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { register } from '../actions/register';
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
            this.onChange = this.onChange.bind(this);
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
      this.props.register(this.state).then(() => { /// Здесь должна быть авторизация, но пока что будет просто редирект
      this.setState({ redirectToReferrer: true })
    }).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          })
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
         const { errors } = this.state;
         const { from } = this.props.location.state || { from: { pathname: '/' } }
         const { redirectToReferrer } = this.state
          if (redirectToReferrer) {
                return (
                    <Redirect to={from}/> // https://reacttraining.com/react-router/web/example/auth-workflow
                )
                }
         
            return ( 
                
            <Container>
            <h1>Register</h1>
          <Form onSubmit={this.onSubmit}>
           <span>{this.state.errors.login}</span>
          <TextFieldGroup
           error={errors.login}
           label='Username'
           type='text'
           field='login'
           value={this.state.login}
           onChange={this.onChange}
           
           />
           <span>{this.state.errors.email}</span>
          <TextFieldGroup
           error={errors.email}
           label='E-mail'
           type='text'
           field='email'
           value={this.state.email}
           onChange={this.onChange}
           />
           <span>{this.state.errors.password}</span>
           <TextFieldGroup
           error={errors.password}
           label='Password'
           type='password'
           field='password'
           value={this.state.password}
           onChange={this.onChange}
           />
           <span>{this.state.errors.passwordConfirmation}</span>
                      <TextFieldGroup
           error={errors.passwordConfirmation}
           label="Password Confirmation"
           type='password'
           field='passwordConfirmation'
           value={this.state.passwordConfirmation}
           onChange={this.onChange}
           />
           <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Register
          </button>
          </Form>
            </Container>
    );
  }
}

export default connect(null, {register, addFlashMessage})(RegisterPage);