import React from "react";

const AccordianItem = (props) => {
    return (
        <div className="accordian-card">
            <div className="accordian-heading">
                <a>{props.title}</a>
            </div>
            <div className="accordian-body">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default AccordianItem;