import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../router/url';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

WidCategory.propTypes = {
    currentCategoryFilter: PropTypes.string,
};

function WidCategory(props) { // позорненькая компонента. Мне было уже лень. Технологию я понял.

    const {
        currentCategoryFilter,
    } = props;

    return (
        <div className="widget catagory mb-50">
            <h6 className="widget-title mb-30">Catagories</h6>
            <div className="catagories-menu">
                <ul>
                    <li className={currentCategoryFilter === "1" ? "active" : ""}><Link to={`${URL.SHOP}/1`}>Pizza</Link></li>
                    <li className={currentCategoryFilter === "2" ? "active" : ""}><Link to={`${URL.SHOP}/2`}>Sushi</Link></li>
                </ul>
            </div>
        </div>
    );
};


const mapStateToProps = (store) => {
    return {
        currentCategoryFilter: store.app.currentCategoryFilter,
    };
};

export default React.memo(connect(mapStateToProps)( WidCategory));