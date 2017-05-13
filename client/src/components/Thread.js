import React from 'react';
import { Image, Item } from 'semantic-ui-react';

class Thread extends React.Component {
  render() {
    return (
    <Item>
      <Item.Image size='small' src={'https://img.memesuper.com/88c59ad922f6f6210c1c4c0543c72498_image-115779-touhou-project-project-know-your-meme-touhou-chen-meme_453-435.png'} />
      <Item.Content>
        <Item.Header as='a'>{this.props.title}</Item.Header>
        <Item.Meta>ID:{Date.now()}</Item.Meta>
        <Item.Description>
            {this.props.text}
        </Item.Description>
        <Item.Extra>Answers: </Item.Extra>
      </Item.Content>
    </Item>
    )
  }
}

export default Thread;
