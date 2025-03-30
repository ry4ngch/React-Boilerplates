import React, { useState, useRef, useEffect } from "react";

const NumericField = ({ fieldName = "Field Name", min = 0, max = 100, step = 1, value = min, className = "", enableSuggestion = false, suggestionLimit = 5, ...rest }) => {
    const [fieldCount, setFieldCount] = useState(value);
    const [dropdownActive, setDropdownActive] = useState(false);
    const suggestionRef = useRef(null);
    const fieldRef = useRef(null);
    const inputRef = useRef(null);

    // Get decimal places in step
    const getDecimalPlaces = (num) => {
        const str = num.toString();
        return str.includes(".") ? str.split(".")[1].length : 0;
    };

    const decimalPlaces = getDecimalPlaces(step);

    const updateFieldCount = (delta) => {
        setFieldCount((prev) => {
            let newValue = prev + delta;
            newValue = parseFloat(newValue.toFixed(decimalPlaces)); // Fix precision issues
            return Math.min(Math.max(newValue, min), max);
        });
    };

    const modifyFieldValue = (e) => {
        const val = e.target.value.trim();
        if (val !== "" && !isNaN(val)) {
            setFieldCount(parseFloat(val));
        }
    };

    const switchFieldCount = (val) => {
        setFieldCount(val);
        setDropdownActive(false);
    }

    const generateSuggestedFieldCounts = (min, max, suggestionLimit) => {
        const range = max - min;
        let step = Math.round(range / (suggestionLimit - 1)); // Get the closest integer step
        
        let result = Array.from({ length: suggestionLimit }, (_, index) => min + index * step);
    
        // Ensure the last value is exactly max
        result[result.length - 1] = max;
    
        return result;
    };

    const suggestedFieldCounts = generateSuggestedFieldCounts(min, max, suggestionLimit);

    useEffect(() => {
        if (fieldRef.current && suggestionRef.current) {
            suggestionRef.current.style.width = fieldRef.current.offsetWidth + "px";
        }

        const handleWheel = (event) => {
            if (inputRef.current && inputRef.current === document.activeElement) {
                event.preventDefault(); // Prevent scroll changes
            }
        };

        document.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            document.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="numeric-field-group" tabIndex="0" onBlur={() => setDropdownActive(false)}>
            <div className={`numeric-field-wrapper ${className}`.trim()} {...rest}>
                <div 
                    className={`numeric-field-data ${enableSuggestion ? 'field-dropdown' : ''} ${dropdownActive && inputRef.current !== document.activeElement && enableSuggestion ? 'field-active' : ''}`.trim()} 
                    onClick={() => setDropdownActive((prevState) => !prevState)}  
                    ref={fieldRef}>
                    <input 
                        type="number" 
                        min={min} 
                        max={max} 
                        step={step}
                        onChange={modifyFieldValue} 
                        value={fieldCount} 
                        ref={inputRef}
                    />
                    <span>{fieldName}</span>
                </div>
                <div className="numeric-field-controls">
                    <span className="control-btn btn-increment" onClick={() => updateFieldCount(step)}>+</span>
                    <span className="control-btn btn-decrement" onClick={() => updateFieldCount(-step)}>-</span>
                </div>
            </div>
            {enableSuggestion && <ul className="numeric-field-suggestion" ref={suggestionRef}>
                {suggestedFieldCounts.map((val, index) => (
                    <li key={index} onClick={() => switchFieldCount(val)}>{val}</li>
                ))}
            </ul>}
        </div>
    );
};

export default NumericField;