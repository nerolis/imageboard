import React, { Component } from 'react';
import {Feed, Icon, List, Content, Header, Container, Message, Button, Grid, Segment} from 'semantic-ui-react';
import HomeView from './HomeView';
import SubView from './SubView';
class HomeList extends Component {
  render() {
      const {threads, posts, fetchPost, fetchThread} = this.props;
    return (
        <div> 
            {threads.slice(-3).map( thread => <HomeView thread={thread} key={thread._id}/>)}    
            {posts.slice(-3).map( post => <SubView post={post} key={post._id} threads={this.props.threads}    />)}   
        </div>
    );
  }
}

export default HomeList;