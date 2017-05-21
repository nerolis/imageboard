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
        console.log('currentPost:', this.state.currentThread)
        const posts = this.props.posts
        return(
         <div>
          <Item.Group divided relaxed>
            {posts.map(post => <PostCard post={post} key={post._id} />)}
           </Item.Group>
         </div>
      )}     
  
    }
export default PostList;