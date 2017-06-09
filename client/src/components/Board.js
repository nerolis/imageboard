import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Item, Button, Menu, Container, Header, Message, Image} from 'semantic-ui-react';
import {Redirect} from 'react-router';
import Link from 'react-toolbox/lib/link';
class Board extends React.Component {
render() {
    return (
  
     <Container>
      <Message as='h1' size='massive'>

             <nav>
    <Link active href="/b/" label="/b/" icon='' />
      
      <Link href="/a/" label="/A/" icon='in development'/>
     <Link href="/to/" label="/TO/" icon='in development' />
    <Link active href="/dev" label="Dev"/>
  </nav>
      
      </Message>


     </Container>

    )



 }
}
export default connect(null, 
{ 
}
)(Board);