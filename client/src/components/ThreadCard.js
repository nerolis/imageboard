import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed} from 'semantic-ui-react';
export default function ThreadCard({thread}) {
  return(
      // todo: добавить айди, дату
      <Item>
      <Item.Image size='small'  src={thread.image} />
      <Item.Content>

        <Item.Header as='a'>{thread.name}
        </Item.Header>  
        
        <Item.Meta>ID:{Date.now()}</Item.Meta>
        <Item.Description>
         <Message
             
          
         className='message'>
         <p>
         {thread.text}
         </p>
          </Message>    
        </Item.Description>
        <Button onClick={() => select()}>Ответ</Button>
          <Icon name='like' />
           <a  className="item">{new Date().toLocaleString()}</a>
      </Item.Content >
      
    </Item>
    );
}