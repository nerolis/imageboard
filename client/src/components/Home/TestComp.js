import React, { Component } from 'react';
import { Feed, Item, Icon, List, Content, Header, Container, Message, Button, Table, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class SubView extends Component {
  render() {
    const { task } = this.props;
    return (
      <Segment>{task.id}, {task.title}, {task.description}, {task.important}, {task.my} </Segment>
    )
  }
}

export default SubView;