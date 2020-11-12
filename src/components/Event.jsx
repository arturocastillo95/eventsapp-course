import React from 'react'
import Date from './Date'
import EventImage from '../images/event.jpg'

export default function Event(props) {
    const {id, name, time, location, date, image} = props;
    return (
        <div class="event">
            <div className="event-image">
                <img src={EventImage} alt=""/>
            </div>
            <div className='event-container'>
                <Date {...date} />
                <div className="event-info">
                    <h2>{name}</h2>
                    <span>{time} - {location}</span>
                </div>
            </div>
        </div>
    )
}
