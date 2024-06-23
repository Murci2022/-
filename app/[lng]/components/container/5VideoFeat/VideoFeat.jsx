import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { letzteTanzJP } from '../../constants';

import './VideoFeat.css';
const VideoFeat = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  console.log(vidRef.current);
  const handleClick = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className='videofeat'>
      <video
        src={letzteTanzJP}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        /*     muted */
      />

      <div className='videofeat-overlay flex__center'>
        <div
          className='videofeat-overlay_circle flex__center'
          onClick={handleClick}
        >
          {playVideo ? (
            <BsPauseFill
              color='#fff'
              fontSize={30}
            />
          ) : (
            <BsFillPlayFill
              color='#fff'
              fontSize={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoFeat;
