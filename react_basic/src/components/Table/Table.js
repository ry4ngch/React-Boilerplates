import React, {useRef, useEffect, Fragment, useLayoutEffect} from "react";
import {initDraggableTable, initPagination} from "../../utils/Salient/salient-table";
import classNames from "classnames";

const Table = (props) => {
    const ref = useRef();

    useEffect(() => {
        if(props.draggable){
            initDraggableTable();
        }
    }, [props.draggable])

    useEffect(() => {
        if (props.maxRows) {
            initPagination(props.maxRows);
        }
        
    }, [props.maxRows, props.children])

    const tableClasses = classNames('sl-table', {
        'table-draggable': props.draggable
    })

    return (
        <Fragment>
            <table className={`${tableClasses} ${props.className || ''}`} ref={ref} onDragEnd={props.onDragUpdate}>
                {props.children}
            </table>

            {/* Start Pagination*/}
            {props.maxRows &&
			<div className='pagination-container' >
			    <nav>
				    <ul className="pagination">
                        <li data-page="prev">
							<span> &#60; <span className="sr-only">(current)</span></span>
						</li>
                        <li data-page="next">
							<span>	&#62; <span className="sr-only">(current)</span></span>
						</li>
				     </ul>
				</nav>
			</div>}
        </Fragment>
        
    )
}

Table.defaultProps = {
    draggable: false
}

export default Table;