import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Dashboard extends Component {
    
    render() {
        return (
            <div id="wrapper" >
                <div className="nav-ena">
                <nav className="navbar header-top fixed-top navbar-expand-lg  nav-ena">
                    <h1>Pride Farm</h1>
                </nav>
                </div>

                <div>
                
                <nav className="side">

                <div className="side-nav" >
                        <ul className="navbar-nav ">
                        
                        <li><Link to={"/Officers"} className="pill">Officers</Link></li>
                        <li><Link to={"/Farmers"} className="pil">Farmers</Link></li>
                        <li><Link to={"/Reports"} className="pi">Reports</Link></li>
                        <li><Link to={"/Seasons"} className="pillow ">Seasons</Link></li>
                        </ul>
                         
                </div>
                </nav>
                </div>
            </div>

        );
    }
}

export default Dashboard;