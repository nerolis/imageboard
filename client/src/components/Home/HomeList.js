import React, { Component } from 'react';
import {Feed, Icon, List, Content, Header, Container, Message, Button, Grid, Segment} from 'semantic-ui-react';
import HomeView from './HomeView';
import SubView from './SubView';
import TestComp from './TestComp';

class HomeList extends Component {
  
  render() {
      const {threads, posts, fetchPost, fetchThread, tasks} = this.props;
      /// Добавить обработку ошибки. Думаю, реализация через if else return
      console.log(tasks)
      const emptyMessage = (
     <Message icon>
      <Icon name='circle notched' loading />
        <Message.Content>
        <Message.Header>Just one second</Message.Header>
             We are fetching that content for you.
        </Message.Content>
      </Message>
  );
    return (
        <div>
        <div> 
            {threads.slice(-3).map( thread => <HomeView thread={thread} key={thread._id}/>)}    
            {posts.slice(-3).map( post => <SubView post={post} key={post._id} threads={this.props.threads}    />)}   
            {tasks.map(task => <TestComp task={task} key={task.id}  />)}
        </div>
             {threads.length === 0 ? emptyMessage : HomeList}
             {posts.length === 0 ? emptyMessage : HomeList}
         </div>
    );
  }
}

export default HomeList;