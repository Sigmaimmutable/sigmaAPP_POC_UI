import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

const OuterRoundProgressBar = ({ value }) => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
      setInterval(() => {
        const savedTheme = localStorage.getItem('theme::SigUI');
        setTheme(savedTheme)
      }, 500);
  }, [theme]);

  const containerStyle = {
    position: 'relative',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: theme === 'light' ? '#fff' : '#333333',
    overflow: 'hidden',
  };

  const outerCircleStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: `10px solid ${theme === 'light' ? '#2196f3' : '#2dece4'}`,
    clipPath: `polygon(0 0, 100% 0, 100% ${100 - value}%, 0 100%)`,
  };

  const innerCircleStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: theme === 'light' ? '#fff' : '#333333',
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
