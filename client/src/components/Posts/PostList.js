import React from 'react';;
import {Item, Button, Menu, Container, Header} from 'semantic-ui-react';
import PostView from './PostView';

 class PostList extends React.Component {
    constructor() {
      super()
        this.state = {
        currentThread: undefined,
    }
  }
  render() {
    const posts = this.props.posts
    const thread = this.props.thread
     return(
        <div>                                
         <Item.Group divided relaxed>     
             {posts.filter(post => thread.id == post.reply_id).map(post =>
            <PostView
              thread={this.props.thread}
              post={post}
              key={post._id}  
              createPost={this.props.createPost}
              fetchPost={this.props.fetchPost}
              addFlashMessage={this.props.addFlashMessage}
          />)}
         </Item.Group>
        </div>
   )
  }     
}
export default PostList;