import React from 'react';
import { connect } from 'react-redux';
import Spinner from "../components/spinner";
import { Link } from 'react-router-dom';
import * as URL from '../router/url';
import * as PropTypes from 'prop-types';
import { updateCart } from '../store/action_creatores';

Product.propTypes = {
    catalog: PropTypes.array,
    match: PropTypes.object,
    catalogLoading: PropTypes.bool,
    cart: PropTypes.array,
    updateCart: PropTypes.func,
};

function Product(props) {

    const {
        catalog,
        match,
        catalogLoading,
        cart,
        updateCart,
    } = props;

    if (catalogLoading) {
        return (<Spinner />);
    };

    if (!catalog[match.params.code - 1]) {
        return (
            <h6 style={{
                margin: "50px",
                padding: "5px",
                color: "red",
                border: "solid red 2px",
                borderRadius: "5px",
                height: "fit-content",
            }}>ID ERROR! <br />
            A product with this ID is not in the database. <br/>
            Buy yourself better than an ordinary goose in an ordinary place <br/>
            and fuck the brain to him, not the server, please.<br/>
            Thank you.</h6>
        )
    };

    let item = catalog[match.params.code - 1];
    let catName; // для хлебных крошек
    let cartItemBayStatus = "Add to cart"; // надпись на кнопке

    if (item[5] === '1') {
        catName = "PIZZA"
    } else {
        catName = "SUSHI"
    };

    let eur = (item[3] * 1.0842).toFixed(1);

    function handleAddToCart(e) { // добавляем товар в корзину
        if (!cart.find(elem => elem.item === e.target.getAttribute('name'))) {
            cart.push({ item: e.target.getAttribute('name'), amount: 1, price: Number(e.target.getAttribute('price')) });
            updateCart(cart);
            localStorage.setItem(`cartInfo`, JSON.stringify(cart));
        };
    };

    for (let i = 0; i < cart.length; i++) { // функция удаления из корзины бесплатно доступна только из меню корзины. И ниипёт.
        if (cart.find(elem => elem.item === item[0])) {
            cartItemBayStatus = "Added";
        };
    };

    return (
        <div className="single-product-area section-padding-100 clearfix">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mt-50">
                                <li className="breadcrumb-item"><Link to={URL.HOME}>HOME</Link></li>
                                <li className="breadcrumb-item"><Link to={URL.SHOP}>SHOP</Link></li>
                                <li className="breadcrumb-item"><Link to={`${URL.SHOP}/${item[5]}`}>{catName}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{item[1]}</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="single_product_thumb">
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active"
                                        style={{ heifht: "100%" }}
                                    >
                                        <img className="d-block w-100"
                                            src={`http://a0438483.xsph.ru/img/${item[2]}`}
                                            alt="First slide" />

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className="single_product_desc">

                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">${item[3]} / €{eur}</p>
                                <h6>{item.title}</h6>

                                <p className="avaibility"><i className="fa fa-circle"></i> In Stock {item.available}</p>
                            </div>

                            <br />
                            <br />

                            <div>
                                <h5>{item[4]}</h5>
                            </div>

                            <br />

                            <div className="cart clearfix">
                                <button
                                    className="btn amado-btn"
                                    name={item[0]}
                                    price={item[3]}
                                    onClick={(e) => { handleAddToCart(e) }}
                                >

                                    { cartItemBayStatus }

                                </button>
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
        catalog: store.app.catalog.data,
        catalogLoading: store.app.isLoading.catalog || false,
        cart: store.app.cart,
        sum: store.app.sum,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (array) => dispatch(updateCart(array)),
    };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Product));