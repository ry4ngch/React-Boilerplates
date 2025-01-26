import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {initializeSalientTimeline, recomputeTimelineLayout} from '../../utils/Salient/salient-timeline';
import classNames from 'classnames';
import TimelineEvents from "./TimelineEvents";

const Timeline = (props) => {
    const timelineClass = classNames('timeline', {
        'timeline-horz': props.isHorz,
        'loaded': !props.isLoading && props.data.length > 0,
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
    }, [props.data, showCount]);  

    return (
        <React.Fragment>
            <div className={`${timelineClass} ${props.className || ''}`} data-show-count={showCount}>
                {props.title.trim().length > 0 && <div className="timeline-header timeline-group justify-between">
                    <h3><FontAwesomeIcon icon={props.headerIcon} className="header-icon"></FontAwesomeIcon>{props.title}</h3>
                    <select value={showCount} onChange={updateShowCount} className="header-widget">
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                    </select>
                </div>}
                {props.showControls && <button className="toggle-timeline toggle-back"></button>}
                {props.data.length > 0 && <TimelineEvents data={props.data} />}
                {props.showControls && <button className="toggle-timeline toggle-forward"></button>}
            </div>
            
        </React.Fragment>
    )
}

// set default props for showControls to true when showControls prop is never set as an attribute
Timeline.defaultProps = {
    title: '',
    showControls: true,
    isStaggered: false,
    centerEvents: false,
    isHorz: false,
    headerIcon: 'history'
}

export default Timeline;