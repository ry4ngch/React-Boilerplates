import React from "react";
import TabContent from './TabContent';
import TabItems from "./TabItems";
import '../../utils/Salient/salient-tabs';
import classNames from "classnames";



const Tab = (props) => {
    const tabClass = classNames('tabbed-content', {
        'tabs-side': props.sideTabs,
    });
    

    return (
        <article className={tabClass}>
            <TabItems tabStyleActive={props.tabStyleActive}/>
            <TabContent/>
            
        </article>
    );
}

Tab.defaultProps = {
    sideTabs: false
}


export default Tab;