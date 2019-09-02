import React from 'react';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import Timeline from './Timeline';

import './TimelineControls.scss';

function TimelineControls() {
  return (
    <div className="timeline-controls">
      <PlayCircleFilledRoundedIcon className="timeline-controls__play-pause" />
      <Timeline />
    </div>
  );
}

export default TimelineControls;
