import React from "react";

const TabItems = (props) => {
    return (
        <nav class="tabs">
            <ul>
            <li><a href="#tab1" class="active">Tab 1</a></li>
            <li><a href="#tab2">Tab 2</a></li>
            <li><a href="#tab3">Tab 3</a></li>
            </ul>
        </nav>
    )
}

export default TabItems;