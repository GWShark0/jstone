import React from 'react';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import GridOnIcon from '@material-ui/icons/GridOn';
import ColorSwatch from './ColorSwatch';
import ToolbarButton from './ToolbarButton';

import './Toolbar.scss';

function Toolbar() {
  return (
    <div className="toolbar">
      <Paper className="toolbar__container">
        <ToolbarButton>
          {'Avenir'}
          <KeyboardArrowDownIcon className="align-middle" />
        </ToolbarButton>
        <ToolbarButton>
          {'50 pt'}
          <KeyboardArrowDownIcon className="align-middle" />
        </ToolbarButton>
        <ToolbarButton>
          <ColorSwatch color="#ffe121" />
        </ToolbarButton>
        <ToolbarButton>
          <ColorSwatch color="#f5a623" />
        </ToolbarButton>
        <ToolbarButton>
          <FormatAlignLeftIcon className="align-middle" fontSize="small" />
        </ToolbarButton>
        <ToolbarButton>
          <GridOnIcon className="align-middle" fontSize="small" />
        </ToolbarButton>
      </Paper>
      <Paper className="toolbar__container">
        <ToolbarButton>
          {'Format'}
          <KeyboardArrowDownIcon className="align-middle" />
        </ToolbarButton>
      </Paper>
    </div>
  );
}

export default Toolbar;
