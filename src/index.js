import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Users from './users'
import Contact from './contact'
import NotFound from './notFound'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>

      <ul>
        <li><NavLink exact activeClassName="active" to = "/">Home</NavLink></li>
        <li><NavLink exact activeClassName="active" to = "/users">Users</NavLink></li>
        <li><NavLink exact activeClassName="active" to = "/contact">Contact</NavLink></li>
      </ul>
      <hr></hr>
      
      <Switch>

      <Route exact path="/" component={App} />
      <Route exact path="/users" component={Users} />
      {/* <Route path="/users/:id" component={Users} /> */}
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
      </Switch>
      
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
// reportWebVitals(console.log);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
