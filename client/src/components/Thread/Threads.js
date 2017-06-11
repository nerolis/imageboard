// Modules
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
// Actions
import {fetchThread} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
import { addFlashMessage } from '../../actions/flashMessages';
// Styles
import mainscss from '../../styles/main.scss';
import {Image, Item, Container, Button, Header, MessageList, Advertisement, Icon} from 'semantic-ui-react';
// Components
import ThreadList from './ThreadList';
import PostList from '../Posts/PostList';
import ThreadCreateForm from './ThreadCreateForm';
  class Threads extends React.Component {
         componentWillMount() {
          this.props.fetchThread()
          this.props.fetchPost()     
  }


    render() {
      const { isAuthenticated } = this.props.auth;
      return(
      <div >
          <ThreadList threads={this.props.threads} posts={this.props.posts} isAuthenticated={isAuthenticated} />  
          <div className="ui vertical footer segment form-page">
           <div className="ui container">
          </div>
          </div>
      
      </div>

    )
  }
}
function mapStateToProps(state) {
  return {
   threads: state.threads,
   posts: state.posts,
   auth: state.auth
  }
}

export default connect(
  mapStateToProps, 
{
     fetchPost,
     fetchThread,
     addFlashMessage,
} 
)(Threads)