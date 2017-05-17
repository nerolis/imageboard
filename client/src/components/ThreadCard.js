import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed} from 'semantic-ui-react';
export default function ThreadCard({ thread }) {
  return(
      // todo: добавить айди, дату
       <Item>
       <Item.Header>
      </Item.Header>
      <Item.Meta as=''>
      </Item.Meta>
      <Item.Image className=''size='small' src={thread.image}/>
      
      <Item.Content>        
                             <a size='small' className=''>{thread.date}</a>
        <Item.Description>
         <div
         className='ui segment'
         >
         
         <p>{thread.text}</p>

          </div> 
          
        </Item.Description>
        
        <Button className="ui primary button" onClick={() => select()}>Reply</Button>
        <Icon name='like' />
        
      </Item.Content >
      
    </Item>
    );
}