import React from 'react';
import ReactDOM from 'react-dom';
import {fetchThread, createThread} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';
import {connect} from 'react-redux';
class Dev extends React.Component {
  render() {
    return (
      
      <ul>
        { messagesToThreads(this.props.messages, this.props.replied_messages).map(thread =>
          <Message key={thread.message.id} message={thread.message}>
            { thread.replies.map(reply => <Message key={reply.id} message={reply} />) } 
          </Message>
        ) }
      </ul>
    );
  }
}


const Message = ({message, children}) => <li>{message.text}{children}</li>;

function messagesToThreads(messages, replied_messages) {
  return messages.map(message => {
    return {
      message,
      replies: replied_messages.filter(reply => reply.message_replied_id == message.id)
    }
  });
}``


export default connect(null, 
{
    createThread,
    fetchPost,
    fetchThread, 
}
)(Dev);