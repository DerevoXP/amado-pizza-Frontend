import React from 'react';
import image from '../../assets/img/core-img/logo.png';
import AmadoNav from './amado_nav';
import CartMenu from './cart_menu';
import { Link } from 'react-router-dom';
import * as URL from '../../router/url';
import delivery from '../../assets/img/core-img/delivery.jpg';

function HeaderMain() {

    return (
        <header className="header-area clearfix">
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>

            <div className="logo">
                <Link to={URL.HOME}><img src={image} alt="AmadO Furniture™" /></Link>
            </div>

            <AmadoNav />

            <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: "130px", marginBottom: "40px" }} >
                    <img style={{ position: "absolute", bottom: "0", padding: "10px", border: "3px solid #FBB710", borderRadius: "5px" }} src={delivery} alt="" />
                </div>
            </div>

            <CartMenu />

            <div className="social-info d-flex justify-content-between">
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"> <i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>
    );
}

export default React.memo(HeaderMain);