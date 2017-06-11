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
      </Grid.Column>
      <Grid.Column>
    
               <Label color='blue' size='massive'>
              <Link to='/b/'>/B/</Link><br></br>
              <Link to='/to/'>/TO/ in development</Link><br></br>
              <Link to='/a/'>/A/ in development</Link><br></br>
              <Link to='/dev/'>/Dev/</Link><br></br>
              <Link to='/olanet/'>/Ola/</Link><br></br>
              </Label>
 
     
      </Grid.Column>
      <Grid.Column>

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