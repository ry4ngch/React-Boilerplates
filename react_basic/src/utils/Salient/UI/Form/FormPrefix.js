import React from "react";

const FormPrefix = (props) => {
    return (
        <span className={['form-prefix', props.className || ''].join(" ").trim()}>
            <i className={["icon", props.icon || ''].join(" ").trim()}></i>
        </span>
    )
}

export default FormPrefix;