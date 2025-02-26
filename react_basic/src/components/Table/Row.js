import React from "react";

const Row = ({ children, hiddenColumns }) => {
    return (
        <tr>
            {React.Children.map(children, (cell, index) => 
                !hiddenColumns[index] ? cell : null
            )}
        </tr>
    )
}

export default Row;