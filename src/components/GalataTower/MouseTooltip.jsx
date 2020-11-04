import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MouseTooltip = ({ visible, children, offsetX, offsetY, className, style }) => {
  const [state, setState] = useState({
    xPosition: 0,
    yPosition: 0,
    mouseMoved: false,
    listenerActive: false
  });

  const getTooltipPosition = ({ clientX: xPosition, clientY: yPosition }) => {
    setState(oldState => {
      return {
        ...oldState,
        xPosition,
        yPosition,
        mouseMoved: true
      };
    });
  };

  const addListener = () => {
    window.addEventListener('mousemove', getTooltipPosition);
    setState(oldState => {
      return { ...oldState, listenerActive: true };
    });
  };

  const removeListener = () => {
    window.removeEventListener('mousemove', getTooltipPosition);
    setState(oldState => {
      return { ...oldState, listenerActive: false };
    });
  };

  const updateListener = () => {
    if (!state.listenerActive && visible) {
      addListener();
    }

    if (state.listenerActive && !visible) {
      removeListener();
    }
  };

  useEffect(() => {
    addListener();
    return () => {
      removeListener();
    };
  }, []);

  useEffect(() => {
    updateListener();
  }, [state.listenerActive, visible]);

  return (
    <div
      className={className}
      style={{
        display: visible && state.mouseMoved ? 'block' : 'none',
        position: 'fixed',
        top: state.yPosition + offsetY,
        left: state.xPosition + offsetX,
        ...style
      }}
    >
      {children}
    </div>
  );
};

MouseTooltip.defaultProps = {
  visible: true,
  offsetX: 0,
  offsetY: 0,
  className: '',
  style: {}
};

MouseTooltip.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default MouseTooltip;
