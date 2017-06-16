import React from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar, Input} from 'react-toolbox';
import {Form, Message, Label} from 'semantic-ui-react';
import Messages from './Messages';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import ProfileSettings from './ProfileSettings'
class Profile extends React.Component {
    componentDidMount() {
        //this.props.fetchUser();
    }
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
      const {updateSettings, auth } = this.props
      return (
        <Layout>
           <NavDrawer
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
                avatar=''
                title={auth.login.login}
                />
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
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, {fetchUser})(Profile)