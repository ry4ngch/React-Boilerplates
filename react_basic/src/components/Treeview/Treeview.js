import React, {useEffect} from "react";
import initTreeview from "../../utils/Salient/salient-treeview";

const Treeview = (props) => {
    useEffect(() => {
        initTreeview();
    }, [])

    return (
        <section className="list-tree">
            <ul>
                <li><span>Item 1</span>
                    <ul>
                        <li><span>1.1</span></li>
                        <li><span>1.2</span></li>
                    </ul>
                </li>
                <li><span>Item 2</span> <span className='comment'>(no children)</span></li>
                <li><span>Item 3</span>
                    <ul>
                        <li><span>3.1</span></li>
                        <li><span>3.2</span> <span className='comment'>(with extra levels)</span>
                            <ul>
                                <li><span>3.2.1</span></li>
                                <li><span>3.2.2</span> <span className='comment'>(we can continue adding levels)</span>
                                    <ul>
                                        <li><span>3.2.2.1</span>
                                            <ul>
                                                <li><span>3.2.2.1.1</span></li>
                                                <li><span>3.2.2.1.2</span></li>
                                                <li><span>3.2.2.1.3</span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                     </ul>
             </li>
            <li><span>Item 4</span></li>
            <li><span>Item 5</span></li>
        </ul>
      </section>
    )
}

export default Treeview;