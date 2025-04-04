import React from "react";

const Badge = ({text, status, className, hasIndicator, ...rest}) => {
    return (
        <span class={`badge ${status} ${hasIndicator ? 'has-indicator' : ''} ${className || ''}`} {...rest}>{text}</span>
    )
}

export default Badge;