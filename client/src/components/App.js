// Modules
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
// Components
import FlashMessagesList from './features/flash/FlashMessagesList';
import NavigationBar from './NavigationBar';
import {Menu, Dropdown, Item, Segment, Button, Icon, Label, Container} from 'semantic-ui-react';
class App extends React.Component {
  render() {
    return (
      <Container>
        <FlashMessagesList />
        <NavigationBar />
        {this.props.children}
      </Container>
    );
  }
}

export default App;