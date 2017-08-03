import React from 'react';
import {Link} from 'react-router-dom';
import {Segment, Input, Form, Button, Container, Label, Message, List} from 'semantic-ui-react';
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
      <Segment color='teal'><p>Список того, что стоило бы попробовать написать;</p>
      <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header><Link to='/dev/slider/'>Slider;</Link><br></br></List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header><Link to='/dev/scroll/'>InfinityScroll;</Link><br></br></List.Header>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
      </Segment>
     </Segment>

 )}
}

export default Dev;