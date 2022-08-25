import React from "react";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/logo-delfitness.png'
import CartWidget from "../CartWidget/CartWidget";

const Nav = () => {
        return (
        <header className="navbar navbar-dark bg-dark navbar-expand-lg bd-navbar sticky-top">
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" >
                                <a className="navbar-brand" href="/" >
                                        <img src={img} alt="logo" width="150" height="40" className="d-inline-block align-text-top"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                                <a className="nav-link"  href="/">Indumentaria</a>
                                        </li>
                                        <li className="nav-item">
                                                <a className="nav-link"  href="/">Accesorios</a>
                                        </li>
                                        <li className="nav-item">
                                                <a className="nav-link"  href="/">Suplementos</a>
                                        </li>
                                        <li></li>
                                </ul>
                                <div className="text-end">
                                        <CartWidget/>
                                </div>
                                </div>
                                
                </nav>
        </header>
        )
}

export default Nav;