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
  //   selectThread = () => { .
  // }
  render() {
    const {thread, image, select, text, name, id, comments, user_id, href} = this.props;
      return(
<Item.Group relaxed>
<Message color='black'>
    <Item>   <Item.Header>№{thread.id} {thread.date}</Item.Header>
        <Modal closeIcon size='small' basic trigger={<Item.Image size='small' src={thread.image} alt='no img' />}>
            <Modal.Content image>
               <Item.Image src={thread.image} />
           </Modal.Content>
       </Modal> 
      <Item.Content verticalAlign='middle'>
        <Item.Description>
          <Message size='massive'>
          {thread.text}
          
        <Link to={`/threads/${thread.id}`}>
          <Button floated='right' onClick={() => select(thread.id)} compact basic size='large' icon='reply' />
        </Link>  
         <ThreadReply
            thread={this.props.thread}
            createPost={this.props.createPost}
            fetchPost={this.props.fetchPost}
            addFlashMessage={this.props.addFlashMessage}
               />
          </Message>
        </Item.Description>
        <Item.Extra>
        <Segment color='grey'>
        <Message color='blue'>
         <PostList 
                    thread={this.props.thread}
                    posts={this.props.posts}
                    createPost={this.props.createPost}
                    fetchPost={this.props.fetchPost}
                    addFlashMessage={this.props.addFlashMessage}
               />       
        </Message>
        </Segment>
        </Item.Extra>
      </Item.Content>
    </Item>
       </Message>           
  </Item.Group>

    );
  }
}

export default ThreadView;