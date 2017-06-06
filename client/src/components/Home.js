import React, { Component } from 'react';
import {Feed, Icon, List, Content, Header, Container} from 'semantic-ui-react';
import HomeList from './Home/HomeList';
class Home extends Component {
  render() {
    return (

        <Header>
        Home
        <HomeList />
        </Header>
    );
  }
}

export default Home;