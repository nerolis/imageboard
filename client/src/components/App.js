// Modules
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import Threads from './Thread/Threads';
import ThreadList from './Thread/ThreadList';
import ThreadView from './Thread/ThreadView';
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
const User = ({ match }) => {
  return <h1>{console.log('Params match')} {match.params.thread.id}!</h1>
}
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
      
        </Dropdown.Menu>
      </Dropdown>
        </div>
        <Route  path="/dev" component={Dev} />
         <Route path="/threads/:threadId" render={() => <div>{console.log('Thread opened console from route')}</div>}/>
        <Route path="/threads" component={Threads}/>
         <Route exact path="/" component={Home} />
         <Route  path="/login" component={LoginPage} />
          <Route handler={NotFound} name="not-found" />
          <Route  path='/register' component={RegisterPage} />
      </div>

      
      
    );
    
  }
  
}

export default App;