import React, { useState } from 'react'
import video from "../assets/video.mp4";

function Video() {
    const [show, setShow] = useState(false);
    const removeVideo = () => {
        setShow(!show);
    }
    return (
        <>
        <div className="home-img">
            <div className="feature-img">
                <i className="fa fa-play-circle" onClick={removeVideo}> &nbsp;Play Video</i>
            </div>
        </div>
            <div className={show?"video-player": "DisplayNone"} >
                <video width="100%" controls autoPlay>
                    <source src={video} type="video/mp4"></source>
                </video>
                <i className="fa fa-times-circle"onClick={removeVideo}></i>
            </div>
            <h3 className="heading-2">Grab a friend to help you<span> assemble your very own</span>
                 <span>handcrafted </span>
                <span>Honeycomb Shelves</span></h3>
            <div className="underline-2"></div>
        </>
    )
}

export default Video
