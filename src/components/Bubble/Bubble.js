import React from 'react'
import './Bubble.scss'
import TypingIndicator from '../TypingIndicator'

//todo: handle last bubble
//todo: add propTypes
//todo: render avatar only on first, get rid of avatar css styling for first
//todo: bound messages to not overflow to the avatar's column

export default function Bubble(props) {
  return (
    <div className={`bubble-container ${props.type} ${props.position}`}>
      <div className="avatar-container"></div>
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
