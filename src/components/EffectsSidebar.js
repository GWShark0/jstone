import React, { useState } from 'react';
import range from 'lodash/range';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './EffectsSidebar.scss';

const expandIcon = <ExpandMoreIcon />;

function EffectsSidebar() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="effects-sidebar">
      <ExpansionPanel
        className="effects-sidebar__panel"
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary expandIcon={expandIcon}>
          <Typography>
            {'Text animations'}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {createEffects(7)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        className="effects-sidebar__panel"
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary expandIcon={expandIcon}>
          <Typography>
            {'Outros'}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {createEffects(4)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        className="effects-sidebar__panel"
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary expandIcon={expandIcon}>
          <Typography>
            {'Transitions'}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {createEffects(5)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

function createEffects(n) {
  return range(n).map((i) => <div className="effect" key={i} />);
}

export default EffectsSidebar;
