import React, { Component } from "react";
import { Link } from "react-router-dom";

class SeasonsE extends Component {
  render() {
    return (
      <div>
        <p>
          <Link class="mdl-navigation__link" to="/Addseason">
            <button type="button" class="btn btn-success btn-lg btn3d">
            Add Season
            </button>
          </Link>
        </p>
      </div>
    );
  }
}

export default SeasonsE;
