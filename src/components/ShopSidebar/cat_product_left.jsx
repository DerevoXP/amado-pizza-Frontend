import React from 'react';
import WidCategory from './left_components/wid_category';
import WidPrice from './left_components/wid_price';

function ShopSidebar() {

    return (
        <div className="shop_sidebar_area">
            <WidCategory />
            <WidPrice />
        </div>
    );
};

export default React.memo(ShopSidebar);