// Modules
import React from 'react';
import {connect} from 'react-redux';
// Actions
import {fetchThread} from './actions';
// Styles
import {Image, Item, Container, Button, Header} from 'semantic-ui-react';
// Components
import ThreadList from './ThreadList';
import ThreadCreateForm from './ThreadCreateForm';

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
       console.log('From store', this.props.threads)
       console.log('Form', this.props.showThreadCreateForm)
        return(
        <div className=''>
            <h1>Thread list:</h1>
               <ThreadList threads={this.props.threads}/>      
                {(this.state.showThreadCreateForm)
                ? <div> 
                <Button onClick={() => this.setState({showThreadCreateForm: false})}>Close form</Button>
               <ThreadCreateForm />
                  </div>
                : <Button onClick={() => this.setState({showThreadCreateForm: true})}>Create thread</Button>
                }
               
        </div>
    );
  }
}


// прокинуть стейт в тред не через пропсы
function mapStateToProps(state) {
  return {
   threads: state.threads,
   showThreadCreateForm: state.showThreadCreateForm
  }
}

export default connect(
  mapStateToProps, {
      fetchThread,
      
}
)(Board)