import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReportsE extends Component {
  render() {
    return (
      <div>
        <p>
          <Link class="mdl-navigation__link" to="/Seasons">
            <button type="button" class="btn btn-success btn-lg btn3d">
             Export  CSV
            </button>
          </Link>
        </p>
      </div>
    );
  }
}

export default ReportsE;
