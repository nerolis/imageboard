import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header} from 'semantic-ui-react';
import ThreadReply from '../Thread/ThreadReply';
import {Link} from 'react-router-dom';
import YouTube from 'react-youtube';
// Styles
// import postForm from '.../styles/postForm.scss';
class PostView extends React.Component {
  render() {
    const {thread, image, select, text, name, id, comments, user_id, post, YoutubeLink} = this.props;
        const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
     
     }
    }
    let videoId = YoutubeLink;
    let url = 'https://www.youtube.com/embed/' + videoId;
    
     if (YoutubeLink) {
    return (
      <div>Loading...</div>
    )
  }
  return(
      <Item>   
      <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={post.image} alt='no img' />}>
           <Modal.Content image>
             <Item.Image src={post.image} />
           </Modal.Content>
      </Modal>
           <Item.Content as='h7'>
             <Item.Header as='h1'><p>{post.name}<a><br></br>№{post.id}</a> <br></br>{post.date}</p></Item.Header>
              <Item.Description>
                <Message color='black' size='big' >
                {post.text}
                  <ThreadReply
                  thread={this.props.thread}
                  createPost={this.props.createPost}
                  fetchPost={this.props.fetchPost}
                  addFlashMessage={this.props.addFlashMessage} />   
                </Message>
              </Item.Description>      
          
        </Item.Content>
      </Item>
     );
  }
      _onReady(event) {
    event.target.pauseVideo();
  }
}
export default PostView;
