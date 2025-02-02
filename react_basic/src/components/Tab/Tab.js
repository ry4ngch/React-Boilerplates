import React, {useEffect} from "react";
import TabContent from './TabContent';
import TabItems from "./TabItems";
import '../../utils/Salient/salient-tabs';
import classNames from "classnames";
import tabControl from "../../utils/Salient/salient-tabs";



const Tab = (props) => {
    const tabClass = classNames('tabbed-content', {
        'tabs-side': props.sideTabs,
    });

    useEffect(() => {
        tabControl();
    }, [])
    

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