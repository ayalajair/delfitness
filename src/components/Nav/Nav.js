import React from "react";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
        return (
            <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" >
                            <img src="#" alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                            Delfitness
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            </ul>
                    </div>
            </nav>
        )
    }

export default Nav;