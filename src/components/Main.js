import React from 'react';
import ContentSidebar from './ContentSidebar';
import EffectsSidebar from './EffectsSidebar';
import Toolbar from './Toolbar';
import VideoStage from './VideoStage';

import TimelineControls from './TimelineControls';

import './Main.scss';

function Main() {
  return (
    <main className="main">
      <Toolbar />
      <div className="main__container">
        <ContentSidebar />
        <VideoStage />
        <EffectsSidebar />
      </div>
      <TimelineControls />
    </main>
  );
}

export default Main;
