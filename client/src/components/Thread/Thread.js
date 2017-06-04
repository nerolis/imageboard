import React from 'react';
import ReactDOM from 'react-dom';
import {fetchThread, createThread} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Item, Button, Menu, Container, Header, Message, Image} from 'semantic-ui-react';
import ThreadList from './ThreadList';
import {Redirect} from 'react-router';

class Thread extends React.Component {
render() {
    document.body.style.backgroundColor = 'black'
    return (
     <Header>
     <Container>
      <Message error>Invalid authToken
            <Image src='https://s-media-cache-ak0.pinimg.com/236x/4b/88/68/4b886804aa9a6f7a3d5bd31806cc2473.jpg' />
      </Message>
     </Container>
     </Header> 
    )



 }
}
export default connect(null, 
{
    createThread,
    fetchPost,
    fetchThread, 
}
)(Thread);