import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <header>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/threads">threads</Link>
      {' '}
    </header>
    {children}
  </div>
)

const Home = () => (<div>Home!</div>)
const Foo = () => (<div>Foo!</div>)


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="foo" component={Threads}/>
  </Route>
)

export default routes