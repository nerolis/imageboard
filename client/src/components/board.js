import React from 'react';
import {connect} from 'react-redux';
import {fetchThread} from './actions';
import Thread from './Thread';
import ThreadCreateForm from './Test';
import axios from 'axios';

class Board extends React.Component {
    constructor() {
    super();
    this.state = {
      threads: []
    }
  }  

      componentWillMount() {
        this.props.fetchThread() 
      }
    
    render() {
      return(
      <div>
    <div>
      test
    </div>
        <ThreadCreateForm/>
      </div>
    );
  }
}

export default connect(null, {fetchThread})(Board)