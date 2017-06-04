import React from 'react';
import {connect} from 'react-redux';
// Components
import {Form, Button, Textarea, Message, Container, Header, Search, Grid} from 'semantic-ui-react';
import {Input} from 'react-toolbox/lib/input';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
// actions
import {fetchPost} from '../../../../../../../../Users/Kircheis/yychan/client/src/actions/posts';
import {fetchTube} from '../../actions/youtube';

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
            Embed: '',
            showThreadCreateForm: false,
            selectedVideo: null,
        };
        // this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
     }

    onSubmit(e) {
      // validation
      e.preventDefault();
        let errors = {};
        this.state.reply_id = this.props.thread.id
        if (this.state.name === '') errors.name = "Can't be empty";
        if (this.state.text === '') errors.text = "Can't be empty";
        if (this.state.image == '') this.state.image = 'https://images-na.ssl-images-amazon.com/images/I/71qw-PZPSeL._SY550_.jpg'
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0
       // post
      if (isValid) {
        this.setState({ loading: true });
          const { name, text, image, reply_id} = this.state; 
          this.props.createPost({name, text, image, reply_id}).catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })))
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
    fetchYoutube(term) {
      console.log(fetchTube(term))
      this.props.fetchTube(term)
    }

    render() {
          const {onSubmit} = this.props;
          const {showThreadCreateForm, name, text, image, errors, invalid, isLoading} = this.state; 
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
                  <Input label='Youtube' type='text' onChange={this.fetchYoutube.bind(this)} name='youtube' />
        </Grid.Column>
        </Grid>
            <div className="field"> {this.state.image !== '' && <img src={this.state.image} className="ui small bordered image"/>}</div>
            <div className="field"> {this.state.selectedVideo !== '' && <img src={this.state.selectedVideo} className="ui small bordered image"/>}</div>
            <Button color='brown' disabled={isLoading || invalid}>Reply {this.state.reply_id}</Button>
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
export default connect(
  null, 
{
     fetchTube
} 
)(ThreadAddPost)