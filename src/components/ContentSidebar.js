import React from 'react';
import Paper from '@material-ui/core/Paper';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded';
import ContentSidebarButton from './ContentSidebarButton';

import './ContentSidebar.scss';

function ContentSidebar() {
  return (
    <Paper className="content-sidebar">
      <ContentSidebarButton>
        <TextFieldsRoundedIcon />
        <div>
          {'Text'}
        </div>
      </ContentSidebarButton>
      <ContentSidebarButton>
        <PermMediaIcon />
        <div>
          {'Media'}
        </div>
      </ContentSidebarButton>
      <ContentSidebarButton>
        <QueueMusicRoundedIcon />
        <div>
          {'Audio'}
        </div>
      </ContentSidebarButton>
    </Paper>
  );
}

export default ContentSidebar;
