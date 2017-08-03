import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
// Utils/Actions
import {Menu, Dropdown, Item, Segment, Button, Icon, Label} from 'semantic-ui-react';
import RequireAuth from '../../utils/RequireAuth';
import { logout } from '../../actions/login';
// Routes
import App from '../App';
import Home from '../Home/Home';
import LoginPage from '../User/LoginPage';
import Dev from './Dev';
import Threads from '../Thread/Threads';
import Board from './Board';
import RegisterPage from '../User/RegisterPage'
import Profile from '../User/Profile'
import Messages from '../User/Messages'
import Slider from '../features/Slider/Slider';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class NavigationBar extends React.Component { 
  logout(e) 
 { e.preventDefault();
   this.props.logout(); }

 render() {  
    const { isAuthenticated } = this.props.auth;
    // Navigation bar for auth users
    const userLinks = (
     <Dropdown  icon='user' item text={`${this.props.auth.login.login}`}>
        <Dropdown.Menu >
        <ActiveLink activeOnlyWhenExact to="/profile" label={`Profile`} />
        <ActiveLink  activeOnlyWhenExact to="/messages" label={`Messages`} />
        <Dropdown.Header icon='sign out' content={<Link onClick={this.logout.bind(this)} to='#'>Sign out</Link>}/>
       </Dropdown.Menu>
    </Dropdown>
    )
    // Navigation bar for guest
   const guestLinks = (
     <Dropdown item  text='Sign in' icon='sign in'>
        <Dropdown.Menu >
        <ActiveLink activeOnlyWhenExact to="/login" label='Sign in' />      
        <ActiveLink activeOnlyWhenExact to="/register" label='Register' /> 
        </Dropdown.Menu>
     </Dropdown>
    )
    return (
  <Router>
    <div className="ui container">
      <Menu.Item >
      <Icon size='large' name='github'/> <a href='https://github.com/nerolis'>Nerolis</a>
      </Menu.Item>
     <div className="ui basic small stackable teal four item tabular  menu">
      <Menu.Item >
          <img size='large' src='http://static2.fjcdn.com/comments/You+shoul+make+out+with+the+same+guy+op+to+_17d2ddd197fa4dbf17ea46fcde43ad22.png' />
      </Menu.Item>
        <ActiveLink activeOnlyWhenExact to="/" label="Home" /> 
        <ActiveLink activeOnlyWhenExact to="/board" label={`Board`} /> 
        <ActiveLink activeOnlyWhenExact to="/dev" label={`Dev`} /> 
        {isAuthenticated ? userLinks : guestLinks}
    </div>

        <Route exact path="/" component={Home}/>
        <Route path="/dev" component={RequireAuth(Dev)} />
        <Route path='/board' component={Board} />
        <Route path='/dev/slider' component={Slider} />
        <Route path="/b/" component={Threads}/>
        <Route path="/to/" component={Threads}/>
        <Route path="/login" component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/profile' component={RequireAuth(Profile)} />
        <Route path='/messages' component={RequireAuth(Messages)} />


   
    </div>
  </Router>
 )

  }
 }

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);