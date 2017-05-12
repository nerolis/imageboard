import React from 'react';
import { connect } from 'react-redux'; 
// import ThreadForm from './ThreadForm';

class Thread extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          isOpened: false
      }
  }

  toggleState() {
      this.setState({isOpened: !this.state.isOpened})
  }


  render() {
            let dropdownText;
            if(this.state.isOpened) {
                dropdownText = <div>Opened</div>
            }
    return (
        <div onClick={::this.toggleState}>
            Ei!
            {dropdownText}
        </div>
       
    )
  }
}

export default Thread;
