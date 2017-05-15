import React from 'react';
import { Image, Item , Message, Button} from 'semantic-ui-react';

export default function ThreadCard({thread}) {
  return(
      
      <Item>
      <Item.Image size='small' floated src={thread.image} />
      <Item.Content>
        <Item.Header as='a'>{thread.name}
        </Item.Header>
        <Item.Meta>ID:{Date.now()}</Item.Meta>
        <Item.Description>
         <Message floating warning>
         {thread.text}
          </Message>     
        </Item.Description>
      </Item.Content>
    </Item>
    );
}