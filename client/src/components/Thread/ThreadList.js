import React from 'react';
import { connect } from 'react-redux';
// Components
import ThreadView from './ThreadView';
import {Item, Button, Menu, Container, Header, Message} from 'semantic-ui-react';
import ThreadCreateForm from './ThreadCreateForm';
import { Redirect, Link} from 'react-router';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
// Actions
import { addFlashMessage } from '../../actions/flashMessages';
import {fetchThread, createThread} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';

class ThreadList extends React.Component {
        constructor() {
            super()
            this.state = {
             currentThread: undefined,
        } 
     }

    render() {
        
    const {threads, posts, createThread, fetchThread, addFlashMessage, createPost, fetchPost} = this.props;
        return(
            <div>
            <Container>
            {(this.state.currentThread)
            ? <Message as='h1' size='large' color='black'>Thread №{this.state.currentThread}</Message>
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
    const {threads, posts, createThread, fetchThread, addFlashMessage, createPost, fetchPost} = this.props;
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
                addFlashMessage={addFlashMessage}
                thread={thread}
                key={thread._id}
                select={(currentThread) => this.setState({ currentThread })}
            />)}

            
        </Item.Group>

        
        )}
 }

export default connect(null, 
{   createThread,
    fetchPost,
    fetchThread, 
    createPost,
    addFlashMessage,
}
)(ThreadList);