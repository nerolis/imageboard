import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Item, Button, Menu, Container, Header, Message, Image, Label, Grid} from 'semantic-ui-react';
import { Link, Route} from 'react-router-dom';

class Board extends React.Component {
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
              <Link to='/b/'>/b/</Link><br></br>
              <Link to='/dev/'>/dev/</Link><br></br>
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
export default connect(null, 
{ 
}
)(Board);