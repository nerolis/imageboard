import React, { Component } from 'react';
import {Feed, Icon, List, Content, Header, Container} from 'semantic-ui-react';
import HomeView from './HomeView';
class HomeList extends Component {
  render() {
    return (
      <Header>
      HomeList
      <HomeView />
  </Header>
    );
  }
}

export default HomeList;