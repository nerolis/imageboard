import React from 'react';
import ReactDOM from 'react-dom';
import {fetchThread, createThread} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Segment, Input, Form, Button} from 'semantic-ui-react';

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
     <div>
      <input value={this.state.bgColor}
             onChange={this.onChange}
             name='bgColor'
      />
       <div>
        <button onClick={document.body.style.backgroundColor = this.state.bgColor}>Type color to change BG</button>
           </div>
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