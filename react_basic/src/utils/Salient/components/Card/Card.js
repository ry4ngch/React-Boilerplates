import React, {useState, useEffect} from "react";
import classNames from "classnames";

const Card = (props) => {
    const cardClasses = classNames('card', {
        'card_tilt': props.animation == 'tilt',
        'card_flipX': props.animation == 'flip-x',
        'card_flipY': props.animation == 'flip-y',
        'card_scale': props.animation == 'scale'
    })

    const [gridState, setGridState] = useState(false);
    const rows = 10;
    const cols = 10;
  
    const cells = Array.from({ length: rows * cols });

    useEffect(() => {
        setGridState(props.animation == 'tilt');
    }, [props.animation])
  
    return (
        <div className={`${cardClasses} ${props.className || ''}`} style={{ '--rows': rows, '--cols': cols, ...props.style }}>
            {gridState && (
                <div className="tracker__cells" aria-hidden="true">
                    {cells.map((_, index) => (
                    <div key={index} className="cell"></div>
                    ))}
                </div>
            )}
            {props.children}
      </div>
    );
  
}

export default Card;