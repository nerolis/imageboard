import React from 'react';
import { connect } from 'react-redux';
// acitons
import {addFlashMessage} from '../actions/flashMessages';
import {Redirect} from 'react-router';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
        state = {
        redirectToReferrer: false
  }
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
          this.setState({ redirectToReferrer: true })
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
          this.setState({ redirectToReferrer: true })
      }
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/login' } }
        const { redirectToReferrer } = this.state
        
      if (redirectToReferrer) {
       return(
        <Redirect to={from}/>)}
   
       return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}