import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const OuterRoundProgressBar = ({ value }) => {
  
  const containerStyle = {
    position: 'relative',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    overflow: 'hidden',
  };

  const outerCircleStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '10px solid #2196f3',
    clipPath: `polygon(0 0, 100% 0, 100% ${100 - value}%, 0 100%)`,
  };

  const innerCircleStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#fff',
    transition: 'width 0.6s ease-in-out',
    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const percentageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div className="outer-round-progress-bar" style={containerStyle}>
      <div className="outer-circle" style={outerCircleStyle}>
        <div className="inner-circle" style={innerCircleStyle}>
          <span style={percentageStyle}>{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default OuterRoundProgressBar;
