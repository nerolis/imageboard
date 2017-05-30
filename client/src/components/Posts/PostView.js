import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header} from 'semantic-ui-react';
import ThreadReply from '../Thread/ThreadReply';
// Styles
// import postForm from '.../styles/postForm.scss';
class PostView extends React.Component {
  render() {
    const {thread, image, select, text, name, id, comments, user_id, post} = this.props;
  return(
      <Item>   
      <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={post.image} alt='no img' />}>
           <Modal.Content image>
             <Item.Image src={post.image} />
           </Modal.Content>
      </Modal>
        <Item.Content as='h5'>
              №{post.id}
              <Item.Header as='' className='extra content'>
              <p>{post.name}</p>
              {post.date}
              </Item.Header>
              <Item.Description  className='extra content'>
                <Message color='blue'>
                {post.text}
                </Message>
                Answers: <a>>{Date.now()}</a> 
              </Item.Description>      
                 <ThreadReply
                    thread={this.props.thread}
                    createPost={this.props.createPost}
                    fetchPost={this.props.fetchPost}
                    addFlashMessage={this.props.addFlashMessage} />       
        </Item.Content>
      </Item>
     );
  }
}
export default PostView;