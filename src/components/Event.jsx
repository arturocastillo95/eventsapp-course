import React from 'react'

export default function Event(props) {
    const {id, name, time, location, day, month, image} = props;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
