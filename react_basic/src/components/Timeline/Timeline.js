import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import {initializeSalientTimeline, recomputeTimelineLayout} from '../../utils/Salient/salient-timeline';
import classNames from 'classnames';

const Timeline = (props) => {
    const timelineClass = classNames('timeline', {
        'timeline-horz': props.isHorz,
        'loaded': !props.isLoading && props.data.length > 0,
        'timeline-staggered': props.isStaggered,
        'center-events': props.centerEvents,
        'timeline-active': props.isTimelineActive && props.activeEventID
    });

    const hasInitialized = useRef(false); // Track if initialization is done

    // handle when data fetch through axios
    useLayoutEffect(() => {
        if(!props.isLoading && props.data.length > 0){
            initializeSalientTimeline();  
            hasInitialized.current = true;
        }
    }, [props.isLoading, props.data]);  
    
    //handle when state change
    useEffect(() => {
        if(hasInitialized.current && !props.isLoading && props.data.length > 0){
            recomputeTimelineLayout();
            
        }
    }, [props.data, props.showCount]);  

    return (
        <React.Fragment>
            <div className={`${timelineClass} ${props.className || ''}`} data-show-count={props.showCount} data-active-id={props.activeEventID} style={props.style}>
                {props.showControls && <button className="toggle-timeline toggle-back"></button>}
                {props.data.length > 0 && <TimelineEvents data={props.data} />}
                {props.showControls && <button className="toggle-timeline toggle-forward"></button>}
            </div>
            
        </React.Fragment>
    )
}

// set default props for showControls to true when showControls prop is never set as an attribute
Timeline.defaultProps = {
    showControls: true,
    isStaggered: false,
    centerEvents: false,
    isHorz: false,
    isTimelineActive: false,
    activeEventID: undefined
}

const TimelineEvents = ({data}) => {
    return (
        <ul>
            {data.map((item, index) => (
                <li key={item.id}>
                    <label className={`timeline-event-icon ${index === 0 ? 'icon-square' : 'icon-circle'}`}></label>
                    <span className="timeline-event-thumbnail">{item.thumbnail}</span>
                    <small>{item.text}</small>
                </li>
            ))}
        </ul>
    )
}

export default Timeline;
export {TimelineEvents};