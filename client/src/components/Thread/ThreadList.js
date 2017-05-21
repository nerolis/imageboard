    import React from 'react';
    import ThreadCard from './ThreadCard';
    import {Item, Button, Menu, Container, Header} from 'semantic-ui-react';
    import ThreadCreateForm from './ThreadCreateForm';
    
    class ThreadList extends React.Component {
       constructor() {
          super()
            this.state = {
            currentThread: undefined,
       }
      }
      render() {
        console.log('CurrentThread:', this.state.currentThread)
        const threads = this.props.threads
        return(
         <div>
          <Container>
           {
          (this.state.currentThread)
            ? <Header size='medium'>Thread: №{this.state.currentThread}</Header>
            : <ThreadCreateForm onSubmit={(threads) => this.setState({ threads })}/>
        }
            {this.renderThreads.bind(this)()}
           </Container>
         </div>
      )}     
        renderThreads() {
          const threads = this.props.threads
             return (
                <Item.Group divided relaxed>
                 {threads
                  .filter(thread => {
                    if (!this.state.currentThread) return true;
                     else return (thread.id == this.state.currentThread);
                     })
                    .map(thread =>
                    <ThreadCard
                        thread={thread}
                        key={thread._id}
                        select={(currentThread) => this.setState({ currentThread })}
                    />
                    )}
                </Item.Group>
        )}
    }
export default ThreadList;