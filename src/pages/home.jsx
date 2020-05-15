import React from 'react';
import Spinner from "../components/spinner";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as URL from '../router/url';
import { engineLoaderMazaFucker, updateFuckingCrutch } from '../store/action_creatores';
import * as PropTypes from 'prop-types';

HomePage.propTypes = {
    catalog: PropTypes.array,
    catalogLoading: PropTypes.bool,
    engineLoaderMazaFucker: PropTypes.func,
    fuckingCrutch: PropTypes.bool,
    updateFuckingCrutch: PropTypes.func,
};

function HomePage(props) { // рендерим список ВСЕХ товаров в home (Яндекс смотрит на это с грустью и недоумением)

    const {
        catalog,
        catalogLoading,
        engineLoaderMazaFucker,
        fuckingCrutch,
        updateFuckingCrutch,
    } = props;

    if (fuckingCrutch) {
        engineLoaderMazaFucker("catalog"); // иначе при включённых фильтрах корзина не отображает элементы, которые не загружены с сервера из-за фильтров
        updateFuckingCrutch(false); // говорим всем остальным, что мы больше не на странице shop и каталог по-прежнему доступен в полном объёме.
    };

    function allProductsRender() {

        if (catalogLoading) {
            return (<Spinner />);
        };

        if (catalog && catalog.length) { // что мы тут проверяем и нахрена?

            return catalog.map((item) => {

                return (
                    <div className="single-products-catagory clearfix"
                        key={item[0]}
                    >
                            <Link
                                className="App-link"
                                to={`${URL.PRODUCT}/${item[0]}`}
                            >
                                <img
                                    style={{ marginTop: "140px", width: "70%"}}
                                    src={`http://a0438483.xsph.ru/img/${item[2]}`}
                                    alt={item[1]}
                                />
                            </Link>
                            <div className="hover-content">
                                <div className="line"></div>
                                <p>From ${item[3]}</p>
                                <h4>{item[1]}</h4>
                            </div>
                    </div>
                );
            });
        };
    };

    return (
        <div className="products-catagories-area clearfix">
            <div className="amado-pro-catagory clearfix"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginLeft: "20px",
                }}>
                {allProductsRender()}
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        catalog: store.app.catalog.data,
        catalogLoading: store.app.isLoading.catalog || false,
        fuckingCrutch: store.app.fuckingCrutch,
        singleImageItem: store.app.singleImageItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        engineLoaderMazaFucker: (actions, key) => dispatch(engineLoaderMazaFucker(actions, key)),
        updateFuckingCrutch: (bool) => dispatch(updateFuckingCrutch(bool)),
    };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(HomePage));