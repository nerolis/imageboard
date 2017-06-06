import React from 'react';
import {connect} from 'react-redux';
// Components
import {Form, Button, Textarea, Message, Container, Header, Search, Grid, Icon} from 'semantic-ui-react';
// actions
import {fetchPost} from '../../../../../../../../Users/Kircheis/yychan/client/src/actions/posts';
import ThreadCreateForm from './ThreadCreateForm';
import {Input} from 'react-toolbox/lib/input';  
class ThreadAddPost extends React.Component {
    constructor() {
      super()
        this.state = {
            name: 'Chen',
            text: '', 
            image: '',
            errors: {},
            reply_id: '',
            isLoading: false,
            invalid: false,
            showThreadCreateForm: false,
            YoutubeLink: '',
        };
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
     }
    onSubmit(e) {
      // validation
      e.preventDefault();
        let errors = {};
        this.state.reply_id = this.props.thread.id
        const re = /.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        // Это валидация инпута ютуба, странно выглядит, но работает. Если не делать !== '', то инпут не проходит с пустой строкой.
        if (this.state.YoutubeLink !== '') {
          this.state.invalid = false;
          if (!this.state.YoutubeLink.match(re)) {
            errors.YoutubeLink = 'Not valid URL. Example: https://www.youtube.com/watch?v=1FGtd3oH_PQ'
          }
        }
        if (this.state.name === '') errors.name = "Can't be empty";
        if (this.state.text === '') errors.text = "Can't be empty";
        if (this.state.image === '') this.state.image = 'https://images-na.ssl-images-amazon.com/images/I/71qw-PZPSeL._SY550_.jpg'
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0
       // post
      if (isValid) {
        this.setState({ loading: true });
          const { name, text, image, reply_id, YoutubeLink} = this.state;
          this.props.createPost({name, text, image, reply_id, YoutubeLink}).catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })))
          .then(() => this.props.fetchPost())
          .then( () => {
            this.props.addFlashMessage({
              type: 'Succes', 
              text: 'Post added',
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
          const {showThreadCreateForm, name, text, image, YoutubeLink, errors, invalid, isLoading} = this.state; 
          if (showThreadCreateForm) return (

        <Message color='black'>
        <Form onSubmit={this.onSubmit}>
    
             <label>Reply №{this.state.reply_id}</label>
            <Input error={errors.name} error={errors.name} label='Name' type='text' name='name' value={name} onChange={this.onChange.bind(this, 'name')} />
            <Input error={errors.text} multiline rows={2} label='Message'type='text' name='text' value={text} onChange={this.onChange.bind(this, 'text')} />
                 <Grid>
        <Grid.Column width={6}>
                  <Input error={errors.image} label='Image' type='text' name='image' value={image} onChange={this.onChange.bind(this, 'image')} />
        </Grid.Column>
        <Grid.Column width={6}>
                  <Input error={errors.YoutubeLink}label='Youtube'  type='text' name='videoId' value={YoutubeLink} onChange={this.onChange.bind(this, 'YoutubeLink')} />
        </Grid.Column>
        </Grid>
            <div className="field"> {this.state.image !== '' && <img src={this.state.image} className="ui small bordered image"/>}</div>
            <Button disabled={isLoading || invalid}>Submit {this.state.reply_id}</Button>
             <Button basic color='red' floated='right'icon='close' onClick={() => this.setState({showThreadCreateForm: false})}></Button>
         </Form>
         </Message>
 
     );
       else return (
      <Button size='tiny' floated='right'  color='black' onClick={() => this.setState({showThreadCreateForm: true})}>
        Reply
      </Button>
    );
  }
}
export default ThreadAddPost;