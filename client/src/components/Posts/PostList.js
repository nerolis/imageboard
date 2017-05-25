import React from 'react';;
import {Item, Button, Menu, Container, Header} from 'semantic-ui-react';
import PostCard from './PostCard';

 class PostList extends React.Component {
    constructor() {
      super()
        this.state = {
        currentThread: undefined,
    }
  }
  render() {
    const posts = this.props.posts
     return(
        <div>                                
         <Item.Group divided relaxed>     
          {posts.map(post =>  // {posts.slice(0, 3).map(post => оставлю здесь. очень плохой способ, надо думать.
            <PostCard 
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