import React, {useEffect} from "react";
import initTreeview from "../../utils/Salient/salient-treeview";

const Treeview = (props) => {
    useEffect(() => {
        initTreeview();
    }, [])

    return (
        <section className="list-tree">
            <ul>
                {props.children}    
            </ul>
      </section>
    )
}

const TreeItem = ({ children, text, subtext }) => {
    return (
        <li>
            <span>{text}</span>
            {subtext && <span className='comment'>{subtext}</span>}
            {children &&
                <ul>
                    {React.Children.map(children, (child) => 
                        React.isValidElement(child) ? React.cloneElement(child) : child
                    )}
                </ul>
            }
        </li>
    )
}

export default Treeview;
export {TreeItem};