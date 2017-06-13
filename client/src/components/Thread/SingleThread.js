import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';
// Actions
import { addFlashMessage } from '../../actions/flashMessages';
import {fetchPost, createPost, deletePost} from '../../actions/posts';
import {deleteThread} from '../../actions/actions';
import {upvoteThread, upvotePost} from '../../actions/upvote';
// Components
import ThreadView from './ThreadView';
import {Item, Button, Menu, Container, Header, Message, Icon} from 'semantic-ui-react';


class SingleThread extends React.Component {
    render() {
        const {match, threads, posts, thread, addFlashMessage, createPost, fetchPost, upvotePost, deletePost, upvoteThread, deleteThread} = this.props;
        const { isAuthenticated } = this.props.auth;
      return (
     <Item.Group divided relaxed>
       {threads.filter(thread => match.params.threadId == thread.id)
        .map(thread =>
           <ThreadView     
              posts={posts}
              thread={thread}
              key={thread.id}
              isAuthenticated={isAuthenticated}
              {...this.props}
            />)}
            <Header>
            <Link to={`/b`}>
            <Button  icon='arrow left' basic inverted content='Back'/>
           </Link>
           <Button floated='right' content='Update' inverted basic onClick={this.props.fetchPost} />
           </Header>
     </Item.Group>
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
    createPost,
    addFlashMessage,
    upvoteThread,
    upvotePost,
    deletePost,
    deleteThread,

} 
)(SingleThread)