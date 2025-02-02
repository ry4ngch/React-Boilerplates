import React, {useEffect} from "react";
import AccordianItem from "./AccordianItem";
import initAccordian from "../../utils/Salient/salient-accordian";

const Accordian = (props) => {
    useEffect(() => {
        initAccordian();
    }, []);

    return (
        <div className={`accordian ${props.className || ''}`} data-active-toggle={props.activeToggle}>
            {
                props.data.map((item, index) => (
                    <AccordianItem key={index} title={item.title} content={item.content} />
                ))
            }
        </div>
    )
}

Accordian.defaultProps = {
    activeToggle: 'multiple'
}

export default Accordian;