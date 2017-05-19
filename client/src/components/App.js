import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Threads from './Thread/Threads';
import Home from './Home';
import NotFound from './NotFound';
const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
       <ActiveLink activeOnlyWhenExact to="/" label="Нулевая" />
       <ActiveLink activeOnlyWhenExact to="/threads" label="Треды" />
        
        </div>
        <Route exact path="/threads" component={Threads} />
         <Route exact path="/" component={Home} />
          <Route handler={NotFound} name="not-found" />
      </div>
    );
  }
}

export default App;