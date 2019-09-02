import React from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded';
import ContentSidebarButton from './ContentSidebarButton';
import { openModal } from '../reducers/modals';

import './ContentSidebar.scss';

function ContentSidebar(props) {
  const { openModal } = props;

  return (
    <Paper className="content-sidebar">
      <ContentSidebarButton onClick={() => openModal('text')}>
        <TextFieldsRoundedIcon />
        <div>
          {'Text'}
        </div>
      </ContentSidebarButton>
      <ContentSidebarButton onClick={() => openModal('media')}>
        <PermMediaIcon />
        <div>
          {'Media'}
        </div>
      </ContentSidebarButton>
      <ContentSidebarButton onClick={() => openModal('audio')}>
        <QueueMusicRoundedIcon />
        <div>
          {'Audio'}
        </div>
      </ContentSidebarButton>
    </Paper>
  );
}

const mapDispatchToProps = { openModal };

export default connect(
  null,
  mapDispatchToProps,
)(ContentSidebar);
