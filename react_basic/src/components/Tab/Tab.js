import React from "react";
import TabContent from './TabContent';
import TabItems from "./TabItems";
import '../../utils/Salient/salient-tabs';
import classNames from "classnames";

const Tab = (props) => {
    const tabClass = classNames('tabbed-content', {
        'tabs-side': props.isVert,
    });
    

    return (
        <article className={tabClass}>
            <TabItems />
            <TabContent />
            
        </article>
    );
}

Tab.defaultProps = {
    isVert: false
}


export default Tab;