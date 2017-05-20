import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header} from 'semantic-ui-react';
// Styles
// import postForm from '.../styles/postForm.scss';

export default function ThreadCard({ thread }) {
  return(
      <Item>   
        <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={thread.image} alt='no img' />}>
    <Modal.Content image>
          <Item.Image src={thread.image} />
        </Modal.Content>
      </Modal>
        <Item.Content>
              №  
              <Item.Header as='' className='extra content'>
              {thread.name}
              </Item.Header>
              {thread.date}
              <Item.Description className='extra content'>
                {thread.text}
              </Item.Description>
            <Item.Extra as='h4'>
                <a>>{Date.now()}</a> 
                </Item.Extra>
                <Button onClick={() => select(_id)} compact basic size='small' icon='reply' />
        </Item.Content>
                <div className=''>
        <Button.Group attached='bottom' basic size='small'>
              <Button  icon='like' />
              <Button icon='comment outline' />
              <Button icon='hide' />
              <Button icon='edit' />
        </Button.Group>
                </div>

      </Item>

    );
}
