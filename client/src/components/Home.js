import React, { Component } from 'react';
import {Feed, Icon, List, Content, Header, Container} from 'semantic-ui-react';
import ThreadList from './Thread/ThreadList';
import PostList from './Posts/PostList';
import Threads from './Thread/Threads';
class Home extends Component {
  render() {
        const {thread, image, select, text, name, id, comments, user_id, href} = this.props;
    return (

        // Hardcode stage presentation, there will be latest activity on the board.
        // hm, in fact, also with list of threads that was updated. with some feed.

      <Header>
         <List divided relaxed selection>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>/B/</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>/A/</List.Header>
        <List.Description as='a'>Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>/TO/</List.Header>
        <List.Description as='a'>666</List.Description>
      </List.Content>
    </List.Item>
    
  </List>

  </Header>
    );
  }
}

export default Home;