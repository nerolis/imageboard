import React from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header, Dimmer, Segment, Label, Dropdown, Divider} from 'semantic-ui-react';
import ThreadReply from './ThreadReply';
import PostList from '../Posts/PostList';
// Styles
// import postForm from '.../styles/postForm.scss';

class ThreadView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inactive: false,
    }
  }
  
  render() {
    const {thread, image, select, text, name, id, comments, user_id, href, upvoteThread, fetchThread, inactive, deleteThread, isAuthenticated, match} = this.props;

   return(   
    <Item> 
          <Modal closeIcon size='small' basic trigger={<Item.Image size='small' src={thread.image}/>}>
           <Modal.Content image>
            <Item.Image src={thread.image} />
           </Modal.Content>
         </Modal>
    <Item.Content as='h1'>
      <Item.Content>
        <Item.Meta>
                      <ThreadReply
                        thread={this.props.thread}
                        createPost={this.props.createPost}
                        fetchPost={this.props.fetchPost}
                        addFlashMessage={this.props.addFlashMessage} /> 
          <Link to={`/b/${thread.id}`}>
            <Button content='Open' icon='chevron down' size='small' compact floated='right' color='black' />
          </Link>
        <Message color='brown'>
        <Item.Header as='h1'>{thread.name}<br></br><a>№{thread.id}</a><br></br>{thread.date}
         <Message size='large' color='black'>
         <Item.Description>
         {thread.text} 
        </Item.Description>
        </Message>
        </Item.Header></Message>
        </Item.Meta>
      </Item.Content>
              <Button
              disabled={this.state.inactive}
              onClick={() => upvoteThread(thread.id).then(this.setState({inactive: true}))}
              size='tiny'
              compact
              color='black'
              content={thread.like}
              icon='like' />
              {isAuthenticated ? <Button   color='black' size='tiny' compact floated='left' compact onClick={() => deleteThread(thread.id)}>Delete</Button> : ''}
        <Message color='brown'>
        <PostList 
          thread={this.props.thread}
          posts={this.props.posts}
          upvotePost={this.props.upvotePost}
          createPost={this.props.createPost}
          fetchPost={this.props.fetchPost}
          addFlashMessage={this.props.addFlashMessage}
          deletePost={this.props.deletePost}
          isAuthenticated={isAuthenticated}
        />       
      </Message>
</Item.Content>

      </Item>   



    );
  }
}

export default ThreadView;