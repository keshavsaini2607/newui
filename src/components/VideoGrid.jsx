import React from 'react'
import './VideoGrid.css'

const VideoGrid = () => {

    const playVideo = (e) => {
        e.target.play();
      }
    
      const pauseVideo = (e) => {
        e.target.pause();
      }
    return (
        <div className="videoGrid">
        <div className="grid-circle one"></div>
        <div className="grid-circle two"></div>
        <div className="grid-circle three"></div>
        <div className="grid-circle four"></div>
        <div className="grid-circle five"></div>
        <div className="grid-circle six"></div>
        <div className="grid-circle seven"></div>
        <div className="grid-circle eight"></div>
        <div className="grid-circle nine"></div>
        <div className="grid-circle ten"></div>
        <div className="videoGrid__header">
          <h1>Enhance Your Creativity</h1>
        </div>
        <div className="grid">
          <div className="row-1">
            <div className="video-grid-1">
              <video
                src="https://cdn.quantavid.com/HomeVideos/yellow.mp4"
                preload="auto"
                onMouseOver={playVideo}
                onMouseOut={pauseVideo}
                muted
                loop
              />
            </div>
            <div className="video-grid-2">
              <video
                src="https://cdn.quantavid.com/HomeVideos/edu.mp4"
                preload="auto"
                onMouseOver={playVideo}
                onMouseOut={pauseVideo}
                muted
                loop
              />
            </div>
            <div className="video-grid-3">
              <video
                src="https://cdn.quantavid.com/HomeVideos/spark.mp4"
                preload="auto"
                onMouseOver={playVideo}
                onMouseOut={pauseVideo}
                muted
                loop
              />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="row-1">
            <div className="video-grid-3">
              <video
                src="https://cdn.quantavid.com/HomeVideos/flowers.mp4"
                preload="auto"
                onMouseOver={playVideo}
                onMouseOut={pauseVideo}
                muted
                loop
              />
            </div>
            <div className="video-grid-2">
              <video
                src="https://cdn.quantavid.com/HomeVideos/city.mp4"
                preload="auto"
                onMouseOver={playVideo}
                onMouseOut={pauseVideo}
                muted
                loop
              />
            </div>
            <div className="video-grid-1">
              <video
                src="https://cdn.quantavid.com/HomeVideos/sticker.mp4"
                preload="auto"
                onMouseOver={playVideo}
                onMouseOut={pauseVideo}
                muted
                loop
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default VideoGrid
