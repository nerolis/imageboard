import React from 'react';
import ReactDOM from 'react-dom';
import {fetchThread, createThread} from '../../actions/actions';
import {fetchPost, createPost} from '../../actions/posts';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Segment, Input, Form, Button} from 'semantic-ui-react';
import ThreadList from './ThreadList';
import youtubeExample from '../features/youtube';
import YouTube from 'react-youtube';
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
     _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const style = {backgroundColor: this.state.backgroundColor}
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    
    return (
     <div>
        <input value={this.state.bgColor}
          onChange={this.onChange}
          name='bgColor' />
     <button onClick={document.body.style.backgroundColor = this.state.bgColor}>Type color to change BG</button>
    <div>
      <YouTube
        videoId="-6th_CqdjXc"
        opts={opts}
        onReady={this._onReady} />
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