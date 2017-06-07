import React from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header, Dimmer, Segment} from 'semantic-ui-react';
import ThreadReply from './ThreadReply';
import PostList from '../Posts/PostList';
import Threads from './Threads';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
// Styles
// import postForm from '.../styles/postForm.scss';

class ThreadView extends React.Component {
  render() {
    const {thread, image, select, text, name, id, comments, user_id, href, upvoteThread} = this.props;
      return(   

    <Item>  
      <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={thread.image} alt='no img' />}>
      <Modal.Content image>
        <Item.Image src={thread.image} />
      </Modal.Content>
    </Modal>
    <Item.Content as='h7'>
        <Message color='black' size='big' > 
            <Item.Header as='h1'><p>{thread.name} <a><br></br>№{thread.id}</a> <br></br>{thread.date}</p></Item.Header>
        <Message color='black'>
        <Message color='brown'>
        {thread.text} 
       </Message>
            <ThreadReply
            thread={this.props.thread}
            createPost={this.props.createPost}
            fetchPost={this.props.fetchPost}
            addFlashMessage={this.props.addFlashMessage} />  
          <Link to={`/threads/${thread.id}`}>
             <Button floated='right' color='black' onClick={() => select(thread.id)} compact>Open</Button>
          </Link> 
           <Button floated='right' color='black' compact onClick={() => upvoteThread(thread.id)}>Likes: {thread.like}</Button>
        </Message>
        </Message>
        <Message color='brown'>
        <PostList 
          thread={this.props.thread}
          posts={this.props.posts}
          upvotePost={this.props.upvotePost}
          createPost={this.props.createPost}
          fetchPost={this.props.fetchPost}
          addFlashMessage={this.props.addFlashMessage}
        />       
      </Message>
      </Item.Content>
      </Item>   



    );
  }
}

export default ThreadView;