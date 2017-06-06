import React, { Component } from 'react';
import {Feed, Icon, List, Content, Header, Container, Message, Button} from 'semantic-ui-react';
import HomeView from './HomeView';

class HomeList extends Component {
  render() {
      const {threads, fetchThread} = this.props;
    return (
        <div>
            <Header>
            <Message color='black'>Activity on board</Message>
            </Header>
            {threads.slice(-3).map(thread => <HomeView thread={thread} key={thread._id}/>)}              
    </div>
    );
  }
}

export default HomeList;