import React, { Component } from 'react';
import {connect} from 'react-redux';
// Components
import {Feed, Icon, List, Content, Header, Container, Button, Message} from 'semantic-ui-react';
import HomeList from './HomeList';
// actions
import {fetchThread} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
import { addFlashMessage } from '../../actions/flashMessages';

class Home extends Component {
           componentWillMount() {
              this.props.fetchThread()   
              this.props.fetchPost()  
  }
  render() {

    return (
        <HomeList threads={this.props.threads} posts={this.props.posts}/>
    );
  }
}

function mapStateToProps(state) {
  return {
   threads: state.threads,
   posts: state.posts,
  }
}

export default connect(
  mapStateToProps, 
{    fetchPost,
     fetchThread,
} 
)(Home)