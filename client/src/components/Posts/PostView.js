import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header, Popup, Label} from 'semantic-ui-react';
import ThreadReply from '../Thread/ThreadReply';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player'
// Styles
// import postForm from '.../styles/postForm.scss';
class PostView extends React.Component {
   constructor() {
      super()
      this.state = {
           isToggleOn: false,
           inactive: false,
        
      }
       this.handleClick = this.handleClick.bind(this);
    }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
       const {thread, image, select, text, name, id, comments, user_id, post, YoutubeLink, upvotePost, deletePost, isAuthenticated} = this.props;
  return(
      <Item>        
      <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={post.image}/>}>
           <Modal.Content image>
             <Item.Image src={post.image} />
           </Modal.Content>
      </Modal>
           <Item.Content>
          <ThreadReply
              thread={this.props.thread}
              createPost={this.props.createPost}
              fetchPost={this.props.fetchPost}
              addFlashMessage={this.props.addFlashMessage}
              />  
             <Item.Header
                as='h1'><p>{post.name}<a><br></br>№{post.id}</a> <br></br>{post.date}</p>
             </Item.Header>
              <Button disabled={this.state.inactive} floated='right' size='tiny' compact basic color='black'  onClick={() => upvotePost(post.id).then(this.setState({inactive: true}))}><Icon name='like' />{post.like}</Button>
            {isAuthenticated ? <Button  color='black' size='tiny' basic floated='right' compact onClick={() => deletePost(post.id)}>Delete</Button>: ''}
              <Item.Description as='h1'>
                <Message color='black' size='small' >
                {post.text} 
                </Message>
                  {post.YoutubeLink && <Button floated='right'  color='black' basic icon onClick={this.handleClick}> 
                  {this.state.isToggleOn ? <ReactPlayer url={post.YoutubeLink} width={400} height={200} controls={true}/> : <Icon size='big' name='youtube play' />}
                 </Button>}
              </Item.Description>
        </Item.Content>
      </Item>
     );
    
  }
  
}
export default PostView;
