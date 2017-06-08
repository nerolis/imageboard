import React, { Component } from 'react';
import {connect} from 'react-redux';
// Components
import {Feed, Icon, List, Content, Header, Container, Button, Message} from 'semantic-ui-react';
import HomeList from './HomeList';
// actions
import {fetchThread} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
import { addFlashMessage } from '../../actions/flashMessages';
import Dev from '../Thread/Dev';

class Home extends Component {
           componentWillMount() {
            this.props.fetchThread()   
            this.props.fetchPost()  
  }
  render() {

    return (
        <div>
        <HomeList threads={this.props.threads} posts={this.props.posts}/>
        <Dev />
        </div>
        
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