import React from 'react'

function StoryImage(props) {
    return (
        <>
        <div style={{padding: "1rem"}}>
            <img src={props.image} alt="pillowMake" style={{width: "100%"}}/>
        </div>
            </>
    )
}

export default StoryImage
