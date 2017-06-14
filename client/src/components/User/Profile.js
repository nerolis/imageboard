import React from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar, Input, Button} from 'react-toolbox';
import {Form, Container, Message, Label} from 'semantic-ui-react';
import Messages from './Messages';
class Profile extends React.Component {
    state = {
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: false
    };

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }

    toggleSidebar = () => {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    };

    render() {
        return (
            <Layout>
             <NavDrawer
                active={this.state.drawerActive}
                pinned={this.state.drawerPinned} permanentAt='xxxl'
                onOverlayClick={ this.toggleDrawerActive }
                >
                <Messages/>
             </NavDrawer>
                <Panel>
                  <AppBar leftIcon='Profile' onLeftIconClick={ this.toggleDrawerActive } />
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <Checkbox label='Messages: 1' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                        <Checkbox label='Settings' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
                    </div>
                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 10  }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                    <div style={{ flex: 2 }}>
                        <p>Settings</p>
                        <Form>
                        <Input placeholder='Default image'></Input>
                        <Input placeholder='Default name'></Input>
                        <Button>Submit settings</Button>
                        </Form>
        
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}

export default Profile;