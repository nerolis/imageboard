import React from 'react';
// Components
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header} from 'semantic-ui-react';
import ThreadReply from './ThreadReply';
import PostList from '../Posts/PostList';
import {Link} from 'react-router-dom';
// Styles
// import postForm from '.../styles/postForm.scss';

class ThreadView extends React.Component {
  //   selectThread = () => { .
  // }
  render() {
    const {thread, image, select, text, name, id} = this.props;
      return(
      <Item>   
        <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={thread.image} alt='no img' />}>
            <Modal.Content image>
               <Item.Image src={thread.image} />
           </Modal.Content>
       </Modal>
        <Item.Content>
              №{thread.id}
              <Item.Header as='' className='extra content'>
              {thread.name}
              </Item.Header>
              {thread.date}
              <Item.Description  className='extra content'>
                {thread.text}
              </Item.Description>
                   <Item.Extra as='h4'>
                     <a>>{Date.now()}</a> 
                   </Item.Extra> 
                      {/* <Link to={`/thread/${thread.id}`}> */} 
                        <Button onClick={() => select(thread.id)} compact basic size='small' icon='reply' />
                      {/* </Link>  */} 
               <ThreadReply
                    thread={id}
                    createPost={this.props.createPost}
                    fetchPost={this.props.fetchPost}
                    addFlashMessage={this.props.addFlashMessage}
               />
               <PostList 
                    posts={this.props.posts}
                    createPost={this.props.createPost}
                    fetchPost={this.props.fetchPost}
                    addFlashMessage={this.props.addFlashMessage}
               />                      
        </Item.Content>
                <div className=''>
        <Button.Group attached='bottom' basic size='small'>
              <Button  icon='like' />
              <Button icon='comment outline' />
              <Button icon='hide' />
              <Button icon='edit' />
        </Button.Group>
               </div>
      </Item>
    );
  }
}

export default ThreadView;