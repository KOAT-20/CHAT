import React from 'react';
/* Style */
import { Bar, LeftInner, RightInner } from './bar.js';
import onLine from '../../icons/onLine.png';
import close from '../../icons/close.png';

export default function BarApp ({room}) {
  return (
    <Bar>
      <LeftInner>
        <img src={onLine} alt='On line' style={{marginRight:'5%'}} />
        <h3>{room}</h3>
      </LeftInner>
      <RightInner>
        <a href='/'>
          <img src={close} alt='Close' />
        </a>
      </RightInner>
    </Bar>
  );
}
