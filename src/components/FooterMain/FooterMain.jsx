import React from 'react';
import logo from '../../assets/img/core-img/logo2.png';
import { Link } from 'react-router-dom';
import * as URL from '../../router/url';
import { withRouter } from 'react-router';

function FooterMain(props) {

    const route = props.location.pathname;

    return (
        <footer className="footer_area clearfix">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-12 col-lg-4">
                        <div className="single_widget_area">
                            <div className="footer-logo mr-50">
                                <Link to={URL.HOME}><img src={logo} alt="AmadO Furniture™" /></Link>
                            </div>
                            <p className="copywrite">
                                Copyright &copy;
                                All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib(90%) & DerevoXP(10%) Make love not war! ;)</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8">
                        <div className="single_widget_area">
                            <div className="footer_menu">
                                <nav className="navbar navbar-expand-lg justify-content-end">
                                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#footerNavContent" aria-controls="footerNavContent"
                                        aria-expanded="false" aria-label="Toggle navigation"><i
                                            className="fa fa-bars"></i></button> */}
                                    <div className="collapse navbar-collapse" id="footerNavContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link to={URL.HOME} className={route === "/home" ? "nav-link active" : "nav-link"}>Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={URL.SHOP} className={route === "/shop" ? "nav-link active" : "nav-link"}>Shop</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={URL.CART} className={route === "/cart" ? "nav-link active" : "nav-link"}>Cart</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={URL.CHECKOUT} className={route === "/checkout" ? "nav-link active" : "nav-link"}>Checkout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default React.memo(withRouter(FooterMain));