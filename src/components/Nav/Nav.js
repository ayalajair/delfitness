import React from "react";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/logo-delfitness.png'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";


const Nav = () => {
        return (
        <header className="navbar navbar-dark bg-dark navbar-expand-lg bd-navbar sticky-top">
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" >
                                <NavLink className="navbar-brand" to='/' >
                                        <img src={img} alt="logo" width="150" height="40" className="d-inline-block align-text-top"/>
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                                <NavLink className="nav-link" to='/'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink className="nav-link" to='/category/indumentaria'>Indumentaria</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink className="nav-link" to='/category/accesorios'>Accesorios</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink className="nav-link" to='/category/suplementos'>Suplementos</NavLink>
                                        </li>
                                        <li></li>
                                </ul>
                                <div>
                                        <NavLink to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <CartWidget/>        
                                        </NavLink>
                                </div>
                                </div>
                                
                </nav>
        </header>
        )
}

export default Nav;