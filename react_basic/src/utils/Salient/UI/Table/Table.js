import React, { useRef, useEffect, Fragment, useState } from "react";
import classNames from "classnames";

const Table = (props) => {
    /*** Table props **/
    // columns: For specifying the custom column name, this not necessary need to follow the data keys
    // showColToggleUI: For enabling the column hiding button
    // draggable: For enabling table rows to be draggable
    // onDragUpdate: After dragging event of row ends, specify a custom function to run. The custom function will
    //               receive the updated data after drag events completed 
    // data: include the row of data retrived from external file, this is required to update the whole table object and return

    const ref = useRef();

    // states for column visibility
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownList, setDropdownList] = useState([]);
    const [hiddenColumns, setHiddenColumns] = useState({});

    // states for drag event
    const [rows, setRows] = useState(props.children);
    const [highlightedRow, setHighlightedRow] = useState(null);
    const [draggedRow, setDraggedRow] = useState(null);

    // states for storing updatedData
    const [dataStore, setDataStore] = useState(props.data || []);

    useEffect(() => {
        setDropdownList(props.columns || []);
        setHiddenColumns(Object.fromEntries(
            (props.columns || []).map((_, index) => [index, false]) // Initialize all columns as visible
        ));
    }, [props.columns]);

    // update the rows after drag drop
    useEffect(() => {
        setRows(React.Children.toArray(props.children));
    }, [props.children]);

    const toggleColumnVisibility = (index) => {
        setHiddenColumns((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const tableClasses = classNames('sl-table', {
        'table-draggable': props.draggable
    });

    const handleDragStart = (index) => {
        setDraggedRow(index);
    };

    const handleDragOver = (index, e) => {
        e.preventDefault(); // Allows the drop event to occur
        setHighlightedRow(index);
    };

    const handleDragLeave = () => {
        setHighlightedRow(null); // Remove highlight if dragged item leaves the row
    };

    const handleDrop = (index) => {
        if (draggedRow === null || draggedRow === index) return;

        const updatedRows = [...rows];
        const [movedRow] = updatedRows.splice(draggedRow, 1);
        updatedRows.splice(index, 0, movedRow);

        setRows(updatedRows);
        updateDataObj(index, draggedRow);
        setDraggedRow(null);
        setHighlightedRow(null); // Clear highlight
    };

    const updateDataObj = (index, dragRow) => {
        if(props.data && props.data.length > 0){
            //create a copy of the original data
            const updatedData = [...props.data];

            // remove the drag row from the data and save it in movedRow variable
            const [movedRow] = updatedData.splice(dragRow, 1);

            // insert the movedRow to the index that we drop
            updatedData.splice(index, 0, movedRow);
            setDataStore(updatedData);
        }
    }

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

            <table className={`${tableClasses} ${props.className || ''}`} ref={ref} onDragEnd={() => props.onDragUpdate(dataStore)}>
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
                    {React.Children.map(rows, (child, index) => 
                        React.isValidElement(child) ? React.cloneElement(child, { 
                            ...child.props,
                            hiddenColumns, 
                            draggable: props.draggable,
                            onDragStart: () => handleDragStart(index),
                            onDragOver: (e) => handleDragOver(index, e),
                            onDrop: () => handleDrop(index),
                            onDragLeave: handleDragLeave,
                            isHighlighted: highlightedRow === index
                        }) : child
                    )}
                </tbody>
            </table>
        </Fragment>
    );
};

Table.defaultProps = {
    draggable: false,
    columns: [],
    data: [],
    onDragUpdate: () => {}
};

const TableRow = ({ children, hiddenColumns, draggable, onDragStart, onDragOver, onDragLeave, onDrop, isHighlighted }) => {
    return (
        <tr draggable={draggable}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            className={isHighlighted ? 'row-insert-highlight' : ''}>
            {React.Children.map(children, (cell, index) => 
                hiddenColumns?.[index] ? null : cell
            )}
        </tr>
    )
}

export default Table;
export {TableRow}
