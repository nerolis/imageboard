import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import TextFieldGroup from '../features/TextFieldGroup';
import {Form, Button, Container, Message, Grid, Segment, Label} from 'semantic-ui-react';
import { loginAuth} from '../../actions/login';
import { Link, Route, browserHistory } from 'react-router-dom';
import validateInput from '../features/signin';
import { addFlashMessage } from '../../actions/flashMessages';
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
              type: 'Succes'})}).then(
        (res) => this.setState({ redirectToReferrer: true }),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
     )}
    }
    onChange = (name, value) => {
   this.setState({...this.state, [name]: value} 
   )}
  render() {
     const { errors, login, password, isLoading, invalid} = this.state;
     const { from } = this.props.location.state || { from: { pathname: '/' } }
     const { redirectToReferrer } = this.state
          if (redirectToReferrer) { return (<Redirect to={from}/>)}  // https://reacttraining.com/react-router/web/example/auth-workflow)
  return ( 
 <Form onSubmit={this.onSubmit}>
 <Grid textAlign='center' columns={3}>
    <Grid.Row> 
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
       { errors.form && <Message as='h1' negative>{errors.form}</Message> }  
    <Input error={errors.login} label='Username' type='text' name='login' value={login} onChange={this.onChange.bind(this, 'login')} /> 
    <Input error={errors.password} label='Password'  type='password' name='password' value={password} onChange={this.onChange.bind(this, 'password')} />
      <Button size='large' inverted disabled={isLoading || invalid}>Sign in</Button>
        <Message size='small'>
        <p>Don't have an account yet? <Link to='/register'>Register</Link></p>
        <p>Lost password or username? <Link to='/restore'>Restore</Link></p>
        </Message>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>
 </Form>
    );
  }
}


export default connect(null, {loginAuth, addFlashMessage})(LoginPage);