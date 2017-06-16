import React from 'react';
import {connect} from 'react-redux';
// actions
import {updateSettings} from '../../actions/user';
// components
import {Form, Container, Message, Grid} from 'semantic-ui-react';
import {Layout, NavDrawer, Panel, Sidebar, Input, Button} from 'react-toolbox';

class ProfileSettings extends React.Component {
    constructor() {
      super()
      this.state = {
          userName: '',
          userImage: ''}
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
    e.preventDefault();
    this.props.updateSettings(this.props.auth.login.login).then(() => {
    console.log('Submited')
    })
    }
    onChange = (name, value) => {
    this.setState({...this.state, [name]: value} 
    )}
    render() {
    const {userName, userImage} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Input label='Default userName: ' type='text' name='userName' value={userName} onChange={this.onChange.bind(this, 'userName')} />
                <Input label='Default userImage: ' type='text' name='userImage' value={userImage} onChange={this.onChange.bind(this, 'userImage')} />
                <Button onClick={this.onSubmit}>Submit settings</Button>
            </Form>
  );
 }
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, {updateSettings})(ProfileSettings)