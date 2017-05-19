import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed, Card} from 'semantic-ui-react';
// Styles
// import postForm from '.../styles/postForm.scss';

export default function ThreadCard({ thread }) {
  return(
      // todo: добавить айди, дату
      
      <Item>
        <Item.Image size='small' src={thread.image} alt='no img' />
        <Item.Content>
          <Item.Header className='extra content'>
          {thread.name}        
          </Item.Header>
           {thread.date}
          <Item.Description className='extra content'>
            {thread.text}
          </Item.Description>
          <Button></Button>
        </Item.Content>
        
        <div className=''>
 <Button.Group size='mini'attached='top' vertical>
    <Button basic color='blue'>Reply</Button>
    <Button basic color='black'>Test</Button>
    <Button basic color='black'>Test</Button>
    <Button basic color='black'>Test</Button>
  </Button.Group>
  </div>
      </Item>

    );
}
