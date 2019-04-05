import React, { Component } from "react";
import { Link } from "react-router-dom";

class OfficersE extends Component {
  render() {
    return (
      <div>
        <p>
          <Link class="mdl-navigation__link" to="/Register">
            <button type="button" class="btn btn-success btn-lg btn3d">
              Add Account
            </button>
          </Link>
        </p>
      </div>
    );
  }
}

export default OfficersE;
