import React from 'react';

import './ToolbarButton.scss';

function ToolbarButton(props) {
  return (
    <button className="toolbar-button" {...props} />
  );
}

export default ToolbarButton;
