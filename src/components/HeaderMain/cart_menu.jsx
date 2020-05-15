import React from 'react';
import { connect } from 'react-redux';
import cart from '../../assets/img/core-img/cart.png';
import * as URL from '../../router/url';
import { Link } from 'react-router-dom';

function CartMenu(props) { // увеличивающая энтропию дополнительная кнопка корзины

    let counter = 0;

    function cartCounter() {

        if (props.cart.length) {

            for (let i = 0; i < props.cart.length; i++) {
                counter += props.cart[i].amount;
            };
            return (<>{counter}</>)
        } else {
            return (<>0</>)
        };
    };

    return (
        <div className="cart-fav-search mb-100">
            <Link to={URL.CART}><img src={cart} alt="" /> Cart <span>({cartCounter()})</span></Link>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        cart: store.app.cart,
    };
};

export default React.memo(connect(mapStateToProps)(CartMenu));