import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import initializeSalientTimeline from '../../utils/salient-timeline';
import classNames from 'classnames'

const Timeline = (props) => {
    let btnClick = () => {
        console.log('clicked');
    }

    const timelineClass = classNames('timeline', {
        'timeline-horz': props.isHorz,
        'card': props.isCard,
        'flat-em': props.flattenCard,
        'loaded': !props.isLoading && React.Children.count(props.children) > 0
    })

    
    useEffect(() => {
        if(React.Children.count(props.children) > 0){
            initializeSalientTimeline();   
        }
    }, [props.isLoading, props.children]);  

    return (
        <Col md="12" lg="12" xs="12">
            <div className={timelineClass} data-show-count={props.showCount}>
                <h3><FontAwesomeIcon icon='history' className="header-icon"></FontAwesomeIcon>{props.title}</h3>
                <button className="toggle-timeline toggle-back"></button>    
                {props.children}    
                <button className="toggle-timeline toggle-forward"></button>
            </div>

            <div className="card bg-dracula flat-em">
                <button className="clear-button">Hello</button>
                <button className="btn-blur">Hello2</button>
                <button className="btn-blue-blur">Hello3</button>
                <input type="checkbox" className="switch" checked onChange={btnClick}></input>
                <input type="checkbox" checked onChange={btnClick}></input>
                <input type="checkbox" checked disabled onChange={btnClick}></input>
            </div>
            
        </Col>
    )
}

export default Timeline;