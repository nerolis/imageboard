    import React from 'react';
    import ThreadCard from './ThreadCard';

    export default function ThreadList({threads }) {
    const emptyMessage = (
        <p>Empty</p>
    );

    const ThreadList = (
            <div className="">
           {threads.map(thread => <ThreadCard thread={thread} key={thread._id} />)}
           </div>
    );

    return (
        <div>
        {threads.length === 0 ? emptyMessage : ThreadList}
        </div>
    );
}
