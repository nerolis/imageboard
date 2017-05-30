import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone-component';
import {fetchPost} from '../../../../../../../../Users/Kircheis/yychan/client/src/actions/posts';

 class ThreadAddPost extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Chen',
      text: '',
      image: '',
      reply_id: '',
      errors: {},
      showPostingForm: false
    }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
  }

  onSubmit(e) {
   e.preventDefault()
    // if поле с изображением пусто. Тупо, но работает. Временно сойдет.
    this.state.reply_id = this.props.thread.id // id > select
    if (this.state.image === '') {
    this.state.image = 'http://static.zerochan.net/Chen.full.1194832.jpg';}
    // Post!
    const { name, text, image, reply_id} = this.state; // чтоб не перечислять через this.state
    this.props.createPost({name, text, image, reply_id})
        .then(() => this.props.fetchPost())
          .then( () => {
            this.props.addFlashMessage({
              type: 'Succes', 
              text: 'Post added',
            })
          })
      // Вот это - для очищения формы. Вроде норм.
        this.setState({
          name: 'Chen',
          text: '',
          image: '',
          showPostingForm: false,
        });
     }
    onChange(e) {
     this.setState({ [e.target.name]: e.target.value });
  }
  
    render() {
      const {onSubmit} = this.props;
      const {showPostingForm} = this.state;

    if (showPostingForm) return (
      <div>
        <Button color='blue' basic compact size='tiny' onClick={() => this.setState({showPostingForm: false})}>
          Close form
        </Button>
        <Form onSubmit={this.onSubmit}>
          <input
                  name='name'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={this.onChange} >
              </input>
              <Form.Field
                  name='text'
                  placeholder='Message'
                  control='textarea'
                  rows='3'
                  value={this.state.text}
                  onChange={this.onChange}/>
     
              <input
                  name='image'
                  placeholder='URL:'
                  value={this.state.image}
                  onChange={this.onChange}>
              </input>
              <Form.Field>
                   <div className="field"> 
                    {this.state.image !== '' && <img src={this.state.image} className="ui small bordered image"/>}
                </div>
              </Form.Field>
                    <Button className="ui primary button">Reply</Button>
        </Form>
        
      </div>
    );
    else return (
      <Button color='blue' basic compact size='tiny' onClick={() => this.setState({showPostingForm: true})}>
        Reply
      </Button>
      
      
    )
  }
}

export default ThreadAddPost;