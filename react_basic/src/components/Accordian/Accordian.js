import React from "react";
import AccordianItem from "./AccordianItem";
import "../../utils/Salient/salient-accordian";

const Accordian = (props) => {
    return (
        <div className={`accordian ${props.className || ''}`}>
            {
                props.data.map((item, index) => (
                    <AccordianItem key={index} title={item.title} content={item.content} />
                ))
            }
        </div>
    )
}

export default Accordian;