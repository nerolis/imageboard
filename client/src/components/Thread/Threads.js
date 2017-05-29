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
import {Image, Item, Container, Button, Header, MessageList} from 'semantic-ui-react';
// Components
import ThreadList from './ThreadList';
import PostList from '../Posts/PostList';
import ThreadCreateForm from './ThreadCreateForm';
import Dev from './Dev';
  class Threads extends React.Component {
         componentWillMount() {
          this.props.fetchThread()
          this.props.fetchPost()     
  }

    render() {
      return(
      <div className=''>
          <ThreadList threads={this.props.threads} posts={this.props.posts}/>    
          <Dev threads={this.props.threads} messages={initialState.messages} replied_messages={initialState.replied_messages} />
      </div>

    )
  }
}

let initialState = {
  messages: [
    {
      id: 0,
      timestamp: 1464092864076,
      text: 'holas'
    },
    {
      id: 1,
      timestamp: 1464125678372,
      text: 'other comment'
    }
  ],
  replied_messages: [
    {
      id: 0,
      message_replied_id: 0,
      timestamp: 1464092864076,
      text: 'eyyy'
    },
    {
      id: 1,
      message_replied_id: 0,
      timestamp: 1464125851108,
      text: 'a reply'
    },
    {
      id: 2,
      message_replied_id: 1,
      timestamp: 1464125909151,
      text: 'other comment reply'
    }
  ]
};

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