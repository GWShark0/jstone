import React from 'react';
import range from 'lodash/range';
import { ReactComponent as Handle } from '../assets/cursor.svg';

import './Timeline.scss';

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__segments">
        {createSegments(45)}
        <div className="timeline__progress">
          <Handle className="timeline__progress-handle" />
        </div>
      </div>
    </div>
  );
}

function createSegments(n) {
  return range(n).map((i) => <div className="timeline__segment" key={i} />);
}

export default Timeline;
