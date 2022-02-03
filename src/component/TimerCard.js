import React from 'react';

const TimerCard = ({value, type}) => {
  return  (
    <div className='timer-card'>
        <div className='value'>{value}</div>
        <div className='type'>{type}</div>
    </div>
)};

export default TimerCard;
