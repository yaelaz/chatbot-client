import React from 'react'
import PropTypes from 'prop-types'

import TypingIndicator from '../TypingIndicator'

import './Bubble.scss'

export default function Bubble(props) {
  return (
    <div className={`bubble-container ${props.type} ${props.position}`}>
      <div className="avatar-container">
        {props.position === 'first' && <div className="avatar"></div>}
      </div>
      <div className="text-container">
        {props.isTyping ?
          <TypingIndicator />
          :
          props.text
        }
      </div>
    </div>
  );
}

Bubble.propTypes = {
  type: PropTypes.oneOf(['incoming', 'outgoing']).isRequired,
  position: PropTypes.oneOf(['first', 'middle', 'last']).isRequired,
  isTyping: PropTypes.bool,
  text: PropTypes.string
};
