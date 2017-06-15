import React from 'react';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';

const Messages = () => {
    return (
    <List selectable ripple>
       <ListItem
        avatar={Data.image}
        caption={Data.name}
        legend={Data.msg} />
     <ListDivider />
    </List> 
       
 )
}

    const Data = {
    image: 'http://piq.codeus.net/static/media/userpics/piq_369078_400x400.png',
    name: 'Yakumo',
    msg: 'Some text mock,  hello',
    date: 42 } 

export default Messages;