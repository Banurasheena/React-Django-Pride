import React, { Component } from 'react';
import Login from './components/containers/Login'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,

  Switch,
 
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
             
          <Switch>         
            
           
            <Route exact path="/Login/" component={Login} />
            
          </Switch>

          
        </div>
      </Router>
    );
  }
}

export default App;





