import React, { useState } from 'react';
import { connect } from 'react-redux';

function CheckoutPage(props) {

    let [customer_id, customer_idFun] = useState('');
    let [address, addressFun] = useState('');
    let [phone, phoneFun] = useState('');

    const {
        cart,
    } = props

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
    let eur = totalSum !== 0 ? (totalSum * 1.0842).toFixed(1) : 0;
    let delStyle = cart.length ? "" : "none";


    function serverOrderEngine() {
        if (customer_id !== '' && address !== '' && phone !== '') {
            localStorage.setItem(`cartInfo`, JSON.stringify([]));
        }

    }

    function formHandler(e) {
        switch (e.target.name) {
            case "customer_id":
                customer_idFun(e.target.value);
                break
            case "address":
                addressFun(e.target.value);
                break
            case "phone":
                phoneFun(e.target.value);
                break
            default:
        }
    }

    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="checkout_details_area mt-50 clearfix">

                            <div className="cart-title">
                                <h2>CHECKOUT</h2>
                            </div>

                            <form method="post" action="http://a0438483.xsph.ru/?cart" encType="multipart/form-data">
                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            name="customer_id"
                                            value={customer_id}
                                            placeholder="NAME"
                                            onChange={(e) => formHandler(e)}
                                            required
                                        />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            id="street_address"
                                            name="address"
                                            onChange={(e) => formHandler(e)}
                                            placeholder="ADDRESS"
                                            value={address}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone_number"
                                            name="phone"
                                            onChange={(e) => formHandler(e)}
                                            min="0"
                                            placeholder="PHONE"
                                            value={phone}
                                            required
                                        />
                                    </div>

                                    <div
                                        style={{ display: "none" }}
                                    >
                                        <input
                                            type="text"
                                            name="cart"
                                            value={JSON.stringify(cart)}
                                            readOnly={true}
                                        />
                                    </div>

                                </div>

                                <div className="cart-btn mt-100">
                                    <input
                                        type="submit"
                                        name="send"
                                        value="PAY FOR THE ORDER"
                                        onClick={serverOrderEngine}
                                        className="btn amado-btn w-100"
                                    />
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="cart-summary">
                            <h5>Total sum</h5>
                            <ul className="summary-table">
                                <li style={{ display: `${delStyle}` }}><span>delivery:</span> <span>{delivery}</span></li>
                                <li><span>total:</span> <span>${totalSum} / €{eur}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        cart: store.app.cart,
    };
};

export default React.memo(connect(mapStateToProps)(CheckoutPage));