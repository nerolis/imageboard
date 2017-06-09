// Modules
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import Threads from './Thread/Threads';
import Board from './Board';
import ThreadList from './Thread/ThreadList';
import ThreadView from './Thread/ThreadView';
import Home from './Home/Home';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import Dev from './Thread/Dev';
import RegisterPage from './RegisterPage';
import FlashMessagesList from './features/flash/FlashMessagesList';
import {Menu, Dropdown, Item, Segment, Button, Icon, Label} from 'semantic-ui-react';
// Styles


const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);
const User = ({ match }) => {
  return <h1>{console.log('Params match')} {match.params.thread.id}!</h1>
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      currentThread: undefined,
    }
  }
  
  render() {
    
    return (
      
    <div className="ui container">
                        <FlashMessagesList />
         <Menu.Item>
          <Icon size='large' name='github' />
         <a href='https://github.com/nerolis'>Nerolis</a>
        </Menu.Item>
        <div className="ui basic black three item menu">
       <ActiveLink activeOnlyWhenExact to="/" label="Home" /> 
       <ActiveLink activeOnlyWhenExact to="/board" label="Board" />
           <Dropdown color='blue'item text='Log-In'>
        <Dropdown.Menu>
         <ActiveLink activeOnlyWhenExact to="/login" label="Login" />      
         <ActiveLink activeOnlyWhenExact to="/register" label="Register" /> 
      
        </Dropdown.Menu>
      </Dropdown>
        </div>
        <Route  path="/dev" component={Dev} />
        <Route path="/b/" component={Threads}/>
         <Route exact path="/" component={Home} />
         <Route  path="/login" component={LoginPage} />
          <Route  path='/register' component={RegisterPage} />
          <Route  path='/board' component={Board} />
      </div>

      
      
    );
    
  }
  
}

export default App;