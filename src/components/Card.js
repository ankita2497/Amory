import React from 'react'

function Card(props) {
    return (
        <div>
            <h2 className="heading-2">{props.title}</h2>
            <h6>{ props.desc}</h6>
        </div>
    )
}

export default Card
