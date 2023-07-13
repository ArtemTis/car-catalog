import React from 'react'

const VideoPlayer = () => {
    const ref = React.useRef<HTMLVideoElement>(null);
    
    const handlePlay = () => {
        ref?.current?.pause()
    }
    const handlePause = () => {
        ref?.current?.pause()
    }
    return (
        <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}> Pause</button >
        </div>
    )
}

export default VideoPlayer;