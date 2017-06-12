import React, { Component } from 'react';
import {Feed, Item, Icon, List, Content, Header, Container, Message, Button, Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class SubView extends Component {
  render() {
     const {post, posts, threads, thread} = this.props;
    return (
    <Table celled striped>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name='add' /> New post in <Link to={`/b/${post.reply_id}`}>/b/№{post.reply_id}</Link> 
          </Table.Cell>
                <Table.Cell>
                {post.text}
                </Table.Cell>
          <Table.Cell collapsing textAlign='right'>{post.date}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    )
  }
}

export default SubView;