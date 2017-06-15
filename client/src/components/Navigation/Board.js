import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Item, Button, Menu, Container, Header, Message, Image, Label, Grid, Popup} from 'semantic-ui-react';
import { Link, Route} from 'react-router-dom';
import {FetchMoreThreads} from '../../actions/actions';
import {fetchPost} from '../../actions/posts';
class Board extends React.Component {
      componentWillMount() {
      this.props.FetchMoreThreads()
      this.props.fetchPost()
    }
  render() {
    return (
     <Header>
      <Grid textAlign='center' columns={3}>
    <Grid.Row> 
      <Grid.Column>
      <Label basic size='massive'>
              <Link to='/to/'> /to/ in development</Link><br></br>
              <Link to='/a/'>/a/ in development</Link><br></br>
              </Label>
      </Grid.Column>
      <Grid.Column>
      
                <Header as='h2'>
                  <Image src='http://www.favicon.cc/logo3d/767467.png' />
                </Header>
               <Label basic size='massive'> 
              <Popup position='top center' trigger={<Link to='/b/'>/b/</Link>} content={`Threads: ${this.props.threads.length}, Posts: ${this.props.posts.length}`} />
             <br></br>
              <Link to='/dev/'>/dev/</Link>
              <br></br>
              </Label>
               
      </Grid.Column>
      <Grid.Column>
           <Label basic size='massive'>
             <Link to='/vg/'>/vg/ in development</Link><br></br>
                        
             <Link to='/pr/'>/pr/ in development</Link><br></br>
           </Label>
      </Grid.Column>
    </Grid.Row>
  </Grid>
     </Header>
    )



 }
}

function mapStateToProps(state) {
  return {
   threads: state.threads,
   posts: state.posts,
  }
}

export default connect(
  mapStateToProps, 
{
     fetchPost,
     FetchMoreThreads,
} 
)(Board)