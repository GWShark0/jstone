import React from 'react';
import thumbnail from '../assets/mountains.jpg';

import './VideoStage.scss';

function VideoStage() {
  return (
    <div className="video-stage">
      <img
        className="video-stage__thumbnail"
        src={thumbnail}
        alt=""
      />
    </div>
  );
}

export default VideoStage;
