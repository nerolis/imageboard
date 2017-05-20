// Modules
import React from 'react';
import {connect} from 'react-redux';
// Actions
import {fetchThread, selectThread} from '../../actions/actions';
// Styles
import {Image, Item, Container, Button, Header} from 'semantic-ui-react';
// Components
import ThreadList from './ThreadList';
import ThreadCreateForm from './ThreadCreateForm';

class Threads extends React.Component {
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
       console.log('State', this.props.likes)
        return(


      <div className=''>
               <ThreadList threads={this.props.threads}/>      
                {(this.state.showThreadCreateForm)
                ? <div> 
                <Button basic onClick={() => this.setState({showThreadCreateForm: false})}>Close form</Button>
               <ThreadCreateForm />
                  </div>
                : <Button basic onClick={() => this.setState({showThreadCreateForm: true})}>Create thread</Button>
                }
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
   threads: state.threads,
  }
}

export default connect(
  mapStateToProps, {
      fetchThread,


} 
)(Threads)