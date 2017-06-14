import React from 'react';
import {Form, Container, Message, Label, Button, TextArea} from 'semantic-ui-react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
const Messages = (props) => {
const Data = {
    image: 'http://piq.codeus.net/static/media/userpics/piq_366969_400x400.png',
    name: 'Cirno',
    msg: 'Some text mock,  hello',
    date: 42
}
return (
  <List selectable ripple>
    <ListItem
      avatar={Data.image}
      caption={Data.name}
      legend={Data.msg}
    />
 <ListDivider />
 </List>
)
}
export default Messages;