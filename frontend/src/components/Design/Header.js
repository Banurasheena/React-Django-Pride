import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header class="must">
         
        <div className="card-header mx-auto bg-dark">
                <span> <img src="https://www.ingredientsnetwork.com/farmerspride-comp252078.png " className="w-75" alt="Logo" /></span>
                
                <div class="side">
          <nav class="sider">
            <Link class="mdl-navigation__link is-active" to="/Login">
              Login
            </Link>
            <Link class="mdl-navigation__link" to="/Officers">
             Officers
            </Link>
            <Link class="mdl-navigation__link" to="/Farmers">
              Farmers
            </Link>
            <Link class="mdl-navigation__link" to="/Reports">
              Reports
            </Link>
            <Link class="mdl-navigation__link" to="/Seasons">
              Seasons
            </Link>
          
          </nav>
        </div>

            </div>
        </header>
        
      </Fragment>
    );
  }
}
