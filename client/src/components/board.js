import React from 'react';
import {connect} from 'react-redux';
import {fetchThread} from './actions';
import Thread from './Thread';
import ThreadCreateForm from './Test';
import axios from 'axios';
import {Image, Item, Container, Button} from 'semantic-ui-react';

class Board extends React.Component {
    constructor() {
    super();
    this.state = {
      threads: [],
      showThreadCreateForm: false,
    }
  }  
        componentDidMount() {
        this.props.fetchThread() 
      }
    
    render() {
      return(
        <Container>
         <Item.Group>
          <Thread
          id={this.props.thread.id}
          name={this.props.thread.name}
          title={this.props.thread.title}
          text={this.props.thread.text}
          image={this.props.thread.image}
          />
          {
            (this.state.showThreadCreateForm)
            ? <div>
              <Button onClick={() => this.setState({showThreadCreateForm: false})}>Close form</Button>
              <ThreadCreateForm />
              </div>
            : <Button onClick={() => this.setState({showThreadCreateForm: true })}>Create Thread</Button>
          }
          </Item.Group>
        </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    thread: state.threads.thread
  }
}

export default connect(mapStateToProps, {fetchThread})(Board)