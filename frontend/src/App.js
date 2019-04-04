import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Design/Header";
import Reports from "./components/containers/Reports";
import Home from "./components/containers/Home";
import Farmers from "./components/containers/Farmers";
import Officers from "./components/containers/Officers";
import Login from "./components/containers/Login";
import Seasons from "./components/containers/Seasons";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Switch>
            <main class="mdl-layout__content">
              <Route exact path="/" component={Home} />
              <Route path="/Login/" component={Login} />
              <Route path="/Officers" component={Officers} />
              <Route path="/Farmers" component={Farmers} />
              <Route path="/Reports" component={Reports} />
              <Route path="/Seasons" component={Seasons} />
            </main>
          </Switch>
          <footer class="mdl-mini-footer">
          <div class="mdl-mini-footer__left-section">
            <div class="mdl-logo">pride farm</div>
          </div>
          <div class="mdl-mini-footer__right-section">
            <ul class="mdl-mini-footer__link-list">
              <li><a href="/home">Help</a></li>
              <li><a href="/">Privacy & Terms</a></li>
            </ul>
          </div>
        </footer>

        </div>
      </Router>
      
     
    );
 
  }
}

export default App;





