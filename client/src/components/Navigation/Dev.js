import React from 'react';
import {Link} from 'react-router-dom';
import {Segment, Input, Form, Button, Container, Label, Message} from 'semantic-ui-react';
class Dev extends React.Component {
   constructor() {
     super()
     this.state = { bgColor: ''}
 }
onChange = (e) => {
 this.setState({ [e.target.name]: e.target.value });}
  render() {
  const style = {backgroundColor: this.state.backgroundColor}
    return (
    <Segment>
      <Input 
      value={this.state.bgColor}
      onChange={this.onChange}
      name='bgColor'/>
     <Button color='teal'>{document.body.style.backgroundColor = this.state.bgColor}: Type Color?</Button>
     </Segment>

 )}
}

export default Dev;