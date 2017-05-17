import React from 'react';
import {connect} from 'react-redux';

import {fetchThread} from './actions';


import ThreadList from './ThreadList';
import ThreadCreateForm from './ThreadCreateForm';

import {Image, Item, Container, Button, Header} from 'semantic-ui-react';

class Board extends React.Component {
    constructor() {
    super();
    this.state = {
      showThreadCreateForm: false,
        }
      }  
        componentDidMount() {
        this.props.fetchThread() 
      }
      
    render() {
      return(
        <div> 
             <Header>
              Menu: 
              There will be map of threads.
              Or latest activity on board 
              
             </Header>
             
        <Container>
         <Item.Group>
         <ThreadList threads={this.props.threads}/>        
                
                 {(this.state.showThreadCreateForm)
                  ? <div>
                    <Button onClick={() => this.setState({showThreadCreateForm: false})}>Close form</Button>
                    <ThreadCreateForm />
                    </div>
                  : <Button onClick={() => this.setState({showThreadCreateForm: true })}>Create Thread</Button>
                  }
         
          </Item.Group>
          </Container>
          </div>
       
  
    );
  }
}
// прокинуть стейт в тред не через пропсы
function mapStateToProps(state) {
  return {
   threads: state.threads
  }
}

export default connect(mapStateToProps, {fetchThread})(Board)