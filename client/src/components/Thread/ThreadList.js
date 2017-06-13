import React from 'react';
import { connect } from 'react-redux';
// Components
import ThreadView from './ThreadView';
import {Item, Button, Menu, Container, Header, Message, Icon, Segment} from 'semantic-ui-react';
import ThreadCreateForm from './ThreadCreateForm';
import { Redirect, Link} from 'react-router';
// Actions
import { addFlashMessage } from '../../actions/flashMessages';
import {fetchThread, createThread, deleteThread} from '../../actions/actions';
import {fetchPost, createPost, deletePost, fetchOnePost} from '../../actions/posts';
import {upvoteThread, upvotePost} from '../../actions/upvote';
class ThreadList extends React.Component {
    render() {
    const {threads, posts, createThread, fetchThread, addFlashMessage, createPost, fetchPost,
          upvotePost, deleteThread, deletePost, isAuthenticated, upvoteThread, fetchOnePost} = this.props;
    const emptyMessage = (
         <Message icon>
         <Icon name='circle notched' loading />
           <Message.Content>
              We are fetching that content for you.
           </Message.Content>
         </Message>
    )
        return(
        <Container>
         <ThreadCreateForm 
            onSubmit={(threads) => this.setState({ threads })}
            createThread={createThread}
            fetchThread={fetchThread}
            addFlashMessage={addFlashMessage}/>
         {threads.length === 0 ? emptyMessage : this.renderThreads}
        <Item.Group divided>
          {threads.map(thread => <ThreadView key={thread.id} thread={thread} {...this.props}/>)}
       </Item.Group>
     </Container>
  )   
 }
}
export default connect(null, 
{   createThread,
    fetchPost,
    fetchThread, 
    createPost,
    addFlashMessage,
    upvoteThread,
    upvotePost,
    deleteThread,
    deletePost,
    fetchOnePost,
    
}
)(ThreadList);