import React from 'react';
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header} from 'semantic-ui-react';
// Styles
// import postForm from '.../styles/postForm.scss';

class PostCard extends React.Component {
  render() {
    const {post, image, select, text, name, id} = this.props;
  
  return(
      <Item>   
        <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={post.image} alt='no img' />}>
    <Modal.Content image>
          <Item.Image src={post.image} />
        </Modal.Content>
      </Modal>
        <Item.Content as='h5'>
              №{post.id}
              <Item.Header as='' className='extra content'>
              <p>{post.name}</p>
              {post.date}
              </Item.Header>
              <Item.Description  className='extra coqweqwaeaedasdntent'>
                <Message color='blue'>
                {post.text}
                </Message>
              </Item.Description>
            <Item.Extra as=''>
                </Item.Extra>
        </Item.Content>
                <div className=''>
                </div>

      </Item>

    );
  
}
}

export default PostCard;