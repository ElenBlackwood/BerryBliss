import React from 'react'
import videoBg from '../assets/video-wine.webm'
import videoIos from '../assets/video-wine.mp4'

function Video() {
  return (
    <div>
            <video autoPlay loop muted>
                {/* WebM/VP8 for Firefox4, Opera, и Chrome  */}
                <source src={videoBg} type="video/webm"/> 
                {/* MP4 for Safari, IE9, iPhone, iPad, Android, and Windows Phone 7  */}
                <source src={videoIos} type="video/mp4"/>         
            </video>
        </div>
  )
}

export default Video