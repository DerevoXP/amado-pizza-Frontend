import React from 'react';
import image from '../../assets/img/core-img/logo.png';
import { Link } from 'react-router-dom';
import * as URL from '../../router/url';


function MobileNav(props) {

    return (
        <div className="mobile-nav">
            <div className="amado-navbar-brand">
                <div><Link to={URL.HOME}><img src={image} alt="AmadO Furniture™" /></Link></div>
            </div>
            <div style={{width: "50%", display: "flex", justifyContent: "space-around"}}>
                <Link style={{ cursor: "pointer", fontSize: "16px" }} to={URL.HOME}> HOME </Link> | 
                <Link style={{ cursor: "pointer", fontSize: "16px" }} to={URL.SHOP}> SHOP </Link> | 
                <Link style={{ cursor: "pointer", fontSize: "16px" }} to={URL.CART}> CART </Link>
            </div>
        </div>
    );
}

export default React.memo(MobileNav);