import React, { Component } from 'react';
import {Feed, Icon, List, Content, Header, Container} from 'semantic-ui-react';
class Home extends Component {
  render() {
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
        <List.Description as='a'>Updated 666 hours ago</List.Description>
      </List.Content>
    </List.Item>
    
  </List>

  </Header>
    );
  }
}

export default Home;