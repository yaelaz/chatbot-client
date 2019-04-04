import React from 'react'
import './Bubble.scss'
import TypingDots from '../TypingDots'

export default function Bubble(props) {
  return (
    <div className={`bubble-container ${props.type} ${props.first && 'first'}`}>
      <div className="avatar"></div>
      <div className="text-container">
        <div className="text">
          {props.typing ?
            <TypingDots />
            :
            props.text
          }
        </div>
      </div>
    </div>
  );
}
