import React from 'react';
// Components
import {Form, Button, Textarea, Message, Container, Header} from 'semantic-ui-react';
import Input from 'react-toolbox/lib/input';
import {addFlashMessage} from '../../../../../../../../Users/Kircheis/yychan/client/src/actions/flashMessages';
class ThreadCreateForm extends React.Component {
    constructor() {
      super()
        this.state = {
            name: 'Chen',
            text: '', 
            like: 0,
            image: '',
            errors: {},
            isLoading: false,
            invalid: false,
            showThreadCreateForm: false,
        };
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     }

    onSubmit(e) {
      // validation
      e.preventDefault();
        let errors = {};
        if (this.state.name === '') errors.name = "Can't be empty";
        if (this.state.text === '') errors.text = "Can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0
       // post
      if (isValid) {
        this.setState({ loading: true });
          const { name, text, image, like} = this.state; 
          this.props.createThread({name, text, image, like}).catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })))
          .then(() => this.props.fetchThread())
          .then( () => {
            this.props.addFlashMessage({
              type: 'Succes', 
              text: 'Thread created',
            })
          })
        // reset form to default
        this.setState({
          name: 'Chen',
          text: '',
          image: '',
          showThreadCreateForm: false,
        });
    } }

    onChange = (name, value) => {
          this.setState({...this.state, [name]: value} )
        }

    render() {
          const {onSubmit} = this.props;
          const {showThreadCreateForm, name, text, image, errors, invalid, isLoading} = this.state; 
          
          if (showThreadCreateForm) return (
       <Message color='black'>
        <Form  onSubmit={this.onSubmit}>
             <Message color='black'><h1>Create thread Form</h1></Message>
            <Input  error={errors.name} error={errors.name} label='Name' type='text' name='name' value={name} onChange={this.onChange.bind(this, 'name')} />
            <Input error={errors.text} multiline rows={3} label='Message'type='text' name='text' value={text} onChange={this.onChange.bind(this, 'text')} />
            <Input error={errors.image} label='URL' type='text' name='image' value={image} onChange={this.onChange.bind(this, 'image')} />
            <div className="field"> {this.state.image !== '' && <img src={this.state.image} className="ui small bordered image"/>}</div>
            <Button disabled={isLoading || invalid}>Submit</Button>
            <Button color='red' basic floated='right'icon='close' onClick={() => this.setState({showThreadCreateForm: false})}></Button>
         </Form>
         </Message>
     );
       else return (
      <Button basic color='black' onClick={() => this.setState({showThreadCreateForm: true})}>
        Create thread
      </Button>
    );
  }
}
export default ThreadCreateForm;