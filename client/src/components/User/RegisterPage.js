import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import TextFieldGroup from '../features/TextFieldGroup';
import {Form, Button, Container, Message, Grid} from 'semantic-ui-react';
import Input from 'react-toolbox/lib/input';
import { register } from '../../actions/register';
import { addFlashMessage } from '../../actions/flashMessages';
import validateInput from '../features/signup';
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
     this.props.register(this.state).then(() => {
            this.props.addFlashMessage({
            type: 'Succes',})}).then(
        (res) => this.setState({ redirectToReferrer: true }),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
     )}
    }
    
    onChange = (name, value) => {
    this.setState({...this.state, [name]: value} 
    )}

    render() {
    const { errors, login, password, passwordConfirmation, email, isLoading, invalid} = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/login' } }
   
    const { redirectToReferrer } = this.state
    if (redirectToReferrer) { return (<Redirect to={from}/>) }     
       
    return ( 
    <Container>

 <Form onSubmit={this.onSubmit}>
 <Grid textAlign='center' columns={3}>
    <Grid.Row> 
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
         { errors.form && <Message >{errors.form}</Message> }  
      <Input required error={errors.login} label='Username' type='text' name='login' value={login} onChange={this.onChange.bind(this, 'login')} />
      <Input required error={errors.email} label='E-mail' type='text' name='email' value={email} onChange={this.onChange.bind(this, 'email')} />
      <Input required error={errors.password} label='Password' type='password' name='password' value={password} onChange={this.onChange.bind(this, 'password')} />
      <Input required error={errors.passwordConfirmation} label='Confirm password' type='password' name='passwordConfirmation' 
                                        value={passwordConfirmation} onChange={this.onChange.bind(this, 'passwordConfirmation')} />
      <Button inverted size='large' disabled={isLoading || invalid}>Sign up</Button>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>
 </Form>
     </Container>
    );
  }
}

export default connect(null, { register, addFlashMessage})(RegisterPage);