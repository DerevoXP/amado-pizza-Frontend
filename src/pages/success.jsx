import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../router/url';

function success() {
    return (
        <div>
            <h2 style={{
                margin: "50px",
                padding: "10px",
                color: "gold",
                border: "2px solid gold",
                borderRadius: "5px",
            }}>Your order has been successfully placed!</h2>
            <br />
            <br />
            <Link to={URL.HOME}
                className="btn amado-btn"
                style={{
                    marginLeft: "50px",
                    padding: "10px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40%"
                }}
            >I'm OK!
            </Link>
        </div>
    )
}

export default success
