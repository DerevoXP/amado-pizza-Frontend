import React from 'react';
import CartProduct from '../components/cart/cart_product';
import {
    updateCart,
    updateFuckingCrutch,
    engineLoaderMazaFucker,
} from '../store/action_creatores';
import { connect } from 'react-redux';
import Spinner from "../components/spinner";
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as URL from '../router/url';

CartPage.propTypes = {
    cart: PropTypes.array,
    catalog: PropTypes.array,
    catalogLoading: PropTypes.bool,
    engineLoaderMazaFucker: PropTypes.func,
    fuckingCrutch: PropTypes.bool,
    updateCart: PropTypes.func,
    updateFuckingCrutch: PropTypes.func,
};

function CartPage(props) {

    const {
        cart,
        catalog,
        catalogLoading,
        engineLoaderMazaFucker,
        fuckingCrutch,
        updateCart,
        updateFuckingCrutch,
    } = props;

    if (fuckingCrutch) { // по-хорошему можно было бы запускать итерируемый рендер для одного товара, но сервер редиска и такого нам не позволяет
        engineLoaderMazaFucker("catalog"); // я уже объяснял, на кой хер эти танцы с тамбуринами, на странице src/pages/home,
        updateFuckingCrutch(false); // так что не вижу смысла повторяться. И вообще, я устал и хочу нормального секса с живой женщиной, а не этого вот.
    };

    if (catalogLoading) {
        return (<Spinner />);
    };

    let newSum;
    function SumCounter() {
        newSum = 0;
        for (let i = 0; i < cart.length; i++) {
            let curSum = cart[i].price * cart[i].amount;
            newSum = newSum + curSum;
        };
    };
    SumCounter();

    let totalSum = newSum < 189 && cart.length ? newSum + 10 : newSum;
    let delivery = totalSum < 200 && cart.length ? "$10" : "Free!";
    let eur = totalSum !==0 ? (totalSum * 1.0842).toFixed(1) : 0;
    let delStyle = cart.length ? "" : "none";

    const handlerCartQuantity = (operator, ident) => { // раньше это была не константа, а функция (some sort eggs)

        if (operator === "plus") { // увеличиваем количество товара
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].item === ident) {
                        cart[i].amount++;
                        updateCart(cart);
                };
            };
        } else { // уменьшаем количество товара
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].item === ident) {
                    if (cart[i].amount > 1) {
                        cart[i].amount--;
                        updateCart(cart);
                    } else {
                        cart.splice(i, 1);
                        updateCart(cart);
                    };
                };
            };
        };
        localStorage.setItem(`cartInfo`, JSON.stringify(cart)); // обновляем локалсторож
        SumCounter();
    };

    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 col-lg-8">
                        <div className="cart-title mt-50">
                            <h2>Your order:</h2>
                        </div>
                        <div className="cart-table clearfix">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <CartProduct
                                        cart={cart}
                                        catalog={catalog}
                                        onChange={handlerCartQuantity} />

                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* выводим стоимость всех товаров */}
                    <div className="col-12 col-lg-4">
                        <div className="cart-summary">
                            <h5>Cart total</h5>
                            <ul className="summary-table">
                                <li style={{display: `${delStyle}`}}><span>delivery:</span> <span>{delivery}</span></li>
                                <li><span>all:</span> <span>${totalSum} / €{eur}</span></li>
                            </ul>
                            <div className="cart-btn mt-100">
                                <Link to={URL.CHECKOUT} className="btn amado-btn w-100">CHECKOUT</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        cart: store.app.cart,
        catalog: store.app.catalog.data,
        catalogLoading: store.app.isLoading.catalog || false,
        fuckingCrutch: store.app.fuckingCrutch,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (array) => dispatch(updateCart(array)),
        engineLoaderMazaFucker: (actions) => dispatch(engineLoaderMazaFucker(actions)),
        updateFuckingCrutch: (bool) => dispatch(updateFuckingCrutch(bool)),
    };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CartPage));