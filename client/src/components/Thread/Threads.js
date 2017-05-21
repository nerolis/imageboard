// Modules
import React from 'react';
import {connect} from 'react-redux';
// Actions
import {fetchThread, selectThread} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
// Styles
import {Image, Item, Container, Button, Header} from 'semantic-ui-react';
// Components
import ThreadList from './ThreadList';
import PostList from '../Posts/PostList';
import ThreadCreateForm from './ThreadCreateForm';
import {Redirect} from 'react-router-dom';

class Threads extends React.Component {
        componentDidMount() {
       this.props.fetchThread()
       this.props.fetchPost()
  
   }
    render() {
       console.log('Threads Store:', this.props.threads)
       console.log('Posts Store:', this.props.posts)
        return(
      <div className=''>
          <ThreadList threads={this.props.threads}/>      
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
   threads: state.threads,
   posts: state.posts,
  }
}

export default connect(
  mapStateToProps, {
      fetchThread,
      fetchPost,


} 
)(Threads)