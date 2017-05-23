// Modules
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// Components
import Threads from './Thread/Threads';
import Home from './Home';
import NotFound from './NotFound';
import FlashMessagesList from './features/flash/FlashMessagesList';
import {Menu, Dropdown, Item, Segment} from 'semantic-ui-react';
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
        <div className="ui inverted four item menu">
         <Menu.Item>
          <img size='medium' src='http://static2.fjcdn.com/comments/You+shoul+make+out+with+the+same+guy+op+to+_17d2ddd197fa4dbf17ea46fcde43ad22.png' />

        </Menu.Item>
        
       <ActiveLink activeOnlyWhenExact to="/" label="null" />
       <ActiveLink activeOnlyWhenExact to="/threads" label="list" /> 
            <FlashMessagesList />
     
         <ActiveLink activeOnlyWhenExact to="/thread/id" label="selected" />                 
        </div>
        <Route exact path="/threads" component={Threads} />
         <Route exact path="/" component={Home} />
          <Route handler={NotFound} name="not-found" />
      </div>
    );
  }
}

export default App;