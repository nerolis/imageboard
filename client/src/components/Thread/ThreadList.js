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
import {fetchPost, createPost, deletePost} from '../../actions/posts';
import {upvoteThread, upvotePost} from '../../actions/upvote';
class ThreadList extends React.Component {
    render() {
    const {threads, posts, createThread, fetchThread, addFlashMessage, createPost, fetchPost, upvotePost, deleteThread, deletePost, isAuthenticated, upvoteThread} = this.props;
    const emptyMessage = (
                <Message icon>
                <Icon name='circle notched' loading />
                     <Message.Content>
                      We are fetching that content for you.
                    </Message.Content>
                </Message>
    )
        return(
          <Item.Group divided relaxed>
                    <ThreadCreateForm 
                    onSubmit={(threads) => this.setState({ threads })}
                    createThread={createThread}
                    fetchThread={fetchThread}
                    addFlashMessage={addFlashMessage}                   
            />
            {threads.map(thread => <ThreadView       // Мапаю threadview, вывожу в threads       
                posts={posts}
                deleteThread={deleteThread}
                createPost={createPost}
                fetchPost={fetchPost}
                fetchThread={fetchThread}
                upvoteThread={upvoteThread}
                upvotePost={upvotePost}
                addFlashMessage={addFlashMessage}
                thread={thread}
                key={thread._id}
                threads={threads}
                isAuthenticated={isAuthenticated}
                deletePost={deletePost}/>)}
         <div>{threads.length === 0 ? emptyMessage : this.renderThreads}</div>
        </Item.Group>
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
    
}
)(ThreadList);