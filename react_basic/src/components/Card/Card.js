import React, {useLayoutEffect, useRef} from "react";
import initCardTiltEffect from "../../utils/Salient/salient-card";
import classNames from "classnames";

const Card = (props) => {
    const cardClasses = classNames('card', {
        'card_tilt': props.animation == 'tilt',
        'card_flipX': props.animation == 'flip-x',
        'card_flipY': props.animation == 'flip-y',
        'card_scale': props.animation == 'scale'
    })

    const ref = useRef();

    useLayoutEffect(() => {
        if(ref.current.classList.contains('card_tilt')){
            initCardTiltEffect();
        }
    }, [])

    return (
        <div style={props.style} className={`${cardClasses} ${props.className || ''}`} ref={ref}>
            {props.children}
        </div>
    )
}

export default Card;