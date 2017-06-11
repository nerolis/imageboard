import React, { Component } from 'react';
import {Feed, Item, Icon, List, Content, Header, Container, Message, Button, Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class HomeView extends Component {
  render() {
     const {thread, threads} = this.props;
    return (
    <Table celled striped>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name='add' /> New thread in <Link to={`/b/threads/${thread.id}`}>/b/№{thread.id}</Link> 
          </Table.Cell>
                <Table.Cell>
                {thread.text}
                </Table.Cell>               
          <Table.Cell collapsing textAlign='right'> <Icon name='like'> {thread.like}</Icon></Table.Cell>
          <Table.Cell collapsing textAlign='right'>{thread.date}</Table.Cell>
          
        </Table.Row>
      </Table.Body>
    </Table>
    )
  }
}

export default HomeView;