    import React from 'react';
    import ThreadCard from './ThreadCard';
    import {Item} from 'semantic-ui-react';
    export default function ThreadList({threads }) {
    const emptyMessage = (
        <p>Empty</p>
    );

    const ThreadList = (
              <Item.Group divided relaxed>
           {threads.map(thread => <ThreadCard thread={thread} key={thread._id} />)}
           </Item.Group>
    );

    return (
        
        <div className=''>
        {threads.length === 0 ? emptyMessage : ThreadList}
        </div>
    );
}
