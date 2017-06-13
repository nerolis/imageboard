import React from 'react';
import {connect} from 'react-redux';
import {Item, Button, Menu, Container, Header, Divider, Message} from 'semantic-ui-react';
import PostView from './PostView';
// Actions
import { addFlashMessage } from '../../actions/flashMessages';
import {fetchPost, fetchOnePost, createPost, deletePost} from '../../actions/posts';
import {upvoteThread, upvotePost} from '../../actions/upvote';
 class PostList extends React.Component {
  render() {
    const posts = this.props.posts
    const thread = this.props.thread
  return(
    <Item.Group divided>                                
      {posts.filter(post => thread.id == post.reply_id).map(post => <PostView thread={this.props.thread} post={post} key={post._id}  {...this.props} />)}
    </Item.Group>
   )
  }     
}
export default connect(null, 
  {
    fetchPost,
    createPost,
    addFlashMessage,
    upvoteThread,
    upvotePost,
    deletePost,
    fetchOnePost
  }
)(PostList);