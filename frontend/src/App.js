import React, { Component } from 'react';
import Login from './components/containers/Login';
import Dashboard from './components/containers/Dashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
 
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
             
          <Switch>         
            
          <Route exact path="/Login/" component={Login} />
          <Route exact path="/Dashboard/" component={Dashboard} />
            
          </Switch>

          
        </div>
      </Router>
    );
  }
}

export default App;





