import React from "react";
import classNames from "classnames";

const TabItems = (props) => {
    const tabItemsClass = classNames('tabs', {
            'tabs-underline': props.tabStyleActive == 'underline',
        });
    return (
        <nav class={tabItemsClass}>
            <ul>
                <li><a href="#tab1" class="active">Tab 1</a></li>
                <li><a href="#tab2">Tab 2</a></li>
                <li><a href="#tab3">Tab 3</a></li>
            </ul>
        </nav>
    )
}

TabItems.defaultProps = {
    tabStyleActive: 'box'
}

export default TabItems;