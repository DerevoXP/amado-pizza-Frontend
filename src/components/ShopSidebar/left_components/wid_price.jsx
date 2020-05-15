// npm install --save rc-slider // устанавливаем библиотеку слайдера, потому что мы {вписать нужное}, чтоб родить её самостоятельно
import React from 'react';
import Spinner from '../../spinner';
import { connect } from 'react-redux';
import { updatePriceFilter } from '../../../store/action_creatores';
import * as PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';

WidPrice.propTypes = {
    pricesLoading: PropTypes.bool,
    priceFilter: PropTypes.array,
    updatePriceFilter: PropTypes.func,
};

function WidPrice(props) {

    if (props.pricesLoading) {
        return (<Spinner />);
    };

    let priceMin = 0;
    let priceMax = 100;

    const priceFilter = props.priceFilter;

    let mine = priceFilter[0];
    let maxe = priceFilter[1];

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    function sliderChange(e) {
        mine = e[0];
        maxe = e[1];
    };

    function checkerModify() {
        if (mine !== priceFilter[0] || maxe !== priceFilter[1]) {
            props.updatePriceFilter([mine, maxe])
        };
    };

    return (
        <div className="widget price mb-50">
            <h6 className="widget-title mb-30">Price</h6>

            <div className="widget-desc">
                <div className="slider-range">

                    <div>
                        <div
                            onMouseLeave={(e) => checkerModify(e)} // это пиздец, товарищи
                            onMouseUp={(e) => checkerModify(e)} // и это тоже пиздец. ИМХО
                        >
                            <Range
                                min={parseInt(priceMin)}
                                max={parseInt(priceMax)}
                                defaultValue={[`${priceFilter[0]}`, `${priceFilter[1]}`]}
                                tipFormatter={value => `${value}$`}
                                onChange={(e) => sliderChange(e)}

                            />
                        </div>
                    </div>

                    <div className="range-price">
                        ${priceFilter[0]} - ${priceFilter[1]}
                    </div>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        priceFilter: store.app.priceFilter,
        pricesLoading: store.app.isLoading.prices || false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePriceFilter: (array) => dispatch(updatePriceFilter(array)),
    };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(WidPrice));