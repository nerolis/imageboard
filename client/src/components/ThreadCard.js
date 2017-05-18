import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed, Card} from 'semantic-ui-react';
// Styles
import postForm from '../styles/postForm.scss';

export default function ThreadCard({ thread }) {
  return(
      // todo: добавить айди, дату
  <Card>
    <Image src={thread.image} />
    <Card.Content>
      <Card.Header as=''>{thread.name}</Card.Header>
      <Card.Meta as=''>{thread.date}</Card.Meta>
      <Card.Description className='message-field'><p>{thread.text}</p></Card.Description>
    </Card.Content>
    <Card.Content extra className='ui four buttons'>
           <div className="ui basic button blue" onClick={() => openThread(thread._id)}>Reply</div>
            <div className="ui basic button blue" onClick={() => openThread(thread._id)}>Follow</div>
    </Card.Content>
  </Card>

    );
}
