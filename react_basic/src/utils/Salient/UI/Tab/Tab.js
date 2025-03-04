import React, {useState} from "react";
import classNames from "classnames";

const Tab = (props) => {
    const tabClass = classNames('tabbed-content', {
        'tabs-side': props.sideTabs,
    });

    const [isActiveIndex, setIsActiveIndex] = useState(0);

    return (
        <article className={tabClass}>
            {React.Children.map(props.children, (child, index) => 
                React.isValidElement(child) ? React.cloneElement(child, {
                    ...child.props,
                    isActiveIndex,
                    setIsActiveIndex
                }) : child
            )}
        </article>
    );
}

Tab.defaultProps = {
    sideTabs: false
}

const TabContent = (props) => {
    return (
        <div className="tab-content-wrapper">
            {React.Children.map(props.children, (child, index) => 
                React.isValidElement(child) ? React.cloneElement(child, {
                    ...child.props, 
                    className: [child.props.className, props.isActiveIndex === index ? 'active' : ''].join(' ').trim() 
                }) : child
            )}
        </div>
    )
}

const TabItems = (props) => {
    const tabItemsClass = classNames('tabs', {
        'tabs-underline': props.tabStyleActive == 'underline',
    });

    const handleClick = (index, event) => {
        event.preventDefault(); // Prevent anchor tags or button default behavior
        props.setIsActiveIndex(index); // Update state without causing page scroll
    }

    return (
        <nav className={tabItemsClass}>
            <ul>
                {React.Children.map(props.children, (child, index) => 
                    React.isValidElement(child) ? React.cloneElement(child, {
                        ...child.props,
                        children: React.Children.map(child.props.children, (grandChild) =>
                            React.isValidElement(grandChild) ? React.cloneElement(grandChild, {
                                ...grandChild.props,
                                onClick: (e) => handleClick(index, e), 
                                className: props.isActiveIndex === index ? 'active' : ''  
                            }) : grandChild 
                        )
                    }) : child
                )}
            </ul>
        </nav>
    )
}

TabItems.defaultProps = {
    tabStyleActive: 'box'
}


export default Tab;
export {TabContent, TabItems};