import React from 'react';
import { connect } from 'react-redux';
// Components
import ThreadView from './ThreadView';
import {Item, Button, Menu, Container, Header, Message, Icon, Segment} from 'semantic-ui-react';
import ThreadCreateForm from './ThreadCreateForm';
// Actions
import { addFlashMessage } from '../../actions/flashMessages';
import {fetchThread, createThread, deleteThread, FetchMoreThreads} from '../../actions/actions';
import {fetchPost, createPost, deletePost} from '../../actions/posts';
import {upvoteThread, upvotePost} from '../../actions/upvote';
class ThreadList extends React.Component {
  showThreadCreateForm() {
  const {createThread, addFlashMessage, fetchThread} = this.props;
    return (
    <ThreadCreateForm
      onSubmit={(threads) => this.setState({ threads })}
      createThread={createThread}
      fetchThread={fetchThread}
      addFlashMessage={addFlashMessage}/>
  )}
  
  render() {
  const emptyMessage = (<Message><Icon size='big' name='circle notched' loading />Loading....</Message>)
  const {threads, posts, addFlashMessage, createPost, fetchPost, upvotePost,
        deleteThread, deletePost, isAuthenticated, upvoteThread, FetchMoreThreads} = this.props;
  
    // todo: do fetch with pagination, not dummy slice on action.
    return(
    <Container>
    {threads.length === 0 ? emptyMessage: ''}
    {this.showThreadCreateForm()}
     <Item.Group divided>
    {threads.map(thread => <ThreadView key={thread.id} thread={thread} {...this.props}/>)}
     </Item.Group>
       <Button inverted onClick={() => FetchMoreThreads()}>Load more</Button>
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
    FetchMoreThreads,
    
}
)(ThreadList);