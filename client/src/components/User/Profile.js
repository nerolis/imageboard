import React from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar, Input} from 'react-toolbox';
import {Form, Message, Label} from 'semantic-ui-react';
import Messages from './Messages';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import ProfileSettings from './ProfileSettings';
class Profile extends React.Component {
    state = {
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: false,
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
                pinned={this.state.drawerPinned} permanentAt='xxxl'>
            <Messages />
             </NavDrawer>
                <Panel>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <Checkbox label='Messages: 1' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                        <Checkbox label="Settings" checked={this.state.sidebarPinned} onChange={this.toggleSidebar}  />
                    </div>
                <Card style={{width: '350px'}}>
                <CardTitle
                avatar={Data.image}
                title={Data.name}/>
                </Card>
                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 10  }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                    <div style={{ flex: 2 }}>
                        <p>Settings</p>
                        <ProfileSettings />
                    </div>
                </Sidebar>
            </Layout>
  );
 }
}
    const Data = {
    image: 'http://piq.codeus.net/static/media/userpics/piq_366969_400x400.png',
    name: 'Cirno',
    msg: 'Some text mock,  hello',
    date: 42 } 
export default Profile;