import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
// components
import {Menu, Dropdown, Item, Segment, Button, Icon, Label} from 'semantic-ui-react';
import App from './App';
import Home from './Home/Home';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import Dev from './Thread/Dev';
import Threads from './Thread/Threads';
import Board from './Board';
import RegisterPage from './RegisterPage'
import { logout } from '../actions/login';

class NavigationBar extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
 render() {  
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
          <div className='item'>
          <Link onClick={this.logout.bind(this)} to='#'>Logout</Link>
          </div>
    )
    const guestLinks = (
        <Dropdown color='blue' item text='Log-In'>
            <Dropdown.Menu >
            <ActiveLink activeOnlyWhenExact to="/login" label="Login" />      
            <ActiveLink activeOnlyWhenExact to="/register" label="Register" /> 
            </Dropdown.Menu>
        </Dropdown>)
    return (
  <Router>
  <div className="ui container">
             <Menu.Item position='left'>
              <Icon size='large' name='github' />
               <a href='https://github.com/nerolis'>Nerolis</a>
            </Menu.Item>
         <div className="ui basic black three item menu">
           <ActiveLink activeOnlyWhenExact to="/" label="Home" /> 
           <ActiveLink activeOnlyWhenExact to="/board" label="Board" />
            { isAuthenticated ? userLinks : guestLinks }
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/dev" component={Dev} />
        <Route path="/b/" component={Threads}/>
        <Route path="/to/" component={Threads}/>
        <Route path="/login" component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/board' component={Board} />
 </div>
  </Router>
 )

  }
 }
const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
