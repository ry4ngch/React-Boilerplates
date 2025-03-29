import React from "react";
import classNames from "classnames";

const Button = (props) => {
    const buttonStyle = classNames('button', {
        'clear-button': props.buttonStyle==='clear',
        'btn-blur': props.buttonStyle==='blur',
        'btn-blue-blur': props.buttonStyle==='blueBlur',
        'btn-block': props.isBlock,
        'btn-expand-full': props.expandFull,
        'inverse': props.inverseColor
    })

    const switchStyle = classNames('switch', {
        'slider-dark': props.sliderMode === 'dark',
        'slider-forest': props.sliderMode === 'forest'
    })

    let buttonContent;
    switch(props.buttonType){
        case "widget":
            buttonContent = (<button className={['btn-icon-wrapper', props.className || ''].join(' ').trim()} onClick={props.onClick} disabled={props.disabled} style={props.style}>
                                <span className={['icon', props.icon].join(' ').trim()}></span>
                            </button>)
            break;
        default:
            buttonContent = <button className={[buttonStyle, props.className || ''].join(' ').trim()} onClick={props.onClick} disabled={props.disabled} style={props.style}>{props.children}</button>
    }

    

    return (
        <React.Fragment>
            {props.type === 'switch' && <input type="checkbox" className={[switchStyle, props.className || ''].join(' ').trim()} onChange={props.onChange} disabled={props.disabled} name={props.name} value={props.value} checked={props.checked} style={props.style}></input>}
            {props.type === 'checkbox' && <input type="checkbox" className={`${props.className || ''}`} onChange={props.onChange} disabled={props.disabled} name={props.name} value={props.value} checked={props.checked} style={props.style}></input>}
            {props.type === 'button' && buttonContent}
        </React.Fragment>

    )
}

Button.defaultProps = {
    icon: 'leftArrow',
    buttonType: '',
    buttonStyle: '',
    buttonBlock: false,
    expandFull: false,
    disabled: false,
    inverseColor: false,
    onChange: () => {}
}

export default Button;