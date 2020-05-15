import React, { Suspense } from 'react';
import { connect } from 'react-redux'; // соединяем реакт и ридакс
import { BrowserRouter } from 'react-router-dom';
import { engineLoaderMazaFucker, updateCart } from './store/action_creatores'; // для пропсов
import pageElements from './router/router'; // это все загружаемые страницы из роутера
import Spinner from './components/spinner';
import MobileNav from './components/MobileNav/mobile_nav';
import HeaderMain from './components/HeaderMain/HeaderMain';
import FooterMain from './components/FooterMain/FooterMain';

class App extends React.Component {

    componentDidMount() {

        this.props.engineLoaderMazaFucker();

        if (localStorage.cartInfo === undefined) {
            localStorage.setItem(`cartInfo`, JSON.stringify([])); // если новая машина и локалсторож пуст
        } else {
            this.props.updateCart(JSON.parse(localStorage.getItem('cartInfo'))); // иначе копируем корзину локалсторожа в state
        }       
    }

    render() {
        return (
            <BrowserRouter>
                <div className="main-content-wrapper d-flex clearfix">
                    <MobileNav />
                    <HeaderMain />
                    <Suspense fallback={<Spinner />}>
                        { pageElements }
                    </Suspense>
                </div>
                <FooterMain />
            </BrowserRouter>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        engineLoaderMazaFucker: (actions) => dispatch(engineLoaderMazaFucker(actions)),
        updateCart: (cart) => dispatch(updateCart(cart)),
    };
};

export default connect(null, mapDispatchToProps)(App);