import React from "react";

const TextField = ({inputPrefix, expandFull = false, className, children, label, ...rest}) => {
    return (
        <div className={`text-field-group ${expandFull ? 'expand-full' : ''} ${className || ''}`.trim()}>
            {children}
            {label && <label className="text-field-title">{label}</label>}
            <div className='text-field-input'>
                {inputPrefix ? inputPrefix : ''}
                <input {...rest}/>
            </div>
        </div>
    )
}

export default TextField;