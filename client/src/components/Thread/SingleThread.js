import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from 'react-router';
// Actions
import { addFlashMessage } from '../../actions/flashMessages';
import {fetchPost, createPost, deletePost} from '../../actions/posts';
import {upvoteThread, upvotePost} from '../../actions/upvote';
// Components
import ThreadView from './ThreadView';
import {Item, Button, Menu, Container, Header, Message, Icon} from 'semantic-ui-react';
import {createThread} from '../../../../../../../../Users/Kircheis/yychan/client/src/actions/actions';

class SingleThread extends React.Component {
    render() {
        const {match, threads, posts, thread, addFlashMessage, createPost, fetchPost, upvotePost, deletePost, isAuthenticated, upvoteThread} = this.props;
      return (
     <Item.Group divided relaxed>
       {threads.filter(thread => match.params.threadId == thread.id).map(thread => <ThreadView     
                posts={posts}
                thread={thread}
                key={thread.id}
                threads={threads}
                createPost={createPost}
                fetchPost={fetchPost}
                upvoteThread={upvoteThread}
                upvotePost={upvotePost}
                addFlashMessage={addFlashMessage}
                isAuthenticated={isAuthenticated}
                deletePost={deletePost}
            />)}
          
 </Item.Group>
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
    createPost,
    addFlashMessage,
    upvoteThread,
    upvotePost,
    deletePost,

} 
)(SingleThread)