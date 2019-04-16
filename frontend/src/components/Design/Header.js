import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        
                
        <div className="side">
          <nav className="sider">
            {/* <Link className="mdl-navigation__link is-active" to="/Login">
              Login
            </Link> */}
            <Link className="mdl-navigation__link" to="/Officers">
             Officers
            </Link>
            <Link className="mdl-navigation__link" to="/Farmers">
              Farmers
            </Link>
            <Link className="mdl-navigation__link" to="/Reports">
              Reports
            </Link>
            <Link className="mdl-navigation__link" to="/Seasons">
              Seasons
            </Link>
          
          </nav>
        </div>

            
        
      </Fragment>
    );
  }
}
