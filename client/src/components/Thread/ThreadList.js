import React from 'react';
import { connect } from 'react-redux';
// Components
import ThreadView from './ThreadView';
import {Item, Button, Menu, Container, Header, Message, Icon} from 'semantic-ui-react';
import ThreadCreateForm from './ThreadCreateForm';
import { Redirect, Link} from 'react-router';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
// Actions
import { addFlashMessage } from '../../actions/flashMessages';
import {fetchThread, createThread} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';
import {upvoteThread, upvotePost} from '../../actions/upvote';

class ThreadList extends React.Component {
        constructor() {
            super()
            this.state = {
             currentThread: undefined,
        } 
     }

    render() {
    const {threads, posts, createThread, fetchThread, addFlashMessage, createPost, fetchPost, upvotePost} = this.props;
        return(
            <div>
            <Container>
            {(this.state.currentThread)
            ?       ''
            : <ThreadCreateForm 
                    onSubmit={(threads) => this.setState({ threads })}
                    createThread={createThread}
                    fetchThread={fetchThread}
                    addFlashMessage={addFlashMessage}                   
            />}
            {this.renderThreads.bind(this)()}
            </Container>
            </div>
        )}     

    renderThreads() {
            const emptyMessage = (
                <Message icon>
                <Icon name='circle notched' loading />
                     <Message.Content>
                         <Message.Header>Just one second</Message.Header>
                              We are fetching that content for you.
                    </Message.Content>
                </Message>
    )
    const {threads, posts, createThread, fetchThread, addFlashMessage, createPost, fetchPost, upvoteThread, upvotePost} = this.props;
        return (

        <Item.Group divided relaxed>
            {threads.filter(thread => {
            if (!this.state.currentThread) return true;
            else return (thread.id == this.state.currentThread);
            })
            .map(thread => <ThreadView       // Мапаю threadview, вывожу в threads       
                posts={posts}
                createPost={createPost}
                fetchPost={fetchPost}
                fetchThread={fetchThread}
                upvoteThread={upvoteThread}
                upvotePost={upvotePost}
                addFlashMessage={addFlashMessage}
                thread={thread}
                key={thread._id}
                threads={threads}
                select={(currentThread) => this.setState({ currentThread})}
            />)}
            <div>{threads.length === 0 ? emptyMessage : this.renderThreads}</div>
        </Item.Group>

        
        )}
 }

export default connect(null, 
{   createThread,
    fetchPost,
    fetchThread, 
    createPost,
    addFlashMessage,
    upvoteThread,
    upvotePost,
    
}
)(ThreadList);