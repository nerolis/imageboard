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
import InfiniteScroll from 'react-infinite-scroll-component';

class ThreadList extends React.Component {
  constructor() {
    super()
    this.state = {isLoading: true, threads: []}
   }
  
  showThreadCreateForm() {
  const {createThread, addFlashMessage, fetchThread} = this.props;
    return (
    <ThreadCreateForm
      onSubmit={(threads) => this.setState({ threads })}
      createThread={createThread}
      fetchThread={fetchThread}
      addFlashMessage={addFlashMessage}/>
  )}
  
  loadMoreThreads() {
  let moreThreads = []
  let count = this.props.threads.length
    for (let i = 0; i < 10; i++) {
      moreThreads.push(
        <Message>InfiniteScroll Test</Message>
      );
    }
     setTimeout(() => {
      this.setState({threads: this.state.threads.concat(moreThreads)});
    }, 500);
  }
  

  render() {
  const emptyMessage = (<Message><Icon size='big' name='circle notched' loading />Loading....</Message>)
  const {threads, posts, addFlashMessage, createPost, fetchPost, upvotePost,
        deleteThread, deletePost, isAuthenticated, upvoteThread, fetchOnePost} = this.props;
   
    return(
    <Container>
    {threads.length === 0 ? emptyMessage: ''}
    {this.showThreadCreateForm()}
    <Item.Group divided>
    {threads.map(thread => <ThreadView key={thread.id} thread={thread} {...this.props}/>)}
  <InfiniteScroll
    next={this.loadMoreThreads.bind(this)}
    hasMore={this.state.isLoading}
    loader={<Icon size='big' name='circle notched' loading />}
    >
    {this.state.threads}
  </InfiniteScroll>
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