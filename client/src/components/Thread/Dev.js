import React from 'react';
import ReactDOM from 'react-dom';
import {fetchThread, createThread} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Dev extends React.Component {

  render() {
    return (
     <div>
        
     </div> 
    )

  }
}
export default connect(null, 
{
    createThread,
    fetchPost,
    fetchThread, 
}
)(Dev);