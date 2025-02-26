import React, { useRef, useEffect, Fragment, useState } from "react";
import { initDraggableTable, initPagination } from "../../utils/Salient/salient-table";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Table = (props) => {
    const ref = useRef();
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownList, setDropdownList] = useState([]);
    const [hiddenColumns, setHiddenColumns] = useState({});

    useEffect(() => {
        if (props.draggable) {
            initDraggableTable();
        }
    }, [props.draggable]);

    useEffect(() => {
        if (props.maxRows) {
            initPagination(props.maxRows);
        }
    }, [props.maxRows, props.children]);

    useEffect(() => {
        setDropdownList(props.columns || []);
        setHiddenColumns(Object.fromEntries(
            (props.columns || []).map((_, index) => [index, false]) // Initialize all columns as visible
        ));
    }, [props.columns]);

    const toggleColumnVisibility = (index) => {
        setHiddenColumns((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const tableClasses = classNames('sl-table', {
        'table-draggable': props.draggable
    });

    return (
        <Fragment>
            {props.showColToggleUI && <div className={`dropdown-btn btn-group ${dropdownState ? 'dropdown-open' : ''}`}>
                <button
                    aria-haspopup="true"
                    aria-expanded={dropdownState}
                    className="btn"
                    onClick={() => setDropdownState(!dropdownState)}
                >
                    <span className="icon icon-filter">
                    </span>
                </button>
                {dropdownState && (
                    <ul className="btn-dropdown-menu">
                        {dropdownList.map((field, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={() => toggleColumnVisibility(index)}
                                        checked={!hiddenColumns[index]}
                                    />
                                    {field}
                                </label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>}

            <table className={`${tableClasses} ${props.className || ''}`} ref={ref} onDragEnd={props.onDragUpdate}>
                <thead>
                    <tr>
                        {props.columns.map((columnName, index) => (
                            <th key={index} className={hiddenColumns[index] ? 'hide-table-col' : ''}>
                                {columnName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Pass the hiddenColumns state to <Row> to decide which column to hide*/}
                    {React.Children.map(props.children, (child) => 
                        React.isValidElement(child) ? React.cloneElement(child, { hiddenColumns }) : child
                    )}
                </tbody>
            </table>

            {props.maxRows && (
                <div className='pagination-container'>
                    <nav>
                        <ul className="pagination">
                            <li data-page="prev">
                                <span>&#60; <span className="sr-only">(previous)</span></span>
                            </li>
                            <li data-page="next">
                                <span>&#62; <span className="sr-only">(next)</span></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </Fragment>
    );
};

Table.defaultProps = {
    draggable: false,
    columns: [],
};

export default Table;
