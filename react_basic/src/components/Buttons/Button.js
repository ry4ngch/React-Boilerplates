import React from "react";
import classNames from "classnames";

const Button = (props) => {
    const widgetStyle = classNames('', {
        "left-arrow-icon": props.icon==="leftArrow",
        "right-arrow-icon": props.icon==="rightArrow",
        "top-arrow-icon": props.icon==="topArrow",
        "bottom-arrow-icon": props.icon==="btmArrow"
    })

    const buttonStyle = classNames('button', {
        'clear-button': props.buttonStyle==='clear',
        'btn-blur': props.buttonStyle==='blur',
        'btn-blue-blur': props.buttonStyle==='blueBlur',
        'btn-block': props.isBlock,
        'btn-expand-full': props.expandFull
    })

    let buttonContent;
    switch(props.buttonType){
        case "widget":
            buttonContent = (<button className={`btn-icon-wrapper ${props.className}`} onClick={props.onClick} disabled={props.disabled}>
                                <span className={widgetStyle}></span>
                            </button>)
            break;
        default:
            buttonContent = <button className={`${buttonStyle} ${props.className}`} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    }

    

    return (
        <React.Fragment>
            {props.type === 'switch' && <input type="checkbox" className={`switch ${props.className}`} onChange={props.onChange} disabled={props.disabled} name={props.name}></input>}
            {props.type === 'checkbox' && <input type="checkbox" className={`${props.className}`} onChange={props.onChange} disabled={props.disabled} name={props.name}></input>}
            {props.type === 'button' && buttonContent}
        </React.Fragment>

    )
}

Button.defaultProps = {
    icon: 'leftArrow',
    buttonType: '',
    buttonStyle: 'clear',
    buttonBlock: false,
    expandFull: false,
    disabled: false
}

export default Button;