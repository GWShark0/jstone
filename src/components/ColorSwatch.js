import React from 'react';

import './ColorSwatch.scss';

function ColorSwatch(props) {
  const { color: backgroundColor } = props;
  const style = { backgroundColor };
  return (
    <div className="color-swatch" style={style} />
  );
}

export default ColorSwatch;
