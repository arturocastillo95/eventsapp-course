import React from 'react'
import Event from './Event'
export default function EventList( {events} ) {
    return (
        <div className='event-list'>
            {events.map(event => {
                return <Event {...event} />
            })}
        </div>
    )
}
