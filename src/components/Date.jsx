import React from 'react'

export default function Date(props) {
    const {day, month} = props;

    return (
        <div className='event-date'>
            <p>{day}</p>
            <p>{month}</p>
        </div>
    )
}
