// Modules
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link, Switch, Route} from 'react-router-dom';
// Actions
import {fetchThread} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
// Styles
import mainscss from '../../styles/main.scss';
import {Image, Item, Container} from 'semantic-ui-react';
// Components
import ThreadList from './ThreadList';
import SingleThread from './SingleThread';
class Threads extends React.Component {
         componentWillMount() {
          this.props.fetchThread()
          this.props.fetchPost()
       }
    render() {
      const { isAuthenticated } = this.props.auth;
      const { posts, threads } = this.props;
    
    return(
      
     <Container className="Container" >
          <Switch>
      <Route exact path='/b/' render={() => <ThreadList threads={threads} posts={posts} isAuthenticated={isAuthenticated}   />}/>
      <Route path={`/b/:threadId`} component={SingleThread} />
         </Switch>
         
      <div className="ui vertical footer segment form-page">
      </div>
    </Container>

    )
  }
}



function mapStateToProps(state) {
  return {
   threads: state.threads,
   posts: state.posts,
   auth: state.auth
  }
}

export default connect(
  mapStateToProps, 
{
     fetchPost,
     fetchThread,
} 
)(Threads)