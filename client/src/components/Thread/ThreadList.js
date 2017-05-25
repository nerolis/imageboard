import React from 'react';
import { connect } from 'react-redux';
// Components
import ThreadCard from './ThreadCard';
import {Item, Button, Menu, Container, Header} from 'semantic-ui-react';
import ThreadCreateForm from './ThreadCreateForm';
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
          <Container fluid>
           {
          (this.state.currentThread)
            ? <Header size='medium'>Thread: №{this.state.currentThread}</Header>
            : <ThreadCreateForm  onSubmit={(threads) => this.setState({ threads })}
                        createThread={createThread}
                        fetchThread={fetchThread}
                        addFlashMessage={addFlashMessage}                   
              />
        }
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
                    .map(thread =>
 // IDEA: Разделить тредлист с постлистом, чтоб коннект был и там, и там. То, имхо, выходит слишком непонятно.
                    <ThreadCard
                        posts={posts}
                        createPost={createPost}
                        fetchPost={fetchPost}
                        addFlashMessage={addFlashMessage}
                        thread={thread}
                        key={thread._id}
                        select={(currentThread) => this.setState({ currentThread })}
                    />
                    )}
                </Item.Group>
        )}
    }
export default connect(null, 
{
    createThread,
    fetchPost,
    fetchThread, 
    createPost,
    addFlashMessage,

}
)(ThreadList);