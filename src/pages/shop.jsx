import React from 'react';
import ShopSidebar from '../components/ShopSidebar/cat_product_left';
import { connect } from 'react-redux';
import {
    updateCart,
    updateSum,
    updateFuckingCrutch,
    colorFilterUpdater,
    currentCategoryUpdater,
} from '../store/action_creatores';
import { Link } from 'react-router-dom';
import * as URL from '../router/url';
import Spinner from "../components/spinner";
import cartIcon from '../assets/img/core-img/cart.png';
import fullCartIcon from '../assets/img/core-img/fullCart.png';
import DropDown from '../components/dropdown/DropDown';
import Paginator from '../components/Shop/paginator';
import * as PropTypes from 'prop-types';

ShopPage.propTypes = {
    cart: PropTypes.array,
    catalog: PropTypes.array,
    catalogLoading: PropTypes.bool,
    match: PropTypes.object,
    pagination: PropTypes.string,
    itemsOnPage: PropTypes.string,
    priceFilter: PropTypes.array,
    sum: PropTypes.number,
    updateCart: PropTypes.func,
    updateFuckingCrutch: PropTypes.func,
    updateItemOnPage: PropTypes.func,
    updateSortOnPage: PropTypes.func,
    updateSum: PropTypes.func,
    currentCategoryFilter: PropTypes.string,
    currentCategoryUpdater: PropTypes.func,
};

function ShopPage(props) {

    const {
        cart,
        catalog,
        catalogLoading,
        match,
        pagination,
        itemsOnPage,
        priceFilter,
        sum,
        updateCart,
        updateFuckingCrutch,
        updateSum,
        currentCategoryFilter,
        currentCategoryUpdater,
    } = props;

    const startItem = Number(pagination) * Number(itemsOnPage) + 1; // первый элемент, который мы будем отображать в массиве товаров
    let endItem = 1; // счётчик отображённых элементов
    let cartItemBayStatus; // статус товара "в корзине или нет"
    let cartPict; // флаг альтернативной иконки корзины
    let startPoint = 1; // с какой позиции каталога выводить товары будем, типа.
    let startIndicator = Number(pagination) * Number(itemsOnPage) + 1; // для className="total-products". Ctrl+F, бро!
    let endIndicator = startIndicator + Number(itemsOnPage) - 1; // корявенько, не точно, но не писать же отдельную функцию забесплатно?
    let filteredCatalog = [];

    updateFuckingCrutch(true); // говорим остальному миру, что мы на странице shop, и когда уйдём, мол, сбрось нахер все фильтры

    function handleAddToCart(e) { // добавляем товар в корзину
        console.log(e.target.getAttribute("price"))
        if (!cart.find(elem => elem.item === e.target.name)) {
            cart.push({ item: e.target.getAttribute("name"), amount: 1, price: Number(e.target.getAttribute("price")) });
            updateCart(cart);
            updateSum(Number(e.target.getAttribute("price")) + Number(sum));
            localStorage.setItem(`cartInfo`, JSON.stringify(cart)); // обновляем локалсторож
        };
    };

    function renderItemData() {

        if (catalogLoading) {
            return (<Spinner />);
        };

        if (match.params.code !== currentCategoryFilter && match.params.code !== undefined) {
            currentCategoryUpdater(match.params.code);
        };

        if (catalog && catalog.length) { // хз, что мы тут проверяем. Чтоб map не упал при пустом массиве?
            for (let i = 0; i < catalog.length; i++) {
                let item = catalog[i];
                if (
                    item[5] === currentCategoryFilter // фильтр по категориям (на стороне клиента)
                    && priceFilter[0] <= item[3] // вилка фильтра > по цене (на стороне клиента)
                    && priceFilter[1] >= item[3] // вилка фильтра < по цене (на стороне клиента)
                ) {
                    startPoint++;
                    if (startPoint > startItem
                        && endItem <= Number(itemsOnPage) // проверка количества элементов на странице (фильтр Viev на стороне клиента)
                    ) {
                        endItem++;
                        filteredCatalog.push(item);
                    };
                };
            };
        };

        if (catalog && catalog.length) { // хз, что мы тут проверяем. Чтоб map не упал при пустом массиве?

            return filteredCatalog.map((item) => {
            // return filteredCatalog.map((item) => {

                for (let i = 0; i < cart.length; i++) { // обновляем статус "В КОРЗИНЕ" / "НЕ В КОРЗИНЕ"
                    if (!cart.find(elem => elem.item === item[0])) { // если элемент куплен - рендерим альтернативную иконку корзины
                        cartItemBayStatus = "";
                        cartPict = false;
                    } else {
                        cartItemBayStatus = " ADDED!";
                        cartPict = true; // методом тыка, видит бог!
                    };
                };

                let eur = (item[3] * 1.0842).toFixed(1);
                return (
                    <div className="col-12 col-sm-6 col-md-12 col-xl-6"
                        key={item[0]}
                    >
                        <div className="single-product-wrapper">

                            <div className="product-img">
                                <Link
                                    className="App-link"
                                    to={`${URL.PRODUCT}/${item[0]}`}
                                ><img src={`http://a0438483.xsph.ru/img/${item[2]}`} alt="" /></Link>
                            </div>


                            <div className="product-description d-flex align-items-center justify-content-between">

                                <div className="product-meta-data">
                                    <div className="line"></div>

                                    <p className="product-price">${item[3]} / €{eur}</p>

                                    <h6><Link className="App-link" to={`${URL.PRODUCT}/${item[0]}`} >{item[1]}</Link></h6>

                                </div>

                                <div className="ratings-cart text-right">

                                    <div className="cart">
                                        <div
                                            data-toggle="tooltip"
                                            data-placement="left"
                                            title="Add to Cart"
                                        >

                                            {/* иконка корзины. Кликабле. Вариабле. Бумс! */}
                                            <img
                                                onClick={handleAddToCart}
                                                name={item[0]}
                                                src={!cartPict ? cartIcon : fullCartIcon}
                                                price={item[3]}
                                                alt={item[1]}
                                            />

                                            {/* надпись "В КОРЗИНЕ" */}
                                            <span style={{ color: "red" }}>
                                                {cartItemBayStatus}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        };
    };

    return (
        <>
            <ShopSidebar />
            <div className="amado_product_area section-padding-100">
                <div className="container-fluid">

                    {/* что касается выпадашек - ниже */}
                    <div className="row">
                        <div className="col-12">
                            <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                                <div className="total-products">

                                    {/* индикатор "с какого по какой товар отображаем" */}
                                    <p>Showing {startIndicator}-{endIndicator}</p>

                                </div>
                                <div className="product-sorting d-flex">

                                    {/* <DropDown
                                        title="Sort by"
                                        name="sortBy"
                                    /> */}

                                    <DropDown
                                        title="Viev"
                                        name="Viev"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* конец выпадашек*/}

                    <div className="row">
                        {
                            renderItemData()
                        }
                    </div>

                    {/* кнопки переключения страниц */}
                    <Paginator itemCode={currentCategoryFilter} />

                </div>
            </div>
        </>
    );
};

const mapStateToProps = (store) => {
    return {
        itemsOnPage: store.app.itemsOnPage,
        sum: store.app.sum,
        catalog: store.app.catalog.data,
        catalogLoading: store.app.isLoading.catalog || false,
        cart: store.app.cart,
        priceFilter: store.app.priceFilter,
        pagination: store.app.pagination,
        colorFilterUpdater: store.app.colorFilterUpdater,
        currentCategoryFilter: store.app.currentCategoryFilter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (e) => dispatch(updateCart(e)),
        updateSum: (e) => dispatch(updateSum(e)),
        updateFuckingCrutch: (bool) => dispatch(updateFuckingCrutch(bool)),
        colorFilterUpdater: (string) => dispatch(colorFilterUpdater(string)),
        currentCategoryUpdater: (string) => dispatch(currentCategoryUpdater(string)),
    };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ShopPage));