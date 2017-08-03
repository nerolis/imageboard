import React from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import { Image, Item , Message, Button, Icon, Modal, Header, Label, Dropdown, Divider} from 'semantic-ui-react';
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
   <Item.Meta>      <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={thread.image}/>}>
        <Modal.Content image>
          <Item.Image src={thread.image} />
        </Modal.Content>
      </Modal>  </Item.Meta>
  <Item.Content>
        <Item.Meta className='button group'>
      <Link to={`/b/${thread.id}`}>  <Button content='Open' icon='chevron down' size='small' compact floated='right' inverted/> </Link>
          {isAuthenticated ? <Button   inverted  size='tiny' compact floated='left' compact onClick={() => deleteThread(thread.id)}>Delete</Button> : ''}
       <ThreadReply
          fetchOnePost={this.props.fetchOnePost}
          thread={this.props.thread}
          createPost={this.props.createPost}
          fetchPost={this.props.fetchPost}
          addFlashMessage={this.props.addFlashMessage} /> 
        <Button
          disabled={this.state.inactive}
          onClick={() => upvoteThread(thread.id).then(this.setState({inactive: true}))}
          size='tiny'
          compact
          inverted
          floated="left"
          content={`Like ${thread.like}`}
          icon='like' />
        </Item.Meta>
      <Message color='brown' size='small'>
       <Item.Description as='h3'>
          <p>{thread.name}<a><br></br>№{thread.id}</a> <br></br>{thread.date} </p>
          <Message color='black' size='small'>{thread.text}</Message>
       </Item.Description>
         </Message>
               <Message color='brown'>
                  <PostList 
                    thread={this.props.thread}
                    posts={this.props.posts}
                    {...this.props}
                    isAuthenticated={isAuthenticated}/> 
              </Message> 
   </Item.Content>
  </Item>
 )}
}

export default ThreadView;