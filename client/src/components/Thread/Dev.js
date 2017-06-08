import React from 'react';
import ReactDOM from 'react-dom';
import {fetchThread, createThread, INVALIDATE_SUBTHREAD} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Segment, Input, Form, Button, Container, Label, Message} from 'semantic-ui-react';
import ThreadList from './ThreadList';
class Dev extends React.Component {
 constructor() {
          super()
            this.state = {
            bgColor: '',
       }
      }
     onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
     console.log(this.state.bgColor)
  }
  render() {
    const style = {backgroundColor: this.state.backgroundColor}
    return (
     <Container>
      <Segment inverted>
      <Input value={this.state.bgColor}
             onChange={this.onChange}
             name='bgColor'/>
     <Button color='black' onClick={document.body.style.backgroundColor = this.state.bgColor}>Type some color. Like white.</Button>
     </Segment>
     </Container> 
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