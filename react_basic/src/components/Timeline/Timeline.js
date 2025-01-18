import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import {initializeSalientTimeline, recomputeTimelineLayout} from '../../utils/Salient/salient-timeline';
import classNames from 'classnames'

const Timeline = (props) => {
    const timelineClass = classNames('timeline', {
        'timeline-horz': props.isHorz,
        'card': props.isCard,
        'flat-em': props.flattenCard,
        'loaded': !props.isLoading && React.Children.count(props.children) > 0,
        'timeline-staggered': props.isStaggered,
        'center-events': props.centerEvents
    });

    const [showCount, setShowCount] = useState(props.showCount);

    const updateShowCount = (event) => {
        setShowCount(parseInt(event.target.value, 10));
    }

    const hasInitialized = useRef(false); // Track if initialization is done

    // handle when data fetch through axios
    useLayoutEffect(() => {
        if(!props.isLoading && React.Children.count(props.children) > 0){
            initializeSalientTimeline();  
            hasInitialized.current = true;
        }
    }, [props.isLoading, props.children]);  
    
    //handle when state change
    useEffect(() => {
        if(hasInitialized.current && !props.isLoading && React.Children.count(props.children) > 0){
            recomputeTimelineLayout();
            
        }
    }, [props.children, showCount]);  

    return (
        <Col md="12" lg="12" xs="12">
            <div className={timelineClass} data-show-count={showCount}>
                <div className="timeline-header timeline-group justify-between">
                    <h3><FontAwesomeIcon icon='history' className="header-icon"></FontAwesomeIcon>{props.title}</h3>
                    <select value={showCount} onChange={updateShowCount} className="header-widget">
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                    </select>
                </div>
                {props.showControls && <button className="toggle-timeline toggle-back"></button>}
                {props.children}    
                {props.showControls && <button className="toggle-timeline toggle-forward"></button>}
            </div>
            
        </Col>
    )
}

// set default props for showControls to true when showControls prop is never set as an attribute
Timeline.defaultProps = {
    showControls: true
}

export default Timeline;