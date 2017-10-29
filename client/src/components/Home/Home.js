import React, { Component } from 'react';
import {connect} from 'react-redux';
// Components
import {Feed, Icon, List, Content, Header, Container, Button, Message} from 'semantic-ui-react';
import HomeList from './HomeList';
// actions
import { FetchMoreThreads, fetchMoreTasklist} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
import { addFlashMessage } from '../../actions/flashMessages';

class Home extends Component {
           componentWillMount() {
            this.props.FetchMoreThreads()   
            this.props.fetchPost()  
            this.props.fetchMoreTasklist()
  }
  render() {
    console.log(this.props.tasks, 'from home')

    return (
        <div>
    
        <HomeList threads={this.props.threads} posts={this.props.posts} tasks={this.props.tasks}/>
        </div>
        
    );
  }
}

function mapStateToProps(state) {
  return {
   threads: state.threads,
   posts: state.posts,
   tasks: state.tasks,
  }
}

export default connect(
  mapStateToProps, 
{    fetchPost,
     FetchMoreThreads,
     fetchMoreTasklist,
} 
)(Home)