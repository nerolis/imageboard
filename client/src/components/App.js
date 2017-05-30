// Modules
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import Threads from './Thread/Threads';
import Home from './Home';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import Dev from './Thread/Dev';
import RegisterPage from './RegisterPage';
import FlashMessagesList from './features/flash/FlashMessagesList';
import {Menu, Dropdown, Item, Segment, Button} from 'semantic-ui-react';
// Styles


const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      
    <div className="ui container">
                           <FlashMessagesList />
        <div className="ui inverted six item menu">
         <Menu.Item >
          <img size='large' src='http://static2.fjcdn.com/comments/You+shoul+make+out+with+the+same+guy+op+to+_17d2ddd197fa4dbf17ea46fcde43ad22.png' />
        </Menu.Item>
       <ActiveLink activeOnlyWhenExact to="/" label="null" />
       <ActiveLink activeOnlyWhenExact to="/threads" label="list" /> 

           <Dropdown item text='Log-In'>
        <Dropdown.Menu>
         <ActiveLink activeOnlyWhenExact to="/login" label="Login" />      
         <ActiveLink activeOnlyWhenExact to="/register" label="Register" /> 
             <ActiveLink activeOnlyWhenExact to="/dev" label="Dev" />
        </Dropdown.Menu>
      </Dropdown>
        </div>
        <Route exact path="/dev" component={Dev} />
        <Route exact path="/threads" component={Threads} />
         <Route exact path="/" component={Home} />
         <Route exact path="/login" component={LoginPage} />
          <Route handler={NotFound} name="not-found" />
          <Route exact path='/register' component={RegisterPage} />
      </div>
      
    );
  }
}

export default App;