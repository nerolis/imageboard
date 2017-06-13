import React from 'react';
// Components
import {Message, Rail} from 'semantic-ui-react';
// Actions
class FlashMessage extends React.Component {
    constructor(props) {
        super(props)
            this.onClick = this.onClick.bind(this);}
        componentDidMount() {
        setTimeout(function()
        { this.props.deleteFlashMessage(this.props.message.id) }.bind(this), 
        5000);
        }
      onClick() {
    this.props.deleteFlashMessage(this.props.message.id); }
    render() {
    const {id, type, text} = this.props.message;
        return(
       <Message
           attached='bottom'
           header={type}
           content={text}
           onDismiss={this.onClick}
       />
 )}
}

export default FlashMessage;