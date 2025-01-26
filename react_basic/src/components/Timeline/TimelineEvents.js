import React from "react"

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

export default TimelineEvents;