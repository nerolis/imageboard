// Modules
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// Actions
import {fetchThread} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
import { addFlashMessage } from '../../actions/flashMessages';
import { selectThread, fetchPostsIfNeeded, invalidateThread } from '../../actions/fetchThreads';
// Styles
import {Image, Item, Container, Button, Header} from 'semantic-ui-react';
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
      return(
      <div className=''>
          <ThreadList threads={this.props.threads} posts={this.props.posts}/>    
      </div>
    )
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
{
     fetchPost,
     fetchThread,
     addFlashMessage,
} 
)(Threads)